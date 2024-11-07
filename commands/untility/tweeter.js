const { SlashCommandBuilder, Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
  intents: [GatewayIntentBits.Guilds],
  allowedMentions: {parse: ["roles", "users"], repliedUser: true}
});

module.exports = {
  cooldown: 3,
  data: new SlashCommandBuilder()
    .setName('tweeter')
    .setDescription('creates fake tweets')
  //username
    .addStringOption(option =>
      option.setName('username')
        .setDescription('sets the username of the tweet')
        .setRequired(true))
  //caption
    .addStringOption(option =>
      option.setName('text-content')
        .setDescription('sets Caption of the tweet')
        .setRequired(true))
  //date and time
    .addStringOption(option =>
      option.setName('date-time')
        .setDescription('set the time of the tweet')
        .setRequired(true))
  //display name
    .addStringOption(option =>
      option.setName('display-name')
      .setDescription('changes the display name of the tweet. if you dont and a display it will default to the username')),
  async execute(interaction) {
    await interaction.reply({ content: 'Creating image..', ephemeral: true });
  }
};

