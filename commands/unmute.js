const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unmute')
		.setDescription('Select A User And Unmute Them')
        .addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to unmute')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason'))
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
		.setDMPermission(false),
	async execute(interaction) {
		let mutedRole = interaction.guild.roles.cache.find(r => r. id === "1048888724487934034")
		let targetMember = interaction.options.getUser('target')
		const reason = interaction.options.getString('reason') ?? 'No reason provided';
		const guild_member_obj = await interaction.guild.members.fetch(targetMember);
		const embed = new EmbedBuilder()
			.setColor(0x57F287)
			.setTitle('Mute')
			.setDescription(`The member ${targetMember} as been unmuted by <@${interaction.user.id}> for reason : ${reason}`)
		
		await interaction.reply({ ephemeral: true, embeds: [embed], content: "" });
		guild_member_obj.roles.remove(mutedRole)
	},
};