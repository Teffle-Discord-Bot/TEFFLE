const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getmod')
		.setDescription('Show A Modal'),
	async execute(interaction) {
		const apply = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('submit_mod')
					.setLabel('Apply Mod')
					.setStyle(ButtonStyle.Danger),
			);
		const embed = new EmbedBuilder()
			.setColor(0x57F287)
			.setTitle('Apply To Mod')

			await interaction.reply({ ephemeral: true, embeds: [embed], components: [apply] });
	},
};