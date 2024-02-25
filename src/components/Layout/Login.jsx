import React, { useState } from "react";
import Logo from "../../assets/chevron logo.png";
import { useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

const TextInput = ({
  value,
  setValue = () => {},
  type = "text",
  placeholder,
  iconJsx,
}) => {
  return (
    <label className="flex items-center justify-center [&>svg]:h-4 [&>svg]:w-4 [&>svg]:mb-2 mx-auto w-full border border-none">
      {iconJsx}
      <input
        className="font-normal text-white border-b focus:border-[#834CFC] outline-none w-full px-6 pb-2 -ml-4 h-full bg-transparent "
        type={type}
        placeholder={placeholder}
        value={value}
        required
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
};

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
    <div className="grid place-items-center h-screen bg-white">
      <div className="text-white bg-[#22085C] rounded-lg max-w-96 w-full text-center p-8 shadow- lg">
        <img
          src={Logo}
          alt="logo"
          className="w-16 h-16 mx-auto mt-4 hue-rotate-60"
        />
        <h1 className="mt-2 mb-12 font-semibold">Log In</h1>
        <form className="grid gap-6" onSubmit={handleLogin}>
          <TextInput
            placeholder="Email"
            value={email}
            setValue={setEmail}
            iconJsx={<MdOutlineMail />}
          />
          <TextInput
            type="password"
            placeholder="Password"
            value={password}
            setValue={setPassword}
            iconJsx={<RiLockPasswordLine />}
          />
          <button
            type="submit"
            className="bg-[#834CFC] text-white ml- 10 p-2 rounded font-semibold"
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
