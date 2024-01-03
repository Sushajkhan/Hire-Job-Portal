import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import JobCard from "../components/JobCard";
import Jobs from "./Jobs";

const Home = () => {
  const [selectedCategory, setSelecetedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  // handle input change
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // filter jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // radio filtering
  const handleChange = (e) => {
    setSelecetedCategory(e.target.value);
  };

  // button based filtering
  const handleClick = (e) => {
    setSelecetedCategory(e.target.value);
  };

  //main function
  const filteredData = (data, selected, query) => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs = filteredItems;
    }
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }

    return filteredJobs.map((data, i) => <JobCard key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <>
      <Navbar />
      <Banner query={query} handleInputChange={handleInputChange} />

      <div className="bg-background md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">left</div>
        <div className="col-span-2 bg-white p-4 rounded">
          <Jobs result={result} />
        </div>
        <div className="bg-white p-4 rounded">right</div>
      </div>
    </>
  );
};

export default Home;
