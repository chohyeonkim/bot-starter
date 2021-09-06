import * as dotenv from 'dotenv';
import {Log} from "@ubccpsc310/bot-base";
dotenv.config();

export enum ConfigKey {
    botToken = "botToken",
}

const config = {
    [ConfigKey.botToken]: process.env.BOT_TOKEN,
};

export const getConfig = (key: ConfigKey): number | string | boolean => {
    if (config[key] !== null && config[key] !== undefined) {
        return config[key];
    } else {
        Log.warn(`Config Key "${key}" was not set, yet accessed.`);
        return null;
    }
};
