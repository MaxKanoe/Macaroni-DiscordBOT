const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  cooldown: 18000,
  data: new SlashCommandBuilder()
    .setName('revive')
    .setDescription('revives the chat'),
  async execute(interaction) {
    await interaction.reply(`<@&1223859947759075370> ${interaction.user.username} Is reviving the chat.`);
  },
};
