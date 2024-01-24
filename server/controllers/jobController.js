const mongoose = require("mongoose");
const Job = require("../models/Job");

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).send(jobs);
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};

const getJob = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(422).json({ error: "Parameter is not a valid" });
    }
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.status(200).send(job);
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};

const createJob = async (req, res) => {
  try {
    if (!req.body.companyName) {
      return res.status(422).json({ error: "Company Name is required" });
    }

    if (await Job.findOne({ joblink: req.body.joblink })) {
      return res.status(409).json({ error: "job already exists" });
    }
    const job = await Job.create(req.body);
    res.status(201).send(job);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateJob = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(422).json({ error: "Parameter is not a valid" });
    }

    if (!(await Job.exists({ _id: req.params.id }))) {
      return res.status(422).json({ error: "Job not found" });
    }

    const id = req.params.id;
    const text = req.body;
    const jobUpdated = await Job.findByIdAndUpdate(id, text, { new: true });
    res.send(jobUpdated);
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(422).json({ error: "Parameter is not a valid" });
    }
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    } else {
      await job.deleteOne();
    }
    res.status(204).send("deleted");
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};

const getJobsByEmail = async (req, res) => {
  try {
    const jobs = await Job.find({ postedBy: req.params.email });
    res.send(jobs);
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};

module.exports = {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  getJobsByEmail,
};
