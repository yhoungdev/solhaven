import chalk from "chalk";
import { getPublicKey } from "./generateWallet";
import qrcode from "qrcode-terminal";
export const displayAddress = () => {
  let pubKey = getPublicKey();
  const showAddress = chalk.yellow(`Solana Address: ${pubKey}`);
  console.log("Here is your wallet address 👇👇👇");
  console.log(showAddress);
  console.log("👆👆👆👆👆👆👆👆👆👆👆👆👆");

  //@ts-ignore
  qrcode.generate(pubKey, (qrcode) => {
    console.log(qrcode);
  });
};
