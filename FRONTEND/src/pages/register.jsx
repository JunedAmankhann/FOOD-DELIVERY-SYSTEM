import React, { useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }
    try {
      await axios.post(
        "http://localhost:8080/api/users/register",
        {
          name,
          email,
          password,
        }
      );

      toast.success("Registration Successful");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }catch (error) {
      toast.error("Registration Failed");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-zinc-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

        <div className="flex flex-col items-center mb-6">
          <GiKnifeFork size={60} className="text-green-600" />

          <h1 className="text-4xl font-extrabold mt-2">
            <span className="text-green-600">Tasty</span>
            <span className="text-orange-500">Bites</span>
          </h1>

          <p className="text-gray-500 mt-2">
            Create Your Account 
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg outline-none focus:border-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg outline-none focus:border-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 border rounded-lg outline-none focus:border-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;