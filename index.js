import { input } from "@inquirer/prompts";
import qr from "qr-image";
import fs from "fs";

//inquire

const answer = await input({ message: "Type in your URL" });
//console.log("URL entered:", answer); // Debugging line to verify the input
const URL = answer;
//image

const qr_svg = qr.image(URL);
qr_svg.pipe(fs.createWriteStream("qr_image.png"));

//const svg_string = qr.imageSync("I love QR!", { type: "svg" });
