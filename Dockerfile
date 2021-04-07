FROM node:10 AS builder

WORKDIR /app

COPY . .

RUN npm install 

CMD ["npm", "start"]