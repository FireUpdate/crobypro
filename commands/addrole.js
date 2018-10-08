const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel("<:no:491110753537884160> **| You dont have `MANAGE_ROLES` permissions.**");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("<:no:491110753537884160> **| That user cannot be found!**");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("<:no:491110753537884160> **| Please specify a role!**");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("<:no:491110753537884160> **| Couldn't find that role.**");

  if(rMember.roles.has(gRole.id)) return message.reply("<:no:491110753537884160> **| They already have that role.**");
  await(rMember.addRole(gRole.id));
  message.channel.send(`<:yes:491110756985864213> | ${rMember} has been given the ${gRole.name} role.`).then(msg => msg.delete({timeout: 20000}));
  
}

module.exports.help = {
  name: "addrole"
}
