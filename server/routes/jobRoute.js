const express = require("express");
const router = express.Router();
const {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  getJobsByUser,
} = require("../controllers/jobController");
const { verifyToken } = require("../middlewares/jwt");

router.post("/jobs", verifyToken, createJob);
router.get("/jobs", getJobs);
router.get("/jobs/:id", getJob);
router.put("/jobs/:id", verifyToken, updateJob);
router.delete("/jobs/:id", verifyToken, deleteJob);
router.get("/myjobs/:user", verifyToken, getJobsByUser);

module.exports = router;
