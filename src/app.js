const express = require("express");
const { applyMidleware } = require("./middleware/default");
const app = express();
app.use(express.json());
applyMidleware(app);
module.exports = app;
