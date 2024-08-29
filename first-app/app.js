const path = require("path");
console.log(path.parse(__filename));

const os = require('os')
console.log(os.freemem())
console.log(os.totalmem())
console.log(os.hostname())
console.log(os.type())