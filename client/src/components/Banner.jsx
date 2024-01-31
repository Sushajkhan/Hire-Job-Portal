import React, { useContext, useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import FindJobs from "../pages/FindJobs";
import { AuthContext } from "../context/AuthContext";

const Banner = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate("/login");
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 mb-32">
      <div className="flex justify-between ">
        <div className="flex justify-around flex-col  ">
          <div>
            <h1 className="text-5xl  font-bold text-primary mb-8">
              Find A <span className="text-green">Job</span> that <br />
              <span className="text-green">Matches</span> Your <br />
              Passion
            </h1>
            <p className="text-lg text-text mb-2">
              Hire is your one-stop-centre for thousands of digital freelance
              and fulltime jobs.
            </p>
          </div>

          {!user && (
            <form onSubmit={handleSubmit}>
              <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
                <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300  md:w-full w-full ">
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
                  Search
                </button>
              </div>
            </form>
          )}
        </div>

        <div>
          <img src="\image 138.png" alt="" className="w-[420px] bg-contain" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
