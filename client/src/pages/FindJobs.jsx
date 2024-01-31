import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import Sidebar from "../components/Sidebar";
import Jobs from "./Jobs";
import NewsLetter from "../components/NewsLetter";
import Banner from "../components/Banner";
import { FiMapPin, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const FindJobs = () => {
  const [selectedCategory, setSelecetedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { user } = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
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

  // calculate the index range

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // function for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //function for the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }
    // slice the data based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <JobCard key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <>
      {user && (
        <div>
          <Navbar />
          <div className="max-w-screen-2xl container mx-auto lg:px-24 px-4 py-12 ">
            <form className="max-w-screen-2xl container mx-auto lg:px-24 px-4 ">
              <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
                <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300  w-full ">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="What you are looking for ?"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-text placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 "
                    onChange={handleInputChange}
                    value={query}
                  />
                  <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
                </div>

                <button
                  type="submit"
                  className="bg-green text-white py-2 px-8 "
                >
                  <Link to="/find-jobs">Search</Link>
                </button>
              </div>
            </form>
          </div>
          <div className="bg-background md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
            <div className="bg-white p-4 rounded">
              <Sidebar handleChange={handleChange} handleClick={handleClick} />
            </div>

            <div className="col-span-2 bg-white p-4 rounded">
              {isLoading ? (
                <p className="font-medium">Loading...</p>
              ) : result.length > 0 ? (
                <Jobs result={result} />
              ) : (
                <>
                  <h3 className="text-lg font-bold mb-2">
                    {result.length} jobs
                  </h3>
                  <p>No data found</p>
                </>
              )}

              {result.length > 0 ? (
                <div className="flex justify-center mt-4 space-x-8">
                  <button onClick={prevPage} disabled={currentPage === 1}>
                    Previous
                  </button>
                  <span className="mx-2">
                    Page {currentPage} of
                    {Math.ceil(filteredItems.length / itemsPerPage)}
                  </span>
                  <button
                    onClick={nextPage}
                    disabled={
                      currentPage ===
                      Math.ceil(filteredItems.length / itemsPerPage)
                    }
                  >
                    Next
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="bg-white p-4 rounded">
              <NewsLetter />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FindJobs;
