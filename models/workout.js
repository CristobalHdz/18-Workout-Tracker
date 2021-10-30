const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    excercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true,
            },
            name: {
                type: String,
                trim:true,
                required: true,
            },
            duration: {
                type:Number,
                required: true,
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            },
        }
    ]
})

const Workout = mongoose.model("workout",WorkSchema);