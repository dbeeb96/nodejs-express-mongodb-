const express = require("express");

const logger = require("morgan");

const cors = require("cors");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

const db = require("./models");

db.mongoose
  .connect(db.url, {})
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to ugb students application." });
});

require("./routes/student.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// mongodb://localhost:27017
