//CONST

//DISCORD

const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//OTHER CONST

const config = require("./config/config.json")

//DOTENV

const dotenv = require('dotenv');

dotenv.config();

//VAR

var token = process.env.DISCORD_TOKEN

//CODE

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);