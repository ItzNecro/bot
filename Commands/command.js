module.exports = {
    name: 'command'
    description: 'Embeds!'
    execute(message, arcs, Discord)
        const newEmbed = new Discord.messageEmbed()
        .setColor('#304281')
        .setTitle('Help')
        .setURL('https://discord.gg/3CBKdFGG9N')
        .setDescription('This is a guide for this bot')
        .addFields(
            {name: '$help' value: 'Show the guide for this bot!'}
        ) 
        .setImage('https://cdn.discordapp.com/attachments/811602297414484008/811929748023935026/AF827D43-EB4A-4A57-A12A-63CF49F83D7D.png')
        .setFooter('Hmm');  

        message.channel.send(newEmbed);
    }
}
