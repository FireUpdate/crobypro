const Discord = require('discord.js');
const figlet = require('figlet');
module.exports.run = async(bot, message, args) => {
if(!args[0]) return message.reply('<:yes:491110756985864213> | Please provide something to convert.');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
module.exports.help = {
name: "ascii"
}
