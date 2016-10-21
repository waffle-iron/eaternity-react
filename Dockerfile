FROM node:latest

MAINTAINER mcmunder

WORKDIR /code

CMD npm install && npm start
