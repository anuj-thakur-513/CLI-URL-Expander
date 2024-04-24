#! /usr/bin/env node
const yargs = require("yargs");
const chalk = require("chalk");
const boxen = require("boxen");
const expandUrl = require("../utils/expand");

const usage = chalk.keyword("violet")(
  "\nUsage: expand-url -u <short-url>\n" +
    boxen(
      chalk.green(
        "\n" + "Expands a shortened URL and returns the original URL" + "\n"
      ),
      { padding: 1, borderColor: "green", dimBorder: true }
    ) +
    "\n"
);

const options = yargs
  .usage(usage)
  .option("u", {
    alias: "url",
    describe: "Enter Short URL to expand",
    type: "string",
    demandOption: true,
  })
  .help(true).argv;

const main = async () => {
  try {
    const expandedUrl = await expandUrl(yargs.argv.url);
    console.log(
      "\n" +
        boxen(chalk.green("\n" + expandedUrl + "\n"), {
          padding: 1,
          borderColor: "green",
          dimBorder: true,
        }) +
        "\n"
    );
    process.exit(0);
  } catch (error) {
    console.log(
      "\n" +
        boxen(chalk.green("\n" + error + "\n"), {
          padding: 1,
          borderColor: "red",
          dimBorder: true,
        }) +
        "\n"
    );
    process.exit(1);
  }
};

main();
