const express = require("express");
const app = express();

app.get("/", (req, res) => {
   res.send("<h1>Some text inside h1</h1>");
});

app.listen(3000);
