// + Import router from the express module to be used for routing requests to the API
const router = require("express").Router();
const path = require("path");
const mongoose = require("mongoose");
const mongojs = require("mongojs");

// + Import the models folder so that we can manipulate the database from inside the API
const db = require("../models");

// const workout = {
// 	name: "Running",
// 	type: "Cardio",
// 	duration: 15,
// };

// + Connect to the database and find all of the documents in the workouts collection and return them as JSON objects
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

// + When a user clicks "Create New Workout" on the front end, create a new workout document in the database and return it as JSON
router.post("/workouts", (req, res) => {
	db.Workout.create({})
	  .then((newWorkout) => {
	    res.json(newWorkout);
	  })
	  .catch((err) => {
	    res.status(400).json(err);
	  });
    });
    
// + When a user enters information about a new exercise, push a new exercise object into the current workout document and return the updated workout document as JSON
router.put("/workouts/:id", (req, res) => {
	const id = req.params.id;
	const body = req.body;

	db.Workout.findOneAndUpdate({_id: id}, {$push: {exercises: body}})
		.then((data) => {
			console.log(data);
			res.json(data);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.put("/workouts/:id", (req, res) => {
	const id = req.params.id;
	const body = req.body;
    
	db.Workout.findOneAndUpdate(
	  { _id: id },
	  { $push: { exercises: body } },
	  { new: true, runValidators: true }
	)
	  .then((data) => {
	    res.json(data);
	  })
	  .catch((err) => {
	    res.status(400).json(err);
	  });
    });

router.get("/workouts/range", (req, res) => {
	db.Workout.find({})
	.sort({ date: -1 })
	  .then((data) => {
	    res.json(data);
	  })
	  .catch((err) => {
	    res.status(400).json(err);
	  });
    });

module.exports = router;
