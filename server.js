const express = require('express');
const path = require('path');
const https = require('https');
const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8080;
const app = express();

const __dirnameBuild = __dirname + '/www/';

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname, { dotfiles: 'allow' }));
app.use(express.static(__dirnameBuild));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirnameBuild, 'index.html'));
});

const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  console.log('Listening on port ' + port);
});

try {
  const privateKey = fs.readFileSync('/etc/letsencrypt/live/jslab.cloud/privkey.pem', 'utf8');
  const certificate = fs.readFileSync('/etc/letsencrypt/live/jslab.cloud/cert.pem', 'utf8');
  const ca = fs.readFileSync('/etc/letsencrypt/live/jslab.cloud/chain.pem', 'utf8');

  const httpsServer = https.createServer({ key: privateKey, cert: certificate, ca: ca }, app);
  httpsServer.listen(443, () => {
    console.log('HTTPS running on port 443');
  });

} catch (ex) { }