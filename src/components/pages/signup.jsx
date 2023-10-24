/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { supabase } from "../../../supabase";
import { toast } from "sonner";

const Signup = ({ currentMode, setCurrentPage, setUser }) => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setDetails({ ...details, email: newEmail });
  };
  const handlePassword = (e) => {
    const newPassword = e.target.value;
    setDetails({ ...details, password: newPassword });
  };


  const signUp = async (e) => {
    e.preventDefault();
    if (!details.password || !details.email) {
      toast.error("Input Email & Password");
    } else {
      toast.loading('Signing Up');
      try {
        const { data, error } = await supabase.auth.signUp({
          email: details.email,
          password: details.password,
        });

        if (error) {
          toast.error("Error signing up:" + error.message);
        } else {
          toast.success("User signed up");
          setUser(data)
          setCurrentPage("main");
        }
      } catch (error) {
        toast.error("Error signing up:", error);
      }
    }
  };

  return (
    <div
      className={`rounded-[5px] transition-all w-full ss:w-[520px] flex justify-center items-center flex-col h-auto font-josefin py-16 px-5 ss:px-10 ${currentMode.background} ${currentMode.text} shadow-lg`}
    >
      <div className="w-full text-center mb-5">
        <h2 className="font-semibold text-[24px]">Welcome to <span className="font-bold font-sans">T O D O </span></h2>
        <p>Please create an account</p>
      </div>
      <form
        onSubmit={signUp}
        className="flex flex-col items-center w-full gap-5"
      >
        <div
          className={`w-full flex items-center gap-3 ${currentMode.border} h-auto border rounded-[5px] py-2 px-4`}
        >
          <i className={`fa-solid fa-user ${currentMode.text}`}></i>
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent w-full"
            onChange={handleEmail}
            value={details.email}
          />
        </div>
        <div
          className={`w-full flex items-center gap-3 ${currentMode.border} h-auto border rounded-[5px] py-2 px-4`}
        >
          <i className={`fa-solid fa-lock ${currentMode.text}`}></i>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-transparent w-full"
            onChange={handlePassword}
            value={details.password}
          />
        </div>
        <div className="flex w-full gap-2 justify-start px-4 items-center">
          <input
            type="checkbox"
            id="showPasswordCheckbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="showPasswordCheckbox">Show Password</label>
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
