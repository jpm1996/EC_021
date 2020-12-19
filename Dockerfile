FROM node:lts  

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

Copy . .

EXPOSE 5000

CMD ["npm", "run", "start"]

