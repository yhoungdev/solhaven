#! /usr/bin/env bun
import figlet from "figlet";
import gradient from "gradient-string";

figlet(" SolHaven", (err, data) => {
  if (err) {
    console.log("...");
  }

  console.log(data);
});
