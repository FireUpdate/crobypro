const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Developer", "`Fire#5421`")
    .addField("Library", "`discord.js@11.3.2`")
    .addField("Honorable Mentions", "`Incognito#4973` Help and Support")
    .setColor("#e2df1b")
    .setFooter("A Coder's Hangout")
    .setTimestamp()
    message.channel.send(embed);
}
module.exports.help = {
    name: "info"
}