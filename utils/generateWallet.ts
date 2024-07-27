import { Keypair } from "@solana/web3.js";

const generateKeypairs = () => {
  const keypair = Keypair.generate();
  const generatePubKey = keypair.publicKey.toBase58();
  const generateSecKey = Buffer.from(keypair.secretKey).toString("base64");
};
export { generateKeypairs };
