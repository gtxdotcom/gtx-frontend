"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-number-input";
import localFont from "next/font/local";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";

import { AuthContext } from "@/context/AddContext";

import "react-phone-number-input/style.css";

const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });

const Login = () => {
  const appContext = useContext(AuthContext);
  useEffect(() => {
    appContext.setNavbarState(0);
  }, []);

  const [clicked, setClicked] = useState(false);
  const [password, setPassword] = useState<string | number>("");
  const [value, setValue] = useState<any>();
  const [show, setShow] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setClicked(true);
  };

  return (
    <div className="lg:grid lg:grid-cols-2 h-[calc(100vh-70px)] flex flex-col">
      <div
        className={` ${microsoft.className} bg-white text-black lg:bg-black lg:text-white pt-10 lg:pt-20 px-6 flex-grow`}
      >
        <h1 className="text-[24px]/[30px] xl:text-3xl/[42.24px] font-bold text-center">
          Trade securely and with peace of mind.
        </h1>
        <p className="text-[12px]/[14px] xl:text-[15px]/[20px] text-center mt-3 xl:mt-0">
          "We maintain a constant 1:1 backing of your funds on GTX, and we routinely release Proof of Reserve audits to
          ensure transparency and accountability."
        </p>
      </div>
      <div className="bg-white text-black text-center px-6 pt-[30px] lg:pt-[90px] flex flex-col">
        <h1 className=" text-[40px]/[60px] text-[#081131]">Log In</h1>
        <div className=" text-[20px]/[30px] text-[#6978A0]">Welcome back, you’ve been missed!</div>
        <form onSubmit={handleSubmit} className="flex flex-col mx-auto mt-[30px] w-2/3">
          <div className="flex flex-col items-start">
            <label htmlFor="phone" className="text-[14px]/[21px] font-medium text-[#191919]">
              Phone Number &nbsp; <span className="text-[#909090]">Email Address</span>
            </label>
            <PhoneInput
              international
              className="PhoneInput rounded-[4px]  border border-black h-[50px] px-5 py-4 mt-[10px]  w-full tracking-[0.5px] leading-[50px] focus-visible:outline-none text-[14px]/[21px]"
              defaultCountry="GH"
              name="phone"
              value={value}
              onChange={setValue}
            />
          </div>
          <div className="flex flex-col items-start mt-[10px]">
            <label htmlFor="phone" className="text-[14px]/[21px] font-medium text-[#191919]">
              Password
            </label>{" "}
            <div className=" relative w-full">
              <input
                type={`${show ? " text" : "password"}`}
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="border border-black rounded-[4px] mt-[10px] h-[50px] px-5 py-4 w-full"
              ></input>
              {!show ? (
                <PiEyeLight
                  className="absolute right-3 z-[1000] top-[40%] w-5 h-5 text-[#b0b7c3]"
                  onClick={() => setShow(!show)}
                ></PiEyeLight>
              ) : (
                <PiEyeSlash
                  className="absolute right-3 z-[1000] top-[40%] w-5 h-5 text-[#b0b7c3]"
                  onClick={() => setShow(!show)}
                ></PiEyeSlash>
              )}
            </div>
          </div>
          {clicked ? (
            <button className="px-3 py-1.5 bg-blue-700 text-white flex items-center justify-center mt-[35px]">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>{" "}
            </button>
          ) : (
            <button
              type="submit"
              className="px-2 bg-[#121212] rounded-[12px] py-4 text-base/[24px] text-white mt-[35px] font-bold"
            >
              Sign In
            </button>
          )}
        </form>
        <div className="mt-[68px] text-xs font-light">
          Don’t have an account? &nbsp;
          <span className=" font-bold">
            <Link href="/signup"> Sign Up</Link>
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 text-[#6E6E6E] text-center">
          <hr className=" w-40" /> <span className=" text-[#6E6E6E] text-xs">or continue with</span>
          <hr className=" w-40" />
        </div>

        <div className="py-5 flex flex-row gap-8 items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-3 text-xs border px-5 py-3 rounded-md">
            <FcGoogle size={20} />
            <p>Google</p>
          </div>
          <div className="flex flex-row gap-3 items-center justify-center text-xs border px-5 py-3 rounded-md">
            <FaApple size={20} />
            <p>Apple</p>
          </div>
        </div>

        <div className="relative text-xs text-[#6E6E6E] mt-[80px] lg:mt-[100px] mb-[20px]">
          <div className=" bottom-8">
            By creating an account, I agree to GTX{" "}
            <span className=" text-black font-bold">
              <a href="/terms"> terms of service</a>
            </span>{" "}
            and{" "}
            <span className="text-black font-bold">
              <a href="/privacy">privacy policy</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
