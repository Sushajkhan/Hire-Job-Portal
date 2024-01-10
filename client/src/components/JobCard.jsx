import React from "react";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const JobCard = ({ data }) => {
  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    employmentType,
    description,
  } = data;

  return (
    <section className="card bg-white rounded-lg">
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={companyLogo} alt="" />
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
              {employmentType}
            </span>
            <span className="flex items-center gap-2 bg-background">
              ₹ {minPrice}-{maxPrice}
            </span>
            <span className="flex items-center gap-2 bg-background">
              <FiCalendar />
              {postingDate}
            </span>
          </div>

          <p className="text-sm text-text">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default JobCard;
