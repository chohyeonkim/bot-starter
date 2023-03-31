import {Command} from "../bot-base";
import {Client, Message} from "discord.js";
import fetch from "node-fetch";
const listDataset: Command = {
	name: "listDataset",
	description: "a list of datasets that were added.",
	usage: "listDataset",
	async procedure(client: Client, message: Message, args: string[]): Promise<Message> {

		try {
			const res = await fetch("http://localhost:4321/datasets");

			const resJson = await res.json();
			const arr = resJson["result"];

			if (arr.length === 0) {
				return message.reply("Data has not been added yet");
			}

			const datasetList = arr.map(dataset =>
				`DataId: ${dataset.id}, Kind: ${dataset.kind}, Size: ${dataset.numRows}`).join("\n");

			return message.reply(datasetList);
		} catch(err) {
			return message.reply(`Error: ${err.message}`);
		}
	},
};

export default listDataset;
