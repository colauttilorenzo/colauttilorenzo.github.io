FROM node:14

ARG APPLICATION_WORKING_PATH
WORKDIR ${APPLICATION_WORKING_PATH}

RUN echo "{ \"name\": \"app\", \"version\": \"1.0.0\", \"description\": \"\", \"main\": \"server.js\", \"scripts\": { \"test\": \"\" }, \"repository\": { \"type\": \"git\", \"url\": \"\" }, \"keywords\": [ \"\" ], \"author\": \"\", \"license\": \"ISC\" }"  > package.json

RUN apt-get update && apt-get install nano
RUN npm install --save express
RUN npm install --save path
RUN npm ci --only=production

EXPOSE 8080
EXPOSE 443
CMD [ "node", "server.js" ]