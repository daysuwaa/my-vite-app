import React, { useState } from "react";
import Logo from "../../assets/chevron logo.png";
import { useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Email validation regex
    const emailRegex = /\S+@\S+\.\S+/;

    // Check if email is valid and password is at least 6 characters long
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
    } else if (password.length < 6) {
      toast.error("Password should be at least 6 characters long!");
    } else {
      // Navigate to dashboard if both email and password are valid
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#1C065A]">
      <div className="text-black bg-white rounded w-[80%] md:w-[50%] xl:w-[40%] text-center">
        <img src={Logo} alt="logo" className="w-20 h-20 flex  mx-auto mt-4" />
        <h1 className="my-[2rem] font-semibold text-[24px]">
          Log in to your account
        </h1>
        <form className="m " onSubmit={handleLogin}>
          <div className="flex items-center justify-center mx-auto ">
            <div className="flex items-center border-2 w-[70%] rounded h-10 border-[#1C065A] focus-within:outline  outline-1 outline-[#1C065A] ">
              <MdOutlineMail className="text-[#1C065A] mx-2 h-6 w-6" />
              <input
                className="font-normal outline-none text-[#718096] text-[16px] "
                type="text"
                id="loginemail"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className=" my-[2rem] flex items-center justify-center mx-auto ">
            <div className="flex items-center border-2 w-[70%] rounded h-10 border-[#1C065A] focus-within:outline  outline-1 outline-[#1C065A] ">
              <RiLockPasswordLine className="text-[#1C065A] mx-2 h-6 w-6" />
              <input
                className="font-normal border-b  outline-none text-[#718096] text-[16px]"
                type="password"
                id="loginpassword"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-red-600 w-[70%] h-10 mt-[1rem] mb-[2rem] rounded font-semibold"
          >
            Login
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
