const mongoose = require("mongoose");
const Job = require("../models/Job");

const createJob = async (req, res) => {
  if (!req.isEmployer)
    return res.status(403).json({ error: "Only Employers can post Jobs!" });
  try {
    if (await Job.findOne({ jobLink: req.body.jobLink })) {
      return res.status(409).json({ error: "Job Already exists" });
    }
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getJob = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(422).json({ error: "Parameter is not a valid" });
    }
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job Not Found" });
    }
    res.status(200).json(job);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateJob = async (req, res) => {
  if (!req.isEmployer)
    return res
      .status(403)
      .json({ error: "Only Employer can update this Job!" });
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(422).json({ error: "Parameter is not a valid" });
    }

    if (!(await Job.exists({ _id: req.params.id }))) {
      return res.status(404).json({ error: "Job Not Found" });
    }

    const id = req.params.id;
    const text = req.body;
    const jobUpdated = await Job.findByIdAndUpdate(id, text, { new: true });
    res.send(jobUpdated);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteJob = async (req, res) => {
  if (!req.isEmployer)
    return res
      .status(403)
      .json({ error: "Only Employer can delete this Job!" });
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(422).json({ error: "Parameter is not a valid" });
    }

    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job Not Found" });
    } else {
      await job.deleteOne();
    }
    res.status(204).send("deleted");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getJobsByUser = async (req, res) => {
  try {
    const jobs = await Job.find({ postedBy: req.params.email });
    res.send(jobs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  getJobsByUser,
};
