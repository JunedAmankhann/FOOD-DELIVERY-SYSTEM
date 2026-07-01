import React, { useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(!email||!password){
      toast.error("Please fill all fields");
      return;
    }
    if(!email.includes("@")||!email.includes(".")){
      toast.error("Enter a valid email");
      return;
    }
    try{
      const response=await axios.post("http://localhost:8080/api/users/login",{email,password,})
      console.log(response.data);
      if(response.data.email){
        localStorage.setItem("user",JSON.stringify(response.data))
        toast.success("Login successful")
        setTimeout(()=>{
          navigate("/")
        },1500)
      }else{
        toast.error(response.data)
      }
    }catch(error){
      toast.error("Something went wrong");
      console.log(error)
    }
  }
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-zinc-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        <div className="flex flex-col items-center mb-6">
          <GiKnifeFork size={60} className="text-green-600" />
            <h1 className="text-4xl font-extrabold mt-2">
              <span className="text-green-600">Tasty</span>
              <span className="text-orange-500">Bites</span>
            </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-semibold">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full mt-2 p-3 border rounded-lg outline-none focus:border-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="font-semibold">Password</label>
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg outline-none focus:border-green-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">{showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
            <button
              type="button"
              className="text-green-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Login
          </button>
        </form>
        <p className="text-center mt-5 text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-600 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;