const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  companyName: { type: String, required: true },
  jobTitle: { type: String, required: true },
  companyLogo: { type: String },
  minSalary: { type: Number, required: true },
  maxSalary: { type: Number, required: true },
  salaryType: { type: String, required: true },
  jobLocation: { type: String, required: true },
  postingDate: { type: Date, required: true },
  experienceLevel: { type: String, required: true },
  employmentType: { type: String, required: true },
  description: { type: String, required: true },
});

const jobModel = mongoose.model("jobModel", jobSchema);
