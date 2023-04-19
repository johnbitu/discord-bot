const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playliststudy")
        .setDescription("Ouça a minha playlist de estudos"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/3J9uKhx24YvMVrgazVg2og?si=8d80889979264770")
    }
}