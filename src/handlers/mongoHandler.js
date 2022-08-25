const mongoose = require("mongoose");
const github = require('../config/HOKKABAZ.json')

mongoose.connect(github.Bot.Database_Mongourl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => console.log("[DATABASE] Connected To Database"));
mongoose.connection.on("error", () => console.error("[DATABASE] Failed To Connect Database"));

