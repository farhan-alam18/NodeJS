require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// GET all courses value : 
app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3, 4, 5, 6]);
});

// GET courses by :id
app.get('/api/courses/:id', (req,res) => {
  res.send(req.params.id)
})

// GET params object : 
app.get('/api/posts/:year/:month', (req,res) => {
  res.send(req.params)
})

// GET query parameters : 
app.get('/api/posts/:year/:month', (req,res) => {
  res.send(req.query)
})

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// app.post();
// app.put();
// app.delete();