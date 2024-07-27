#! /usr/bin/env bun
import figlet from "figlet";
import gradient from "gradient-string";
import { packageIntro } from "./utils/packageDescription";
import { program } from "commander";
import { generateKeypairs } from "./commands/generateWallet";
import { clusterApiUrl, Connection } from "@solana/web3.js";

// #region Solana connection

const connect = new Connection(clusterApiUrl("testnet"));

figlet(" SolHaven", (err, data) => {
  if (err) {
    console.log("...");
  }

  console.log(data);
  packageIntro();
});

program
  .command("generate")
  .description("Generate a new keypair")
  .action(() => generateKeypairs());

program.parse(process.argv);