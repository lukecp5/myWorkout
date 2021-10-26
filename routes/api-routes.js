const router = require("express").Router();
const path = require("path");
const app = require(".");
const mongoose = require("mongoose");
const mongojs = require("mongojs");

const db = require("../models");

// const workout = {
// 	name: "Running",
// 	type: "Cardio",
// 	duration: 15,
// };

router.get("/workouts", (req, res) => {
	db.Workout.find({})
		.then((workout) => {
			console.log(workout);
			res.json(workout);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post("/workouts", async ({body}, res) => {
	db.Workout.create(body)
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.put("/workouts/:id", (req, res) => {
	console.log(req.params.id);
	console.log(req.body);
	const id = req.params.id;
	const body = req.body;
});

module.exports = router;

module.exports = router