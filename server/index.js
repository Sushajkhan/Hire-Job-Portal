const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jobRoute = require("./routes/jobRoute");
const authRoute = require("./routes/authRoute");
const cookieParser = require("cookie-parser");
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("TaDa...");
});

// connect db
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.BASE_URL, credentials: true }));
app.use(jobRoute);
app.use(authRoute);

app.listen(port, () => {
  connectDB();
});
