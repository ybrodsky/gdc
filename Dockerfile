FROM node:0.10.38

RUN npm install nodemon -g

RUN mkdir /src

WORKDIR /src

EXPOSE 2050

CMD nodemon index.js -L