"use client";

import React, { useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import PasswordStrengthBar from "react-password-strength-bar";

const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  return (
    <div className="lg:grid lg:grid-cols-2 h-[calc(100vh-70px)] flex flex-col">
      <div
        className={` ${microsoft.className} bg-white text-black lg:bg-black lg:text-white pt-10 lg:pt-20 px-6`}
      >
        <h1 className="text-[24px]/[30px] xl:text-3xl/[42.24px] font-bold text-center">
          Trade securely and with peace of mind.
        </h1>
        <p className="text-[0.8rem] py-4">
          "We maintain a constant 1:1 backing of your funds on GTX, and we
          routinely release Proof of Reserve audits to ensure transparency and
          accountability."
        </p>
      </div>
      <div className="bg-white text-black text-center px-[16%] pt-[30px] lg:pt-[90px] flex flex-col flex-grow">
        <h4 className=" text-2xl font-extrabold">Create a password</h4>
        <div className="my-4"></div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="border border-black rounded-[7px] h-[50px] px-5 w-full"
        />
        <div className="text-xs py-3 text-[#6978A0]">
          Min 8 Characters with a combination of letters, numbers and special
          characters.
        </div>
        <PasswordStrengthBar password={password} />

        <div className="my-3"></div>
        <button
          type="submit"
          className="px-3 py-2 w-full rounded-xl bg-black text-white "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CreatePassword;
