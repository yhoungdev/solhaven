import { Keypair, sendAndConfirmRawTransaction } from "@solana/web3.js";
import chalk from "chalk";
export const sendToken = () => {
  const info = chalk.yellow("Send <Solana Address> <Amount>");
  const myKeypair = Keypair.fromSecretKey(Uint8Array.from([]));
};
