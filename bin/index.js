#! /usr/bin/env node
const yargs = require("yargs");

const usage = "\nUsage: expand-url -u <short-url>";
const options = yargs
  .usage(usage)
  .option("u", {
    alias: "url",
    describe: "Enter Short URL to expand",
    type: "string",
    demandOption: true,
  })
  .help(true).argv;

console.log(yargs.argv.url);
