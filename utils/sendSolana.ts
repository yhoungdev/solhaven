import {
  Keypair,
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import { getSecretKey } from "./generateWallet";
import chalk from "chalk";
import { RPC } from "../constant";

export const sendToken = async (address: string, amount: string) => {
  try {
    const recipientPubKey = new PublicKey(address);
    const senderSecretKey = getSecretKey();
    const senderKeypair = Keypair.fromSecretKey(senderSecretKey);
    const connection = new Connection(RPC, "confirmed");

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: senderKeypair.publicKey,
        toPubkey: recipientPubKey,
        lamports: parseFloat(amount) * LAMPORTS_PER_SOL,
      })
    );

    const signature = await sendAndConfirmTransaction(connection, transaction, [
      senderKeypair,
    ]);
    console.log(
      chalk.green(`Transaction successful with signature: ${signature}`)
    );
  } catch (error) {
    console.error(chalk.red("Transaction failed"), error);
  }
};
