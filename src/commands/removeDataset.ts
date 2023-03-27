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
			// const res = await fetch(`http://localhost:4321/dataset/${id}`, {
			// 	method: "DELETE"
			// });

			const res = await fetch(`https://ba1d319a-716a-4259-93df-aab84bea679f.mock.pstmn.io/dataset/remove`, {
				method: "DELETE"
			});

			const resJson = await res.json();
			console.log(res.ok);

			if (!res.ok) {
				return message.reply(`Failed to remove dataset ${id}: ${resJson["error"]}}`);
			} else {
				return message.reply(`Dataset ${id} removed successfully: ${resJson["result"]}`);
			}
		} catch (err) {
			return message.reply(`Error: ${err.message}`);
		}
	},
};

export default removeDataset;
