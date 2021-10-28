const router = require("express").Router();
const path = require("path");
	// + Root directory of the application displays the index.html file for the user
	router.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	// + Displays the "Add Exercise" page to the user when they or the application requests it
	router.get("/exercise", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/exercise.html"));
	});

	// + Displays the "Stats" page to the user when they or the application requests it
	router.get("/stats", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/stats.html"));
	});

module.exports = router;
