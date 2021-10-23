const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

const db = require("./models");

app.use(logger("dev"));

app.use("/", routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/myWorkoutDB", { useNewUrlParser: true });


// Start the server
app.listen(PORT, () => {
      console.log(`App running on port ${PORT}!`);
    });