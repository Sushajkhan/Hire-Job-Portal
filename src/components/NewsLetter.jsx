import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div>
      <div>
        <h3 className="text-base font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email For Jobs
        </h3>
        <p className="text-text text-sm mb-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel
          placerat elit
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-black rounded-sm text-white cursor-pointer font-semibold text-sm"
          />
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-base font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get noticed faster{" "}
        </h3>
        <p className="text-text text-sm mb-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel
          placerat elit
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Upload your resume"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-black rounded-sm text-white cursor-pointer font-semibold text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
