FROM node:14

ARG APPLICATION_WORKING_PATH
WORKDIR ${APPLICATION_WORKING_PATH}
COPY ./package*.json ./

RUN npm ci --only=production
COPY ./ .

EXPOSE 8080
CMD [ "node", "server.js" ]