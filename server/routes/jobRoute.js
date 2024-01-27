const express = require("express");
const router = express.Router();
const {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  getJobsByEmail,
} = require("../controllers/jobController");
const { verifyToken } = require("../middlewares/jwt");

router.post("/jobs", verifyToken, createJob);
router.get("/jobs", getJobs);
router.get("/jobs/:id", getJob);
router.put("/jobs/:id", verifyToken, updateJob);
router.delete("/jobs/:id", verifyToken, deleteJob);
router.get("/myjobs/:email", verifyToken, getJobsByEmail);

module.exports = router;
