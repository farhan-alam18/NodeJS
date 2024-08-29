const path = require("path");
console.log(path.parse(__filename));

const os = require('os')
console.log(os.freemem())
console.log(os.totalmem())
console.log(os.hostname())
console.log(os.type())

const fs = require('fs')
// const files = fs.readdirSync('./')

fs.readdir('$',  (err,files)=> {
  if(err) console.log(err)
    else console.log(files)
} )