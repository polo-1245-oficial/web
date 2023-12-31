FROM node:21.4.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i axios
run npm i express
run npm i cors

COPY *.js ./

EXPOSE 3000

CMD ["node", "index.js"]