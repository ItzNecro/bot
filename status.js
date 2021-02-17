const client = new Discord.Client();

const db = require("quick.db")

const discord = require("discord.js")



module.exports = {
  name: "status",
  description: "Change the bot status",
  usage: "status <here>",
  category: "owner",
  run: async (client, message, args) => {
    
    //OWNER ONLY COMMAND
    if(!message.author.id === "715165927762559038") {
      return message.channel.send("This command can only be used by owner")
    }
    //ARGUMENT
    if(!args.length) {
      return message.channel.send("Please give status message")
    }
    
 db.set(`status`, args.join(" "))
   await message.channel.send("Updated the bot status")
    process.exit(1);
    
  }
}
