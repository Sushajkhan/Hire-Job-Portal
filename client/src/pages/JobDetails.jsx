import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { BASE_URL } from "../utils/baseUrl.js";

const JobDetails = () => {
  const [job, setJob] = useState([]);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const { id } = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
      });
  }, [id]);

  return (
    <>
      <Navbar />

      <div>
        <div className="text-black text-2xl font-medium  bg-gray-100  w-full flex justify-center items-center px-16 py-10 max-md:max-w-full max-md:px-5">
          {job.jobTitle}
          <span className="">({job.jobType}) </span> - {job.companyName}
        </div>
        <div className="flex justify-center items-center gap-5 mt-6">
          <button className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-green transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
            <Link to={`https://www.google.com/search?q=${job.companyName}`}>
              Know About Company
            </Link>
          </button>
          <button className="inline-block rounded bg-green px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
            <Link to={job.jobLink}>Apply This Job </Link>
          </button>
        </div>
        <div className="text-black text-sm leading-7  xl:px-24 px-4 mx-auto">
          <span className="font-bold">Minimum Qualification:</span>{" "}
          <span className="">Bachelor</span>
          <br />
          <span className="font-bold">Experience Level:</span>{" "}
          <span className="">{job.experienceLevel}</span>
          <br />
          <span className="font-bold">Location:</span>{" "}
          <span className="">{job.jobLocation}</span>
          <br />
          <span className="font-bold">Application Deadline:</span>
          <span className="">
            {job.applicationDeadline
              ? new Date(job.applicationDeadline).toLocaleDateString()
              : ""}
          </span>
          <br />
          <span className="font-bold ">Salary Range:</span>
          <span className="">
            ₹ {job.minSalary} - ₹{job.maxSalary}
          </span>
          <br />
          <br />
          <p className="font-bold">Job Description</p>
          <p>{job.description}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 mt-6">
        <button
          className="flex gap-2 rounded bg-black px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"
          onClick={handleGoBack}
        >
          <IoArrowBackCircleOutline className="w-5 h-5" />
          Back
        </button>
      </div>
    </>
  );
};

export default JobDetails;
