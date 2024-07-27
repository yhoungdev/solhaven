import { Keypair } from "@solana/web3.js";

const generateKeypairs = () => {
  const generate_key_pair = Keypair.generate();
  const generate_pubKey = generate_key_pair.publicKey.toBase58();
  const generate_seckey = Buffer.from(generate_key_pair.secretKey).toString(
    "base64"
  );
};
export { generateKeypairs };
