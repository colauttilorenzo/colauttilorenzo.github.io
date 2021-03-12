FROM node:14

ARG APPLICATION_WORKING_PATH
WORKDIR ${APPLICATION_WORKING_PATH}

COPY ./www ./www
COPY ./server.js .

RUN echo "{ \"name\": \"app\", \"version\": \"1.0.0\", \"description\": \"\", \"main\": \"server.js\", \"scripts\": { \"test\": \"\" }, \"repository\": { \"type\": \"git\", \"url\": \"\" }, \"keywords\": [ \"\" ], \"author\": \"\", \"license\": \"ISC\" }"  > package.json

RUN npm install --save express
RUN npm install --save path
RUN npm ci --only=production

EXPOSE 8080
CMD [ "node", "server.js" ]