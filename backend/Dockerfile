FROM node:17.2.0-alpine

WORKDIR /app
COPY package.json /app/
ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
