import { program } from "commander";
import { generateKeypairs } from "../utils/generateWallet";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import { sendToken } from "../utils/sendSolana";

export const COMMANDS = [
  {
    name: "generate-wallet",
    command: "generate",
    description: "Generate a new Solana wallet",
    action: generateKeypairs,
  },
  {
    name: "send",
    command: "send <address> <amount>",
    description: "Send a token to another wallet",
    action: generateKeypairs,
  },
];
