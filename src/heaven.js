const { SapphireClient, ApplicationCommandRegistries, container } = require('@sapphire/framework')
const { GatewayIntentBits, ActivityType } = require('discord.js')

const config = require('../config.json')

const client = new SapphireClient({
    intents: [
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent
    ],

    presence: {
        activities: [
            {
                name: 'EN DEVELOPPEMENT',
                type: ActivityType.Playing
            }
        ],
        status: 'online',
    },
})

ApplicationCommandRegistries.setDefaultGuildIds([process.env.MAIN_GUILD_ID])
client.login(process.env.TOKEN)