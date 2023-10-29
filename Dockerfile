FROM node

WORKDIR /BOT-TELEGRAM

COPY . .

EXPOSE 3000

RUN npm install

CMD ["node","bot.js"]
