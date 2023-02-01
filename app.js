const express = require('express');
const app = express()
const port = 3000;

app.use(express.static("public"));

//  GET  /   - Home page -   http://localhost:3000/
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html"); // for sending files
  });
  
  //  GET  /about    - About page -   http://localhost:3000/about
  app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
  });
  
  //  GET  /works    - Works page -   http://localhost:3000/works
  app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works.html");
  });
  
  
  // Start the Server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
