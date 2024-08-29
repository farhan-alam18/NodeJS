// const path = require("path");
// console.log(path.parse(__filename));

// const os = require("os");
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.hostname());
// console.log(os.type());

// const fs = require("fs");
// // const files = fs.readdirSync('./')

// fs.readdir("./", (err, files) => {
//   if (err) console.log(err);
//   else console.log(files);
// });

const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

// Registering an event :
logger.on("messageLogged", (e) => {
  console.log("Listener is called", e);
});

logger.log("message");