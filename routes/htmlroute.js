const router = require("express").Router();
const path = require("path");

//this gets the index.html 
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

//this gets the stats.html 
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

//this gets the exercise.html
router.get("/excercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

module.exports = router;

