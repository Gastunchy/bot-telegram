FROM node

WORKDIR /BOT-TELEGRAM

COPY . .

RUN npm install

EXPOSE $PORT

CMD ["node","bot.js"]
