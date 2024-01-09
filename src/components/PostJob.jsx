import React, { useState } from "react";

import Navbar from "./Navbar";

const PostJob = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    minSalary: "",
    maxSalary: "",
    salaryType: "",
    jobLocation: "",
    postingDate: "",
    experienceLevel: "",
    employmentType: "",
    companylogo: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <div className="bg-background py-10 px-4 lg:px-16">
          <form onSubmit={handleSubmit} className=" gap-3 grid grid-col-4 ">
            <div className="">
              <label>Job Title</label>
              <input
                className=""
                type="text"
                name="jobTitle"
                onChange={onChange}
              />
            </div>
            <div className="">
              <label>Company Name</label>
              <input
                className=""
                type="text"
                name="companyName"
                onChange={onChange}
              />
            </div>
            <div className="">
              <label>MInimum Salary ₹</label>
              <input
                className=""
                type="number"
                name="minSalary"
                onChange={onChange}
              />
            </div>
            <div className="">
              <label>Maximum Salary ₹</label>
              <input
                className=""
                type="number"
                name="maxSalary"
                onChange={onChange}
              />
            </div>
            <div className="">
              <label>Salary Type</label>
              <select name="salaryType" className="" onChange={onChange}>
                <option value="hourly">Hourly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div className="">
              <label>Job Location</label>
              <input
                className=""
                type="text"
                name="jobLocation"
                onChange={onChange}
              />
            </div>{" "}
            <div className="">
              <label>Job Posting Date</label>
              <input
                className=""
                type="date"
                name="postingDate"
                onChange={onChange}
              />
            </div>
            <div className="">
              <label>Experience Level</label>
              <select name="experienceLevel" className="" onChange={onChange}>
                <option value="intership">Intership</option>
                <option value="anyExperience">Any experience</option>
              </select>
            </div>
            <div className="">
              <label>Company Logo</label>
              <input
                className=""
                type="file"
                name="companyLogo"
                onChange={onChange}
              />
            </div>
            <div className="">
              <label>Employment Type</label>
              <select name="employmentType" className="" onChange={onChange}>
                <option value="intern">Intern</option>
                <option value="partTime">Part-Time</option>

                <option value="fullTime">Full-Time</option>
              </select>
            </div>
            <div className="">
              <label>Job Description</label>
              <textarea className="" name="description" onChange={onChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
