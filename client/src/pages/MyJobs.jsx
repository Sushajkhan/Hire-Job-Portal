import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import NotFound from "./NotFound";
import { toast } from "sonner";
import { BASE_URL } from "../utils/baseUrl.js";

const MyJobs = () => {
  const { user } = useContext(AuthContext);

  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexofFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = jobs.slice(indexofFirstItem, indexOfLastItem);
  const nextPage = () => {
    if (indexOfLastItem < jobs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`${BASE_URL}/myjobs/${user._id}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, [user._id]);

  const handleSearch = () => {
    const filter = jobs.filter(
      (job) =>
        job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    setJobs(filter);
    setIsLoading(false);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/jobs/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    toast.warning("job deleted");
    setJobs(jobs.filter((job) => job._id !== id));
  };

  return (
    <>
      {user.isEmployer ? (
        <div>
          <Navbar />
          <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
            <div className="my-jobs-container">
              <h1 className="text-center p-4">My Jobs</h1>
              <div className="p-2 text-center mb-2 ">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="py-2 p;-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                  className="bg-black text-white font-semibold px-8 py-2 rounded-sm mb-4"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
            <section className="py-1 bg-blueGray-50">
              <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                  <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-blueGray-700">
                          All Jobs
                        </h3>
                      </div>
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        <Link to="/post-job">
                          <button
                            className="bg-black text-white  text-xs
                      font-bold uppercase px-4 py-2 rounded outline-none
                      focus:outline-none mr-1 mb-1 ease-linear transition-all
                      duration-150"
                            type="button"
                          >
                            Post A New Job
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="block w-full overflow-x-auto">
                    <table className="items-center bg-transparent w-full border-collapse ">
                      <thead>
                        <tr>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Job Title
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Company Name
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Job Type{" "}
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Posted Date
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Application Deadline{" "}
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Actions{" "}
                          </th>
                        </tr>
                      </thead>
                      {isLoading ? (
                        <div>
                          <p className="flex items-center justify-center h-20">
                            Loading.....
                          </p>
                        </div>
                      ) : (
                        <tbody>
                          {currentJobs.map((job, index) => (
                            <tr key={index}>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                {job.jobTitle}
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                {job.companyName}
                              </td>
                              <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {job.jobType}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                {new Date(job.createdAt).toLocaleDateString()}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                {new Date(
                                  job.applicationDeadline
                                ).toLocaleDateString()}
                              </td>{" "}
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                <div className=" flex justify-between gap-3">
                                  <button>
                                    <Link to={`/view-job/${job?._id}`}>
                                      <FaEye className="text-green w-4" />{" "}
                                    </Link>
                                  </button>
                                  <button>
                                    <Link to={`/edit-job/${job?._id}`}>
                                      {" "}
                                      <FaEdit className="text-blue " />
                                    </Link>
                                  </button>
                                  <button
                                    onClick={() => {
                                      handleDelete(job._id);
                                    }}
                                  >
                                    <FaRegTrashAlt className="text-red" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      )}
                    </table>
                  </div>
                </div>
              </div>

              <div className="flex justify-center text-sm  space-x-8 mb-8">
                {currentPage > 1 && (
                  <button onClick={prevPage}>
                    <IoIosArrowDropleft className="hover:text-green w-8 h-8" />
                  </button>
                )}
                {indexOfLastItem < jobs.length && (
                  <button className="hover:underline" onClick={nextPage}>
                    <IoIosArrowDropright className="hover:text-green w-8 h-8" />
                  </button>
                )}
              </div>
            </section>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default MyJobs;
