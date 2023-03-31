import {Command} from "../bot-base";
import {Client, Message} from "discord.js";
import fetch from "node-fetch";
const removeDataset: Command = {
	name: "removeDataset",
	description: "deletes the existing dataset stored",
	usage: "removeDataset id",
	async procedure(client: Client, message: Message, args: string[]): Promise<Message> {
		if (args.length !== 1) {
			return message.reply("Please provide one dataset Id to remove");
		}

		const [id] = args;

		try {

			const res = await fetch(`http://localhost:4321/dataset/${id}`, {
				method: "DELETE"
			});

			const resJson = await res.json();

			if (!res.ok) {
				return message.reply(`Failed to remove dataset ${id}: ${resJson["error"]}`);
			} else {
				return message.reply(`Dataset ${id} removed successfully`);
			}
		} catch (err) {
			return message.reply(`Error: ${err.message}`);
		}
	},
};

export default removeDataset;
