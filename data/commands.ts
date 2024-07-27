import { program } from "commander";
import { generateKeypairs } from "../utils/generateWallet";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import { sendToken } from "../utils/sendSolana";
import { displayAddress } from "../utils/showAddress";

export const COMMANDS = [
  {
    name: "generate-wallet",
    command: "generate",
    description: "Generate a new Solana wallet",
    action: generateKeypairs,
  },
  {
    name: "signin",
    command: "signin",
    description: "Sign in a new Solana wallet",
    action: generateKeypairs,
  },
  {
    name: "send",
    command: "send <address> <amount>",
    description: "Send a token to another wallet",
    action: sendToken,
  },
  {
    name: "display-address",
    command: "display",
    description: "Display my solana address",
    action: displayAddress,
  },
];
