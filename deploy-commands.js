const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('replies w pong >_<'),
    new SlashCommandBuilder().setName('server').setDescription('replies w server info O_o'),
    new SlashCommandBuilder().setName('user').setDescription('replies w user info o_O'),
]
    .map(command => command.toJSON);

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Success registering commandz in ze server'))
    .catch(console.error);