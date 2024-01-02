import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Home = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Banner query={query} handleInputChange={handleInputChange} />
    </>
  );
};

export default Home;
