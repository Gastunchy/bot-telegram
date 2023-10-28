FROM node

WORKDIR /BOT-TELEGRAM

COPY . .

RUN npm install

CMD ["node","bot.js"]