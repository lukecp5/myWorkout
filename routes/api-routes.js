const router = require("express").Router();
const path = require("path");
const app = require(".");
const mongoose = require("mongoose");

const db = require("../models");

const workout = {
      name: "Running",
      type: "Cardio",
      duration: 15,
}
router.get("/workouts", (req, res) =>{
})


module.exports = router