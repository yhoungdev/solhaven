import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { RPC } from "../constant";
import { getPublicKey } from "./generateWallet";
import type { IRequestAirdrop } from "../interface";
import chalk from "chalk";

const requestAirdrop = async ({ lamport }: IRequestAirdrop) => {
  const pubKey = getPublicKey();
  const connection = new Connection(RPC);
  const request = await connection.requestAirdrop(pubKey, lamport);
  const onSuccessMsg = chalk.gray(
    `You have successfully requested for ${LAMPORTS_PER_SOL * lamport} SOL`
  );

  console.log(onSuccessMsg);
};
export { requestAirdrop };
