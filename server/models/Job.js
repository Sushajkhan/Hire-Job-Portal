const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },

    minSalary: {
      type: Number,
      required: true,
    },
    maxSalary: {
      type: Number,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    jobLocation: {
      type: String,
      required: true,
    },
    postingDate: {
      type: Date,
      required: true,
    },
    experienceLevel: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    jobLink: {
      type: String,
      required: true,
    },

    applicationDeadline: {
      type: Date,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
