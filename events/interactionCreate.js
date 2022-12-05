const { Events } = require('discord.js');
const fs = require('fs')

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction, client) {
		const filter = i => i.customId === 'submit_mod' && i.user.id === interaction.user.id;	
		const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });
		
		if (!interaction.isChatInputCommand()) return;
		collector.on('collect', async i => {
			let mod_path = "../";
			let mod_name = "apply.json"
			await i.update({ content: 'Submited', components: [] });
			let username = interaction.member.user.username+interaction.member.user.discriminator
			interaction.channel.send(`<@&935827897690771478>, The user ${username} would like to be a mod.`);
		});
		

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
	},
};

