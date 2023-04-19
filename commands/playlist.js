const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlisttrap")
        .setDescription("Ouça a minha playlist de Trap"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/5n4fDl7iNc9fQfhnCn0qgc?si=6b873760c1954009")
    }
}