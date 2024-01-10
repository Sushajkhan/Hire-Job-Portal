const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
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
app.use(cors(corsOptions));

app.listen(port, () => {
  connectDB();
  console.log(`server running on ${port}`);
});
