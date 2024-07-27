import { Keypair } from "@solana/web3.js";
import type { ISignInWithKey } from "../interface";

export const signInWithSecretkey = ({ key }: ISignInWithKey) => {
  const keypair = Keypair.fromSecretKey(Buffer.from(key));
};
