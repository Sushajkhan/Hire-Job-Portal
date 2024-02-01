import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "sonner";
import { BASE_URL } from "../utils/baseUrl.js";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { loading, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      if (!data.error) {
        dispatch({ type: "LOGIN", payload: data });
        toast.success(`Welcome ${data.username}`);

        navigate("/findjobs");
      } else {
        toast.error(` ${data.error}`);
      }
    } catch (error) {
      console.log(error);
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
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              onChange={onChange}
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
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Login
          </button>

          <div className="text-center text-gray-400">
            Dont'have an account?
            <span className="font-bold text-green">
              <NavLink to="/register">
                <span></span>Sign up
              </NavLink>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
