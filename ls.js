// const fs = require("fs")


const fs = ("./", "utf8", (err, files) => {

    // for ( let i = 0 ; i < files.length; i++){
    console.log("worked")
  if (err) {
    throw err;
  } else {
    process.stdout.write(files.join("\n"));
    process.stdout.write("prompt > ");
  }

});

let testarray = ["1","2","3"]
fs("./", "utf8",("err",testarray))



module.exports = {
    fs
}


