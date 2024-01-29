const mongoose = require("mongoose");
const Job = require("../models/Job");
const { createError } = require("../utils/createError");

const createJob = async (req, res, next) => {
  try {
    if (await Job.findOne({ jobLink: req.body.jobLink })) {
      return next(createError(409, "job already exists"));
    }
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).send(newJob);
  } catch (err) {
    next(err);
  }
};

const getJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find();
    res.status(200).send(jobs);
  } catch (err) {
    next(err);
  }
};

const getJob = async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return next(createError(422, "Parameter is not a valid"));
    }
    const job = await Job.findById(req.params.id);
    if (!job) {
      return next(createError(404, "Job not found"));
    }
    res.status(200).send(job);
  } catch (err) {
    next(err);
  }
};

const updateJob = async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return next(createError(422, "Parameter is not a valid"));
    }

    if (!(await Job.exists({ _id: req.params.id }))) {
      return next(createError(404, "Job not found"));
    }

    const id = req.params.id;
    const text = req.body;
    const jobUpdated = await Job.findByIdAndUpdate(id, text, { new: true });
    res.send(jobUpdated);
  } catch (err) {
    next(err);
  }
};

const deleteJob = async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return next(createError(422, "Parameter is not a valid"));
    }

    const job = await Job.findById(req.params.id);
    if (!job) {
      return next(createError(404, "Job not found"));
    } else {
      await job.deleteOne();
    }
    res.status(204).send("deleted");
  } catch (err) {
    next(err);
  }
};

const getJobsByEmail = async (req, res, next) => {
  try {
    const jobs = await Job.find({ postedBy: req.params.email });
    res.send(jobs);
  } catch (err) {
    next(err);
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
