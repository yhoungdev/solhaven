#! /usr/bin/env bun
import figlet from "figlet";
import { packageIntro } from "./utils/packageDescription";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { program } from "commander";
import { COMMANDS } from "./data/commands";
// #region Solana connection

const connect = new Connection(clusterApiUrl("testnet"));

figlet(" SolHaven", (err, data) => {
  if (err) {
    console.log("...");
  }

  console.log(data);
  packageIntro();
});

COMMANDS.map(({ command, action, description }) => {
  console.log(description);
  program.command(command).description(description).action(action);
});



program.parse(process.argv);