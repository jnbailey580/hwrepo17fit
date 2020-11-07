const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
let uri = 'mongodb+srv://jnbailey580:<password>@cluster0.dqqwe.mongodb.net/<dbname>?retryWrites=true&w=majority'

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
process.env.MONGODB_URI || "mongodb://localhost/workout",
 {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
 }

);

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});