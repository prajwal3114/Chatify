import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      // CHANGE PORT 4001 TO 3000 IF YOUR BACKEND RUNS ON 3000
      const res = await axios.post("http://localhost:4001/users/login", userInfo);
      console.log(res.data);

      if (res.data) {
        alert("Login Successful");
        // Save user to LocalStorage
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        // Navigate home
        navigate("/");
        // Reload to update state
        window.location.reload(); 
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        alert("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center bg-[#0d0d0d] text-white">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[400px] bg-[#1a1a1a] p-8 rounded-2xl shadow-lg space-y-6 border border-[#2b2b2b]"
        >
          <h1 className="text-3xl font-bold text-center">Text App</h1>
          <h2 className="text-xl font-semibold text-center">Login</h2>

          {/* email */}
          <label className="flex items-center gap-3 p-3 bg-[#111] border border-[#333] rounded-xl">
            <svg className="h-[1.2em] opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>

            <input
              type="email"
              placeholder="mail@site.com"
              className="w-full bg-transparent outline-none text-white"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && <p className="text-red-400 text-sm -mt-4">Email is required</p>}

          {/* password */}
          <label className="flex items-center gap-3 p-3 bg-[#111] border border-[#333] rounded-xl">
            <svg className="h-[1.2em] opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent outline-none text-white"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && <p className="text-red-400 text-sm -mt-4">Password is required</p>}

          {/* footer */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-300 cursor-pointer">
              New User?{" "}
              {/* LINK COMPONENT */}
              <Link to="/signup" className="text-blue-400">
                Signup
              </Link>
            </p>

            <input
              type="submit"
              value="Login"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl cursor-pointer shadow-md transition-all"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;