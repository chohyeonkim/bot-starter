import {Command} from "../bot-base";
import {Client, Message} from "discord.js";
import fetch from "node-fetch";
import FormData from 'form-data';
const addDataset: Command = {
	name: "addDataset",
	description: "Add a new dataset to the server format (id type [upload Zip file])  ",
	usage: "addDataset id type [Zip file]",
	async procedure(client: Client, message: Message, args: string[]): Promise<Message> {

		if (args.length !== 2) {
			return message.reply("Please provide a dataset Id and a type (rooms or sections)");
		}

		const [id, type] = args;

		if (type !== "rooms" && type !== "sections") {
			return message.reply("Invalid Dataset type, specify rooms or sections");
		}

		const file = message.attachments.first();

		if (!file || !file.name.endsWith(".zip")) {
			return message.reply("Please upload a zip file");
		}

		try {

			const fileResponse = await fetch(file.url);
			if (!fileResponse.ok) {
				throw new Error("failed to get the file");
			}

			// const fileBuffer = Buffer.from(fileResponse); // TODO? fix?
			// const fileContent = fileBuffer.toString("base64");

			const fileObject = new FormData();
			fileObject.append("id", id);
			fileObject.append("content", fileResponse.body);
			fileObject.append("kind", type);

			const res = await fetch('https://ba1d319a-716a-4259-93df-aab84bea679f.mock.pstmn.io/dataset/add' , { //TODO? fix the address
				method:"PUT",
				headers: {
					"Content-Type": "multipart/form-data",
				},
				body: fileObject,
			});

			// const res = await fetch('http://localhost:4321/dataset/${id}/${type}' , { //TODO? fix the address
			// 	method:"PUT",
			// 	body: fileObject,
			// });

			const arr = await res.json();
			console.log(arr);

			if (res.ok) {
				const result = arr; // TODO
				return message.reply(`Dataset ${id} added successfully.\nResult: ${JSON.stringify(result)}`);
			} else {
				// const {error} = arr;
				// console.log(error);
				// return message.reply(`Failed to add dataset ${id}. Error: ${error}`);
			}
		} catch(err) {
			return message.reply(`Error: ${err.message}`);
		}
	},
};

export default addDataset;
