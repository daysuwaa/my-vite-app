import React, { useEffect, useState } from "react";
import Logo from "src/assets/logo.png";
import toast from "react-hot-toast";
import { loginAuth } from "./utils";
import { useLogin } from "src/api/queries/auth";
import { twMerge } from "tailwind-merge";
import Spinner from "src/components/Loaders/Spinner";

const TextInput = ({ setValue = () => {}, iconJsx, labelText, ...props }) => {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelText}
      </label>
      <input
        className={twMerge(
          "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus-visible:ring-accent1 focus-visible:border-accent1 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
          props.className
        )}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, status, error } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();

    // Email validation regex
    const emailRegex = /\S+@\S+\.\S+/;

    // Check if email is valid and password is at least 6 characters long
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!", { position: "bottom-center" });
    } else if (password.length < 6) {
      toast.error("Password should be at least 6 characters long!", { position: "bottom-center" });
    } else {
      loginAuth({ email, password }, mutate);
    }
  };

  useEffect(() => {
    if (status === "error")
      toast.error(error?.response?.data?.message ?? "An error occured", {
        position: "bottom-center"
      });
    if (status === "success") toast.success("Login Successful", { position: "bottom-center" });
  }, [error?.response?.data?.message, status]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
          Chevron
        </span>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in with Squad
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <TextInput
                labelText="Your email"
                setValue={setEmail}
                type="email"
                name="email"
                placeholder="name@company.com"
              />
              <TextInput
                labelText="Password"
                setValue={setPassword}
                type="password"
                name="password"
                placeholder="••••••••"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus-visible:ring-3 focus-visible:ring-accent1 dark:bg-gray-700 dark:border-gray-600 dark:focus-visible:ring-accent1 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="https://dashboard.squadco.com/reset-password-request"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-sm font-medium text-accent1 hover:underline"
                  rel="noreferrer"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="relative w-full text-white bg-accent1 hover:bg-[#42257E] focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-accent1 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-accent1 dark:hover:bg-[#42257E]"
              >
                {status === "loading" ? <Spinner className="m-auto" /> : "Sign in"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="https://dashboard.squadco.com/sign-up"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="font-medium text-accent1 hover:underline"
                  rel="noreferrer"
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
