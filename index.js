const dotenv = require('dotenv').config()
const {
	Client,
	GatewayIntentBits,
	EmbedBuilder,
	PermissionsBitField,
	Permissions,
} = require(`discord.js`);
const moment = require("moment");
const tz = require("moment-timezone");
const timezone = "Europe/Warsaw";
const format = "HH:mm";
const prefix = "!";
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.on("ready", () => {
	console.log("Bot jest online!");
	// const channelCP = client.channels.cache.find(
	// 	(channel) => channel.id === "987379751041789994"
	// );
	// counter = 0;

	// channelCP.send("OKI");

	// if (moment().tz(timezone).format(format) === "22:58" && counter === 0) {
	// 	const characters =
	// 		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	// 	let result = "";
	// 	const charactersLength = characters.length;
	// 	for (let i = 0; i < 6; i++) {
	// 		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	// 	}
	// 	channelCP.send(result);
	// 	counter += 1;
	// } else if (
	// 	moment().tz(timezone).format(format) === "22:58" &&
	// 	counter === 1
	// ) {
	// } else if (
	// 	moment().tz(timezone).format(format) !== "22:58" &&
	// 	counter === 1
	// ) {
	// 	counter = 0;
	// } else {
	// }
});

client.on("messageCreate", (message) => {
	if (message.content === "!kod") {
		const characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		let result = "";
		const charactersLength = characters.length;
		for (let i = 0; i < 6; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		message.channel.send(result);
	}
});
client.login(
	process.env.token
);