import { Connection, PublicKey } from "@solana/web3.js";
import { getPublicKey } from "./generateWallet";
import { RPC } from "../constant";
import chalk from "chalk";

const showBalance = async () => {
  const pubKey = getPublicKey();
  const newPubKey = new PublicKey(pubKey);
  const connection = new Connection(RPC, "confirmed");
  const balance = await connection.getBalance(newPubKey);
  const convertBalanceToSol = balance / 1e9;
  console.log(chalk.yellow(`Wallet Balance: ${convertBalanceToSol}`));
};
export { showBalance };
