const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connectes to MongoDB!!!!");
});

// middleware
app.use(express.json());
app.use(helmet());
// app.use(morgan("common"));

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("connecteddddd");
});
