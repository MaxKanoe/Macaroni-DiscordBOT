const { Events, Client, GatewayIntentBits, InteractionType } = require('discord.js');
const { createImage } = require('../tweeter/tweet.js');

const client = new Client({ 
    intents: [GatewayIntentBits.Guilds],
    allowedMentions: {parse: ["roles", "users"], repliedUser: true}
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'tweeter') {
        const usernameInput = interaction.options.getString('username');
        const captionInput = interaction.options.getString('text-content');
        const dateInput = interaction.options.getString('date-time');
        const displayNameInput = interaction.options.getString('display-name');

        await interaction.reply(createImage(usernameInput, displayNameInput, dateInput, captionInput));
    }
});
