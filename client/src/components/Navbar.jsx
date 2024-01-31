import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { AuthContext } from "../context/AuthContext";
import { toast } from "sonner";
import { BASE_URL } from "../utils/baseUrl.js";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = async () => {
    try {
      await fetch(`${BASE_URL}/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
      });

      dispatch({ type: "LOGOUT" });
      toast.warning("Logged out");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4  ">
        <nav className="flex justify-between items-center py-6">
          <a
            href="/"
            className="flex items-center text-2xl gap-2 text-primary font-bold"
          >
            <svg
              width="29"
              height="30"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.5 14.3H28.1V0H14.3C14.3 7.9 7.9 14.3 0 14.3V28.1H14.3V42.4H28.1C28.1 34.5 34.6 28.1 42.5 28.1V14.3Z"
                fill="#239852"
              />
            </svg>
            <span>Hire</span>
          </a>

          <ul className="hidden md:flex gap-12    ">
            <li className="text-sm text-primary ">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            {user && (
              <li className="text-sm text-primary ">
                <NavLink
                  to="/findjobs"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Find Jobs
                </NavLink>
              </li>
            )}

            {user?.isEmployer && (
              <li className="text-sm text-primary">
                <NavLink
                  to="/myjobs"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  My Jobs
                </NavLink>
              </li>
            )}

            {user?.isEmployer && (
              <li className="text-sm text-primary">
                <NavLink
                  to="/post-job"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Post a job
                </NavLink>
              </li>
            )}

            <li className="text-sm text-primary">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About{" "}
              </NavLink>
            </li>
          </ul>

          {user ? (
            <div className="flex  sm:ml-80  ">
              <img src="user.png" className="w-8 h-8 mr-1  " alt="" />
              <div className="mt-1 font-semibold ">
                {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
              </div>
              <span></span>
              <button
                className="py-1 px-5 ml-5 border  rounded bg-green text-white hidden lg:block"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="text-sm text-primary font-medium space-x-5 hidden lg:block">
              <Link to="/login" className="py-2 px-5 border rounded">
                Login
              </Link>
              <Link
                to="/register"
                className="py-2 px-5 border rounded bg-green text-white"
              >
                Sign up
              </Link>
            </div>
          )}

          <div className="md:hidden block">
            <button onClick={handleMenuToggler}>
              {isMenuOpen ? (
                <FaXmark className="w-5 h-5 text-primary" />
              ) : (
                <FaBars className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>
        </nav>

        <div
          className={`px-4 py-5 rounded-sm bg-background ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <ul>
            <li className="text-sm text-primary py-1">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            {user && (
              <li className="text-sm text-primary py-1">
                <NavLink
                  to="/findjobs"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Find Jobs
                </NavLink>
              </li>
            )}
            {user?.isEmployer && (
              <li className="text-sm text-primary py-1">
                <NavLink
                  to="/post-job"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Post A Job
                </NavLink>
              </li>
            )}
            {user?.isEmployer && (
              <li className="text-sm text-primary py-1">
                <NavLink
                  to="/myjobs"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  My Jobs
                </NavLink>
              </li>
            )}
            <li className="text-sm text-primary py-1">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li className=" py-1">
              {user ? (
                <button
                  className="text-white bg-black rounded px-2 py-1"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="py-1 px-2 border rounded bg-green text-white"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
