import { Keypair } from "@solana/web3.js";
import crypto from "crypto";
import fs from "fs";
import { HASHKEY } from "../constant";
import chalk from "chalk";
const algorithm = "aes-256-cbc";
const password = HASHKEY;
const salt = "random-salt";

const generateKeypairs = () => {
  const onCreation = chalk.green(
    " Your wallet has been created successfully 🎊🎊"
  );
  const keypair = Keypair.generate();
  const generatePubKey = keypair.publicKey.toBase58();
  const generateSecKey = Buffer.from(keypair.secretKey).toString("base64");

  const iv = crypto.randomBytes(16);
  const key = crypto.scryptSync(password, salt, 32);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(generateSecKey, "utf8", "hex");
  encrypted += cipher.final("hex");

  const dataToStore = {
    publicKey: generatePubKey,
    iv: iv.toString("hex"),
    content: encrypted,
  };

  fs.writeFileSync("encryptedKeypair.json", JSON.stringify(dataToStore));
  console.log(onCreation);
  console.log("Your wallet address: ⛓️ ", generatePubKey);
};

const getSecretKey = () => {
  const data = JSON.parse(fs.readFileSync("encryptedKeypair.json", "utf8"));

  const key = crypto.scryptSync(password, salt, 32);
  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(data.iv, "hex")
  );
  let decrypted = decipher.update(data.content, "hex", "utf8");
  decrypted += decipher.final("utf8");

  console.log("Decrypted Secret Key:", decrypted);
  return Buffer.from(decrypted, "base64");
};

const getPublicKey = () => {
  const data = JSON.parse(fs.readFileSync("encryptedKeypair.json", "utf8"));
  return data.publicKey;
};

export { generateKeypairs, getSecretKey, getPublicKey };
