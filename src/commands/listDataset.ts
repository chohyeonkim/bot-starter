import { Client, Message } from "discord.js";
import {Command} from "../bot-base";
import fetch from "node-fetch";

const listDataset: Command = {
	name: "listDataset",
	description: "List all datasets added to the server",
	usage: "listDataset",
	async procedure(client: Client, message: Message) {
		try {
			const response = await fetch("http://localhost:4321/datasets");
			const data = await response.json();
			const datasets = data["result"];

			if (datasets.length === 0) {
				return message.reply("No datasets found");
			}

			const datasetList = datasets.map(dataset => dataset.id).join("\n");

			return message.reply(`List of datasets:\n${datasetList}`);
		} catch (error) {
			console.error(error);
			return message.reply(`Error: ${error.message}`);
		}
	},
};

export default listDataset;
