import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import JobCard from "../components/JobCard";
import Sidebar from "../components/Sidebar";
import NewsLetter from "../components/NewsLetter";
import Jobs from "./Jobs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
    </>
  );
};

export default Home;
