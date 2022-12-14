const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mute')
		.setDescription('Select A User And Mute Them')
        .addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to mute')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason'))
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
		.setDMPermission(false),
	async execute(interaction) {
		const guild_id = interaction.member.guild.id
		const { muteRoleID } = require("../server_db/" + guild_id + ".json")
		let mutedRole = interaction.guild.roles.cache.find(r => r. id === muteRoleID)
		let targetMember = interaction.options.getUser('target')
		const reason = interaction.options.getString('reason') ?? 'No reason provided';
		const guild_member_obj = await interaction.guild.members.fetch(targetMember);
		const embed = new EmbedBuilder()
			.setColor(0x57F287)
			.setTitle('Mute')
			.setDescription(`The member ${targetMember} as been muted by <@${interaction.user.id}> for reason : ${reason}`)
		
		await interaction.reply({ ephemeral: true, embeds: [embed], content: "" });
		guild_member_obj.roles.add(mutedRole)
	},
};