const express = require("express");
const app = express();

app.use(express.static("public"));
app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/launch.html", function (req, res) {
  res.sendFile(__dirname + "/" + "launch.html");
});

const server = app.listen(8080, function () {
  const port = server.address().port;

  console.log(`app listening at http://127.0.0.1:${port}`);
});
