import { generateKeypairs } from "../utils/generateWallet";
import { sendToken } from "../utils/sendSolana";
import { displayAddress } from "../utils/showAddress";
import { showBalance } from "../utils/showBalance";

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
  {
    name: "show-balance",
    command: "balance",
    description: "Display my solana address",
    action: showBalance,
  },
];
