import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const JobDetails = () => {
  const [job, setJob] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div>
        <div className="text-black text-2xl font-medium  bg-gray-100  w-full flex justify-center items-center px-16 py-10 max-md:max-w-full max-md:px-5">
          {job.jobTitle}
          <span className="text-lg">({job.jobType}) </span> - {job.companyName}
        </div>
        <div className="flex justify-center items-center gap-5 mt-6">
          <button className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-green transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
            View Company
          </button>
          <button className="inline-block rounded bg-green px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
            Apply This Job
          </button>
        </div>
        <div className="text-black text-sm leading-7  xl:px-24 px-4 mx-auto">
          <span className="font-bold">Minimum Qualification:</span>{" "}
          <span className="">Bachelor</span>
          <br />
          <span className="font-bold">Experience Level:</span>{" "}
          <span className="">Mid level</span>
          <br />
          <span className="font-bold">Experience Length:</span>{" "}
          <span className="">2 years</span>
          <br />
          <span className="font-bold">Location:</span>{" "}
          <span className="">San Francisco, USA</span>
          <br />
          <span className="font-bold">Application Deadline:</span>{" "}
          <span className="">12/08/2022</span>
          <br />
          <span className="font-bold ">Salary Range:</span>{" "}
          <span className="">$ 105,000 - 150,000</span>
          <br />
          <br />
          <p className="font-bold">Job Description</p>
          <p>
            We are searching for a Laravel developer to build web applications
            for our company. In this role, you will design and create projects
            using Laravel framework and PHP, and assist the team in delivering
            high-quality web applications, services, and tools for our business.
            <br />
            <br />
            <p></p>
            To ensure success as a Laravel developer you should be adept at
            utilizing Laravel's GUI and be able to design a PHP application from
            start to finish. A top-notch Laravel developer will be able to
            leverage their expertise and experience of the framework to
            independently produce complete solutions in a short turnaround time.
            <br />
            <br />
            Laravel Developer Requirements:
            <br /> A degree in programming, computer science, or a related
            field. Experience working with PHP, performing unit testing, and
            managing APIs such as REST. A solid understanding of application
            design using Laravel. Knowledge of database design and querying
            using SQL. Proficiency in HTML and JavaScript. Experience developing
            in Vue is considered a plus. Practical experience using the MVC
            architecture. The ability to work on LAMP development environment
            Problem-solving skills and critical mindset. Great communication
            skills. The desire and ability to learn. Responsibilities:
            Discussing project aims with the client and development team.
            Designing and building web applications using Laravel.
            Troubleshooting issues in the implementation and debug builds.
            Working with front-end and back-end developers on projects. Testing
            functionality for users and the backend. Ensuring that integrations
            run smoothly. Scaling projects based on client feedback. Recording
            and reporting on work done in Laravel. Maintaining web-based
            applications. Presenting work in meetings with clients and
            management.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 mt-6">
        <button className="flex gap-2 rounded bg-black px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
          <IoArrowBackCircleOutline className="w-5 h-5" />
          Back
        </button>
      </div>
    </>
  );
};

export default JobDetails;
