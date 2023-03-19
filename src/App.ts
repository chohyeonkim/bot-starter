import {ConfigKey, getConfig} from "./util/Config"; // Unfortunately must be the first import
import {startDiscord} from "./bot-base/startDiscord";
import {Intents} from "discord.js";

startDiscord({
    commandDirectory: `${__dirname}/commands`,
    listenerDirectory: `${__dirname}/listeners`,
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    token: getConfig(ConfigKey.botToken),
});
