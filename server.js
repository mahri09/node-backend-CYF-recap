const express = require("express");
const cors = require("cors");
const coding = require("./routes/coding");

var bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8091;

app.use(cors());

//parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response) {
  response.send("CYF recap learnings.  Ask for /coding, etc.");
});

// TODO add your routes and helper functions here
app.use("/coding", coding);

app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
