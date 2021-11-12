const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
require("./seeders/seed")


const PORT = process.env.PORT || 3001

const app = express();

app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
require("./routes/apiroute.js")(app);
require("./routes/viewroute.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
