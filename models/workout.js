const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// + name, type, weight, sets, reps, and duration of exercise
const workoutSchema = new Schema(
	{
		day: {
			type: Date,
			default: Date.now,
		},
		exercises: [
			{
				type: {
					type: String,
					required: "Select a type for the exercise",
				},
				name: {
					type: String,
					required: "Enter a name for this exercise"
				},
				distance:{
					type: Number
				},
				weight: {
					type: Number
				},
				sets: {
					type: Number
				},
				reps: {
					type: Number
				},
				duration: {
					type: Number,
					required: "Enter the duration of this exercise"
				}
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
