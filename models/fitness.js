const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessTracker = new Schema({
    day: {
        type: Date,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter your exerciese"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter the name of the exercise"
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
                type: Number
            },
            distance: {
                type: Number
            }
        }]
});

const Fitness = mongoose.model("Fitness", fitnessTracker);

module.exports = Fitness;