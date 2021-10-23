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
					required: true,
				},
				name: {
					type: String,
					required: true,
				},
				weight: {
					type: Number
				},
				sets: {
					type: Number
				},
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
