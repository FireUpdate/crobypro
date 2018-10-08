const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(bUser === message.author) return message.channel.send("<:no:491110753537884160> **| Are You Retarded? Why Do You Want To Ban Yourself?**")
    if(!bUser) return message.channel.send("<:no:491110753537884160> **| Can't Find User!**");
    let bReason = args.join(" ").slice(22);
   if(!bReason) return message.channel.send("<:no:491110753537884160> **| Please Provide A Reason!**")
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("<:no:491110753537884160> **| You Don't Have `BAN_MEMBERS` Permisson.**");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#bc0000")
    .addField("User", bUser.user.tag)
    .addField("Moderator", message.author.tag)
    .addField("Reason", `${bReason ? bReason : "None."}`)
    .setTimestamp()
    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("<:no:491110753537884160> **| Can't Find `mod-log` Channel.**");
    let embed = new Discord.RichEmbed()
    .setTitle("BAN")
    .addField("Banned In", message.guild.name)
    .setColor("#bc0000")
    .addField("Moderator", message.author.tag)
    .addField("Reason", `${bReason ? bReason : "None."}`)
  message.channel.send("<:yes:491110756985864213> **| That Member Has Been Banned.**")
  bUser.ban(bReason)
  incidentchannel.send(banEmbed);
  try{bUser.send(embed)}catch(e){message.channel.send("<:no:491110753537884160> **| Unable To Send Message To User.**")}

}

module.exports.help = {
  name:"ban"
}
