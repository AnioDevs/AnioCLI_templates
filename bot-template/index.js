// Load environment variables from .env file
require('dotenv').config();

// Import the Discord.js library
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new Discord client with desired intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,               // Basic guild info (required for slash commands)
        GatewayIntentBits.GuildMessages,        // Required to listen to messages
        GatewayIntentBits.MessageContent        // Needed to read message content
    ]
});

// Event: When the bot has successfully logged in
client.once('ready', () => {
    console.log(`✅ Bot is online as ${client.user.tag}`);
});

// Event: When a message is sent in a guild
client.on('messageCreate', (message) => {
    // Ignore messages from bots
    if (message.author.bot) return;

    // Respond to !ping command
    if (message.content === '!ping') {
        message.reply('🏓 Pong!');
    }
});

// Login the bot using the token from .env file
client.login(process.env.DISCORD_TOKEN); // 👈 Bot tries to login using the provided token
