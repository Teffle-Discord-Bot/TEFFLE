const { SlashCommandBuilder } = require('discord.js');
const fs = require("fs")
const JSON = require("JSON")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setup')
		.setDescription('setup'),
	async execute(interaction) {
        const guild_id = interaction.member.guild.id
        try {
			fs.readFile("./server_db/" + guild_id + ".json", 'utf8', (err, data) => {
				if (err) {
				  console.error(err);
				  return;
				}
				interaction.reply("You are already setup the bot")
			});
		} catch (error) {
			console.log(error + `The guild : ${interaction.guild.name} dont have config file. Creating...	`)
		} finally {
			var dict = {"muteRoleID" : ""}
			var dictstring = JSON.stringify(dict);
			fs.writeFile("./server_db/"+ guild_id + ".json", dictstring);
		}
	},
};