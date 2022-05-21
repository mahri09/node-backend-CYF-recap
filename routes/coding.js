const express = require("express");
const router = express.Router();
//Use this array as your (in-memory) data store.
const codingData = require("../coding.json");

router.get("/", function (request, response) {
  response.json(codingData);
});

module.exports = router;
