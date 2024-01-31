import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SignUp = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    isemployer: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",

        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      if (data.error) {
        return toast.error(`${data.error}`);
      } else {
        toast.success("Registration successfully completed, Please login");

        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleEmployer = (e) => {
    setCredentials((prev) => {
      return { ...prev, isEmployer: e.target.checked };
    });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center p-8 md:p-14"
        >
          <span className="mb-3 text-3xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Username</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="username"
              id="username"
              onChange={onChange}
              value={credentials.username}
              required
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              onChange={onChange}
              value={credentials.email}
              required
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              onChange={onChange}
              value={credentials.password}
              required
            />
          </div>
          <div className="mb-3 mt-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                onChange={handleEmployer}
                type="checkbox"
                value={credentials.isemployer}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-black rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 ">
                Register as Recruiter
              </span>
            </label>
          </div>
          <button
            // disabled={loading}
            type="submit"
            className="w-full bg-green text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign Up
          </button>

          <div className="text-center text-gray-400">
            Already have an account?
            <span className="font-bold text-black">
              <NavLink to="/login">Login</NavLink>{" "}
            </span>
          </div>
        </form>

        <div className="relative">
          <img
            src="login.jpg"
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover object-right"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
