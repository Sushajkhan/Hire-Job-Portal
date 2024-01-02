import React, { useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

const Banner = ({ query, handleInputChange }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <div className="flex justify-between ">
        <div className="flex justify-around flex-col  ">
          <div>
            <h1 className="text-5xl font-bold text-primary mb-3">
              Find your <span className="text-green">new job</span> today
            </h1>
            <p className="text-lg text-text mb-8">
              Hire is your one-stop-centre for thousands of digital freelance
              and fulltime jobs.
            </p>
          </div>
          <form>
            <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
              <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300  md:w-1/2 w-full ">
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
              <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300  md:w-1/3 w-full ">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Location"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-text placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 "
                  value={""}
                />
                <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400" />
              </div>
              <button type="submit" className="bg-green text-white py-2 px-8 ">
                Search
              </button>
            </div>
          </form>
        </div>

        <div>
          <img src="\image 138.png" alt="" className="w-[420px] bg-contain" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
