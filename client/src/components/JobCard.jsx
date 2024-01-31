import React, { useContext } from "react";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const JobCard = ({ data }) => {
  const {
    companyName,
    jobTitle,
    minSalary,
    maxSalary,
    jobLocation,
    postingDate,
    jobType,
    description,
  } = data;

  const maxDescriptionLength = 300;

  const shortDescription =
    description.length > maxDescriptionLength
      ? description.slice(0, maxDescriptionLength) + "..."
      : description;
  return (
    <section className="card bg-white rounded-lg">
      <Link
        to={`/view-job/${data?._id}`}
        className="flex gap-4 flex-col sm:flex-row items-start"
      >
        <img src="/companylogo.svg" alt="" />
        <div>
          <h4 className="text-primary mb-1">{companyName}</h4>
          <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>

          <div className="text-text text-sm flex flex-wrap gap-3 mb-2">
            <span className="flex items-center gap-2 bg-background">
              <FiMapPin />
              {jobLocation}
            </span>
            <span className="flex items-center gap-2 bg-background ">
              <FiClock />
              {jobType}
            </span>
            <span className="flex items-center gap-2 bg-background">
              ₹ {minSalary}-{maxSalary}
            </span>
            <span className="flex items-center gap-2 bg-background">
              <FiCalendar />
              {postingDate ? new Date(postingDate).toLocaleDateString() : ""}
            </span>
          </div>

          <p className="text-sm text-text">{shortDescription}</p>
        </div>
      </Link>
    </section>
  );
};

export default JobCard;
