var db = require("../models");

module.exports = function (app) {

    // Pull workout page
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => res.status(400).json(err));
    });

    //   Pull range page
    app.get("/api/workouts/range", ({ }, res) => {
        db.Workout.find({}).then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => res.status(400).json(err));
    });

    // Submit completed workouts
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body).then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => res.status(400).json(err));
    });

    app.post("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdUpdate({_id: req.params.id}, {excercises: req.body})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => res.status(400).json(err));
    });
};
