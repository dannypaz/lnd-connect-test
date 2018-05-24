FROM node:8

RUN mkdir /home/app

COPY ./server.js /home/app
COPY ./package.json /home/app

WORKDIR /home/app

RUN npm install
