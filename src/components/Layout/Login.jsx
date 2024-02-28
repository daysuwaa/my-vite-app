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
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
          Chevron
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#834CFC] focus:border-[#834CFC] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#834CFC] focus:border-[#834CFC] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#834CFC] dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#834CFC] dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="https://dashboard.squadco.com/reset-password-request"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-sm font-medium text-[#834CFC] hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#834CFC] hover:bg-[#42257E] focus:ring-4 focus:outline-none focus:ring-[#834CFC] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#834CFC] dark:hover:bg-[#42257E]"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="https://dashboard.squadco.com/sign-up"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="font-medium text-[#834CFC] hover:underline"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
