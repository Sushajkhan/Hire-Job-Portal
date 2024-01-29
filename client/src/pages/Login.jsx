import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = { email, password };
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      console.log(message);
    } catch (err) {
      setError(err);
      console.log(message);
    }
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
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Keep me signed in</span>
            </div>
            <span className="font-bold text-md">Forgot password</span>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign in
          </button>
          {/* {error && error} */}
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
            <img src="google.svg" alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Dont'have an account?
            <span className="font-bold text-black">
              <NavLink to="/register">Sign up</NavLink>{" "}
            </span>
          </div>
        </form>

        <div className="relative">
          <img
            src="login (2).jpg"
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover object-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
