const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});



client.on('message', message => {

    if (message.content === ':v') {

       message.reply('Gk Jelas anjir :v');

       }
 
});
 


client.on('message', message => {

    if (message.content === 'P') {

       message.reply('Salam yang bener ngab! :v');

       }
 
});



client.on('message', message => {

    if (message.content === 'Hi') {

       message.channel.send('Halo gan');

       }
 
});



client.on('message', message => {

    if (message.content === 'Dyno bau') {

       message.channel.send('Emang');

       }
 
});



client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "idle",  //You can show online, idle....
        game: {
            name: "Hacked Client",  //The message shown
            type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });



client.on("ready", () =>{
    bot.user.setActivity(`this won't appear in the bot's custom status!`, {type: 4})


    
  
// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
