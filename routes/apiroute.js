const router = require("express").Router();
const db = require("../models");

//create a workout
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.join(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//gets a workout
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

//updates a workout
//sited code: https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/#mongodb-method-db.collection.updateOne
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne({ _id: req.params.id }, {$push: { exercises: {
        ...req.body
    }}} )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

//displays workout graph **needs to br fixed later
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});




module.exports = router;