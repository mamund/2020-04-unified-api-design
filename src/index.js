#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");
const YAML = require("yamljs");
const { toXML } = require('jstoxml');

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .option("t", { alias: "type", describe: "Format Type ([j]son, [p]roto, [s]dl, [a]syncapi, [o]penapi)", type: "string", demandOption: false})
 .argv;

var alps_yaml = YAML.load(options.name);
var alps_json = alps_yaml;
var rtn = "";

switch (options.name.toLowerCase()) {
  case "d":
  case "sdl":
    rtn = toSDL(alps_json);
    break;
  case "a":
  case "asyncapi":
    rtn = toProto(alps_json);
    break;
  case "o":		
  case "openapi":
    rtn = toProto(alps_json);
    break;
  case "p":
  case "proto":
    rtn = toProto(alps_json);
    break;
  case "j":
  case "json":
  default:
    rtn = toJSON(alps_json);
    break;		
}

// output directly
console.log(rtn);

// *******************************************
// translators
// *******************************************

function toJSON(doc) {
  var rtn = ""; 
  rtn = JSON.stringify(doc, null, 2);
  return rtn
}

function toProto(doc) {
  var rtn = "";
  rtn = toJSON(doc);
  return rtn;
}

function toSDL(doc) {
  var rtn = "";
  rtn = toJSON(doc);
  return rtn;
}

function toOAS(doc) {
  var rtn = "";
  rtn = toJSON(doc);
  return rtn;
}

function toAsync(doc) {
  var rtn = "";
  rtn = toJSON(doc);
  return rtn;
}

