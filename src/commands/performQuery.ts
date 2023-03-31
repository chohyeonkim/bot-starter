import {Command} from "../bot-base";
import {Client, Message} from "discord.js";
import fetch from "node-fetch";
const performQuery: Command = {
	name: "performQuery",
	description: "sends the query to the application",
	usage: "performQuery {query}",
	async procedure(client: Client, message: Message, args: string[]): Promise<Message> {
		// if (args.length !== 2) {
		// 	return message.reply("Please provide a dataset Id and a type (rooms or sections)");
		// }
		//
		// const [id, type] = args;
		//
		// if (type !== "rooms" && type !== "sections") {
		// 	return message.reply("Invalid Dataset type, specify rooms or sections");
		// }
		//
		// const file = message.attachments.first();
		//
		// if (!file || !file.name.endsWith(".zip")) {
		// 	return message.reply("Please upload a zip file");
		// }
		//
		// try {
		//
		// 	const fileResponse = await fetch(file.url);
		// 	if (!fileResponse.ok) {
		// 		throw new Error("failed to get the file");
		// 	}
		//
		// 	const fileBuffer = await fileResponse.arrayBuffer();
		//
		// 	const res = await fetch(`http://localhost:4321/dataset/query` , { //TODO? fix the address
		// 		method:"POST",
		// 		headers: {
		// 			"Content-Type": "application/zip",
		// 		},
		// 		body: fileBuffer,
		// 	});
		//
		// 	const resJson = await res.json();
		//
		// 	if (res.ok) {
		// 		return message.reply(`Dataset ${id} added successfully.\nResult: ${resJson["result"]}`);
		// 	} else {
		// 		return message.reply(`Failed to add dataset ${id}. Error: ${resJson["error"]}`);
		// 	}
		// } catch(err) {
		// 	return message.reply(`Error: ${err.message}`);
		// }

		return message.reply("not implemented yet");
	},
};

export default performQuery;
