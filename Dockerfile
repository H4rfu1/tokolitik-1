FROM node:14-alpine

WORKDIR /usr/src/app/touta-profile

COPY package.json /usr/src/app/touta-profile//

ENV NODE_ENV development

RUN npm install

COPY . .

EXPOSE 80

CMD [ "npm", "run", "serve" ]