const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel("<:no:491110753537884160> **| You Don't Have `MANAGE_ROLES` Permission!**");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("<:no:491110753537884160> **| That User Cannot Be Found!**").then(msg => msg.delete({timeout: 9000000000}));
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("<:no:491110753537884160> **| Please Specify A Role!**").then(msg => msg.delete({timeout: 9000000000}));
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("<:no:491110753537884160> **| Couldn't Find That Role.**").then(msg => msg.delete({timeout: 9000000000}));

  if(rMember.roles.has(gRole.id)) return message.reply("<:no:491110753537884160> **| They Already Have That Role.**").then(msg => msg.delete({timeout: 9000000000}));
  await(rMember.addRole(gRole.id));
  message.channel.send(`<:yes:491110756985864213> **| ${rMember} Has Been Given The ${gRole.name} Role.**`).then(msg => msg.delete({timeout: 9000000000}));
  
}

module.exports.help = {
  name: "addrole"
}
