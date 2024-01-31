import React, { useContext, useState } from "react";

import Navbar from "./Navbar";
import { AuthContext } from "../context/AuthContext";
import { toast } from "sonner";

const PostJob = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    minSalary: "",
    maxSalary: "",
    jobLocation: "",
    postingDate: "",
    experienceLevel: "",
    jobType: "",
    companyLogo: "",
    description: "",
    postedBy: "",
    applicationDeadline: "",
    jobLink: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const data = JSON.stringify(formData);
    console.log(data);
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: data,
    });
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {user.isEmployer === true && (
        <div>
          <Navbar />

          <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
            <div className="bg-background py-10 px-4 lg:px-16">
              <h5 className="text-xl font-bold dark:text-white mb-8 ">
                Create a job
              </h5>

              <form onSubmit={handleSubmit} className=" gap-3 grid grid-col-4 ">
                <div className="post-job-row">
                  <div className="lg:w-1/2 w-full">
                    <label className="post-input-label">Job Title</label>
                    <input
                      className="post-job-input"
                      type="text"
                      name="jobTitle"
                      onChange={onChange}
                    />
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <label className="post-input-label">Company Name</label>
                    <input
                      className="post-job-input"
                      type="text"
                      name="companyName"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="post-job-row">
                  <div className="lg:w-1/2 w-full">
                    <label className="post-input-label">Minimum Salary ₹</label>
                    <input
                      className="post-job-input"
                      type="number"
                      name="minSalary"
                      onChange={onChange}
                    />
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <label className="post-input-label">Maximum Salary ₹</label>
                    <input
                      className="post-job-input"
                      type="number"
                      name="maxSalary"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="post-job-row">
                  <div className="lg:w-1/2 w-full">
                    <label className="post-input-label">Job Location</label>
                    <input
                      className="post-job-input"
                      type="text"
                      name="jobLocation"
                      onChange={onChange}
                    />
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <label className="post-input-label">Job Link</label>
                    <input
                      className="post-job-input"
                      type="text"
                      name="jobLink"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="post-job-row">
                  <div className="lg:w-1/2 w-full">
                    <label className="post-input-label">Job Posting Date</label>
                    <input
                      className="post-job-input"
                      type="date"
                      name="postingDate"
                      onChange={onChange}
                    />
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <label className="post-input-label">Experience Level</label>
                    <select
                      name="experienceLevel"
                      className="post-job-input"
                      onChange={onChange}
                    >
                      <option value="fresher">Fresher</option>
                      <option value="2year">0-2 Years</option>
                      <option value="5year">2-5 Years</option>
                      <option value="10year">5-10 Years</option>

                      <option value="anyExperience">Any experience</option>
                    </select>
                  </div>
                </div>

                <div className="post-job-row">
                  <div className="lg:w-1/2 w-full">
                    <label className="post-input-label">Job Type</label>
                    <select
                      name="jobType"
                      className="post-job-input"
                      onChange={onChange}
                    >
                      <option value="intern">Intern</option>

                      <option value="remote">Remote</option>
                      <option value="partTime">Part-Time</option>

                      <option value="fullTime">Full-Time</option>
                    </select>
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <label className="post-input-label">
                      Application Deadline
                    </label>
                    <input
                      className="post-job-input"
                      type="date"
                      name="applicationDeadline"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className=" w-full">
                  <label className="post-input-label">Job Description</label>
                  <textarea
                    className="w-full pl-3 py-1.5 focus:outline-none"
                    rows={6}
                    name="description"
                    onChange={onChange}
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className=" block mt-12 px-8 py-2 border w-28  bg-black rounded-sm text-white cursor-pointer font-semibold "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostJob;
