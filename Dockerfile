# Image from Docker Hub
FROM node:20-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache curl

COPY package*.json ./

RUN npm install

#COPY .env ./

COPY . .

EXPOSE 5000

CMD ["npm", "start"]