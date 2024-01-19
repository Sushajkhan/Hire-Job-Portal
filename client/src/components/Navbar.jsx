import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Home" },
    { path: "/find-jobs", title: "Find Jobs" },

    { path: "/myjobs", title: "My Jobs" },
    { path: "/post-job", title: "Upload A Job" },
    { path: "/about", title: "About Us" },
  ];

  return (
    <>
      <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
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

          <ul className="hidden md:flex gap-12">
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-sm text-primary">
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="text-sm text-primary font-medium space-x-5 hidden lg:block">
            <Link to="/login" className="py-2 px-5 border rounded">
              Login
            </Link>
            <Link
              to="/Sign up"
              className="py-2 px-5 border rounded bg-green text-white"
            >
              Sign up
            </Link>
          </div>

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
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-sm text-primary py-1">
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
              </li>
            ))}

            <li className="py-1  ">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
