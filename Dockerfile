FROM node

WORKDIR /BOT-TELEGRAM

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node","bot.js"]
