FROM node:18

WORKDIR /client

COPY package*.json ./

RUN npm ci 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]