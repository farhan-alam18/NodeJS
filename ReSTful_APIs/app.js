require('dotenv').config()
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

const port = process.env.PORT;

server.listen(port, () => console.log(`Listening on PORT : ${port}......`));
