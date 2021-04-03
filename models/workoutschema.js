const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  // cited code: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  day: {
    type: Date,
    default: Date.now, 
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Enter a type of Excercise"
      },
      name: {
        type: String,
        required: "Enter name of Excercise"
      },
      duration:   {
        type: Number,
        required: "Enter time duration of Excercise"
      },
      weight: {
        type: Number,
        required: "Enter weight amount of Excercise" 
      },
      reps: {
        type: Number,
        required: "Enter number of reps of Excercise"
      },
      sets: {
        type: Number,
        required: "Enter number of sets of Excercise"
      }, 
      distance: {
        type: Number,
        required: "Enter distance number of Excercise"
      }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
