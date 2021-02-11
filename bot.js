const Discord = require('discord.js');

const client = new Discord.Client();
 


client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('**pong**');

       }

});



client.on('message', message => {

    if (message.content === 'hai guys') {

       message.channel.send('lu yang gay dyno');

       }
 
});



client.on('message', message => {

    if (message.content === 'hi') {

       message.reply('hai juga :D');

       }
 
});
 


client.on('message', message => {

    if (message.content === 'P') {

       message.reply('yang sopan :v');

       }
 
});



client.on('message', message => {

    if (message.content === 'Dyno bau') {

       message.channel.send('Emang');

       }
 
});



client.on('message', message => {

    if (message.content === 'tes') {

       message.channel.send('ngelag? :v');

       }
 
});



client.on('message', message => {

    if (message.content === 'p') {

       message.channel.send('Salam yang bener ngab! :v');

       }
 
});



client.on('message', message => {

    if (message.content === 'IKAN HIU MAKAN TOMAT') {

       message.channel.send('GOBLOG!!!! :v');

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



client.on('message', message => {
  if (message.content === 'ping') {
  message.channel.send('Loading data').then (async (msg) =>{
    msg.delete()
    message.channel.send(`🏓 Your ping is ${Date.now() - message.createdTimestamp}ms! :D`);
  })
  }
});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
