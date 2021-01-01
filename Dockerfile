FROM node:10

WORKDIR /js/src/app
COPY . .

RUN npm install

CMD ["node", "index.js"]
