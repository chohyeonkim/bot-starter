import { Client, Message } from "discord.js";
import {Command} from "../bot-base";
import fetch from "node-fetch";

const perfromQuery: Command = {
	name: "perfromQuery",
	description: "List all datasets added to the server",
	usage: "perfromQuery query",
	async procedure(client: Client, message: Message) {
		return message.reply("No datasets found");
	},
};

export default perfromQuery;
