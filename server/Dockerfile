FROM node:18

WORKDIR /server

COPY package*.json ./

RUN npm install -f

COPY . .

EXPOSE 4000

CMD ["node", "index.js"]