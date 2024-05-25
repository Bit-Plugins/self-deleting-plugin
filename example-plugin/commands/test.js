const { EmbedBuilder, version: discordVersion, SlashCommandBuilder } = require('discord.js')
const moment = require('moment');
require('moment-duration-format');

module.exports = {
	// An optional setting to allow for a command cooldown (defaults to 3 seconds)
	cooldown: 5,

	// You should set user to true if the command can be used when the bot is installed as a user-installable app
	// You should set guild to true if the command can be used when the bot is installed as a guild-installable app
	integration_types: {
        user: false,
        guild: true,
    },

	// You should set guildChannel to true if the command can be run in a guild/server channel
	// You should set botDM to true if the command can be run in the bots DM's
	// You should set privateChannel to true if the command can be run in any users DM's/Group DM's (can ONLY be used for a user-installable command)
	context_types: {
		guildChannel: true,
		botDM: true,
		privateChannel: true,
	},

	// Just a regular slash command builder through discord.js.
	// You can check out their guide for more advanced command creation: https://discordjs.guide/slash-commands/advanced-creation.html#adding-options
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Test the new plugins system.')
        .setDMPermission(false),
	async execute(interaction) {
        interaction.reply({ content: "Test works" })
	}
};