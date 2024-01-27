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
  res.send("api working");
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
app.use(cors(corsOptions));
app.use(jobRoute);
app.use(authRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(port, () => {
  connectDB();
  console.log(`server running on ${port}`);
});
