/* eslint-disable react/prop-types */
import React from "react";

const Signup = ({ currentMode, setCurrentPage }) => {
  return (
    <div
      className={`rounded-[15px] transition-all w-full ss:w-[520px] flex justify-center items-center flex-col h-auto font-josefin py-12 px-5 ss:px-10 ${currentMode.background} ${currentMode.text} shadow-lg`}
    >
      <div className="w-full text-center mb-5">
        <h2 className="font-semibold text-[20px]">Welcome</h2>
        <p>Please create an account</p>
        <div
          className={`mt-10 flex gap-2 cursor-pointer items-center rounded-[5px] w-auto justify-center p-2 ${currentMode.body}`}
        >
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="google-logo"
          />
          <h3>Sign up with Google</h3>
        </div>
      </div>
      <form className="flex flex-col items-center w-full gap-5">
        <h1>OR</h1>
        <div
          className={`w-full flex items-center gap-3 ${currentMode.border} h-auto border rounded-[5px] py-2 px-4`}
        >
          <i className={`fa-solid fa-user ${currentMode.text}`}></i>
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent w-full"
          />
        </div>
        <div
          className={`w-full flex items-center gap-3 ${currentMode.border} h-auto border rounded-[5px] py-2 px-4`}
        >
          <i className={`fa-solid fa-lock ${currentMode.text}`}></i>
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent w-full"
          />
        </div>
        <button
          className={`p-2 w-full flex items-center justify-center ${currentMode.body} rounded-[5px] mt-5`}
        >
          Create Account
        </button>
        <div className="flex ss:gap-2 flex-col ss:flex-row text-center">
          <p>Already have an account?</p>
          <h3
          onClick={() => setCurrentPage("login")}
            className={`${currentMode.active} font-semibold cursor-pointer underline`}
          >
            Log In{" "}
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Signup;
