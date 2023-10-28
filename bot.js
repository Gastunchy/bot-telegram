const { Telegraf} = require('telegraf')

const bot = new Telegraf('6948768526:AAFWlqNJwDFn2rISOMr-19xNDsGb8kYtqbk')

//reaccion a los comandos start, help, setting y se creo un comando personalizado gastunchy para que se lea en diferentes formas
bot.start((ctx) => {
    console.log(ctx.from)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.updateSubTypes)
    //ctx.reply('Bienvenido:' + ' ' + ctx.from.first_name + ' ' + ctx.from.last_name);
    //se agreco abajo lo nuevo para hacer prueba con la api de telegram el de arriba esta comentado para que no interfiera
    bot.telegram.sendMessage (ctx.chat.id, 'Bienvenido little monster')
})
bot.help((ctx) => ctx.reply('En que te puedo ayudar?'))
bot.settings((ctx) => ctx.reply('setting'))
bot.command(['gastunchy','GASTUNCHY','Gastunchy'],(ctx) => ctx.reply('si funciona'))

//se crea un comando escucha para cuando el usuario escriba una palabra, el bot responda en este caso gay=>puerco
bot.hears('gay', ctx => ctx.reply('puerco'))

//el bot responde a cualquier texto que el usuario escriba, en "text" se pueden poner otras opciones como audio, sticker
//bot.on('text', ctx => ctx.reply('que estas haciendo?'))

bot.on('sticker', ctx => ctx.reply('Que bonito sticker, :)'))

bot.mention('gastunchy', (ctx) => ctx.reply('You mentioned someone'))

bot.phone('3513416410', (ctx) => ctx.reply('Que?'))

bot.hashtag('marta', (ctx) => ctx.reply('no te dejes ganar claudia'))

bot.launch()