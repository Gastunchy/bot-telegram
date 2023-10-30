FROM node

WORKDIR /BOT-TELEGRAM

COPY . .

RUN npm install
RUN npm install kao
RUN npm install express
RUN npm install telegraf

EXPOSE 3000

CMD ["node","bot.js"]
