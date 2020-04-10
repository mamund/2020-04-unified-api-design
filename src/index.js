#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;

const msg = `Hello, ${options.name}!`;

const greeting = chalk.white.bold(msg);

const boxenOptions = {
	 padding: 1,
	 margin: 1,
	 borderStyle: "round",
	 borderColor: "green",
	 backgroundColor: "#555555"
};
const msgBox = boxen( greeting, boxenOptions );

console.log(msgBox);

