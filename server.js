const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// + Import routes folder to handle the routing of API and HTML endpoints
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const db = require("./models");

// + Connect to MongoDB Atlas if deployed to Heroku, otherwise connect to local MongoDB instance
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(logger("dev"));

app.use(routes);


// Start the server
app.listen(PORT, () => {
      console.log(`App running on port ${PORT}!`);
    });