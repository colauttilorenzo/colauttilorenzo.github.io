import express, { static } from 'express';
import { resolve } from 'path';
const port = process.env.PORT || 8080;
const app = express();

const __dirnameBuild = __dirname + '/www/';

// the __dirname is the current directory from where the script is running
app.use(static(__dirnameBuild));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(resolve(__dirnameBuild, 'index.html'));
});

app.listen(port);