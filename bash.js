// const fs = require("fs")
const pwdObj = require("./pwd");
const fileObj = require("./ls");


process.stdout.write("prompt > ");

process.stdin.on("data", data => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwdObj.pwd();
  }
  if (cmd === "ls"){
      fileObj.fs()
  }

  process.stdout.write("you typed : ' +cmd");
  process.stdout.write("\nprompt > ");
});
