import { program } from "commander";

const packageIntro = function () {
  program
    .name("intro")
    .description(" A Secure and User-Friendly Solana CLI Wallet");
  console.log("A Secure and User-Friendly Solana CLI Wallet");
};

export { packageIntro };