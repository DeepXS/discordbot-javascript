const { Client } = require('discord.js')
const { prefix } = require('./config.json')
require('dotenv').config() // npm i dotenv
const client = new Client({fetchAllMembers: true})

client.login(process.env.TOKEN) // crie o arquivo .env

client.on("ready", () => {
 
    console.log("Conectado!!")
    console.log(`Servidores(${client.guilds.size}):\n${client.guilds.map(servidor => servidor.name).join(", ")}`)
    setInterval(() => {
        client.user.setPresence({ game: { name: `${client.user.username} - ${client.guilds.size} servidores`, type: 0 } });
    }, 1 * 60 * 1000)

})

client.on("message", (message) => {

    if (message.channel.type == "dm") return;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    try {
        let commandFile = require(`./comandos/${command}.js`);
        commandFile.run({Discord, client, message, args});
    } catch (err) {

        if (err.code == "MODULE_NOT_FOUND") return;
        console.error(err);

    }

})

