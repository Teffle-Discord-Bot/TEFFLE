const { SlashCommandBuilder, ActionRowBuilder, Events, StringSelectMenuBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('config')
		.setDescription('Config The Bot')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
	async execute(interaction) {
        const config_parameter = new ActionRowBuilder()
			.addComponents(
				new StringSelectMenuBuilder()
					.setCustomId('select')
                    .setCustomId('mutedRoleConf')
					.setPlaceholder('Nothing selected')
					.addOptions(
						{
							label: '🤫 | Mute Role ID',
							description: 'Config the ID of the mute role',
							value: 'mute_id',
						},
					),
			);
        const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Config')
        await interaction.channel.send({ content: '', ephemeral: true, embeds: [embed], components: [config_parameter] });
	},
};