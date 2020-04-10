#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");
const YAML = require("yamljs");
const { toXML } = require('jstoxml');

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .option("t", { alias: "type", describe: "Format Type ( json, xml)", type: "string", demandOption: true})
 .argv;

var alps_yaml = YAML.load(options.name);
var alps_json = alps_yaml;
var alps_xml = toXML(alps_json);

if(options.type==="json") {
  console.log(JSON.stringify(alps_json));
}
if(options.type==="xml") {
  console.log(alps_xml);
}

/*
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
*/

