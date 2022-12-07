const { ActionRowBuilder, Events, EmbedBuilder } = require('discord.js');
const fs = require('fs')

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction, client) {
		const collector_filter = i => {
			i.deferUpdate();
			return i.user.id === interaction.user.id;
		};
			
		
		const collector = interaction.channel.createMessageComponentCollector({ collector_filter, time: 15000 });
		
		console.log(interaction.customId)
		
		if (!interaction.isChatInputCommand()) return;

		collector.on('collect', async i => {
			if (i.customId === 'submit_mod') {
				await i.update({ content: 'Submited', components: [] });
       			let username = i.member.user.id
        		i.channel.send(`<@&935827897690771478>, The user <@${username}> would like to be a mod.`)
			}
			if( i.customId === "mutedRoleConf"){
				const embed = new EmbedBuilder()
					.setColor(0x0099FF)
					.setTitle('**CONFIG** | 🤫 | Mute Role ID')
					.setAuthor({ name: 'Teffle', iconURL: 'https://i.imgur.com/AfFp7pu.png'})
					.setDescription('To change mute role ID use the command ***/changemuteid***')
				
				await i.reply({ embeds: [embed] });
			}
			
		});

		if (interaction.customId === "changeMuteRoleIdModal"){
			interaction.reply({ content: 'Your submission was received successfully!' });
			const newMuteRoleID = interaction.fields.getTextInputValue('changeMuteRoleIdModalInput');
			console.log(newMuteRoleID)
		}
		

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

