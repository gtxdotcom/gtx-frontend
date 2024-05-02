"use client";
import * as React from "react";
import ReactCountryFlagsSelect from "react-country-flags-select";
import localFont from "next/font/local";
import Link from "next/link";

const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });

export default function Residence() {
  const [selected, setSelected] = React.useState<any>(null);

  React.useEffect(() => {
    setSelected({ countryCode: "GH", label: "Ghana" });
  }, []);

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
        <h4 className=" text-2xl font-extrabold">
          Select country or region of residence
        </h4>
        <p className=" text-sm py-4  text-[#6978A0]">
          Ensure your residency matches the one on your ID or proof of address
          for account verification. To change it after confirmation, extra steps
          will be required.
        </p>
        <div className="text-xs font-semibold py-3">
          Country or Region of Residence
        </div>
        <ReactCountryFlagsSelect
          selected={selected}
          onSelect={setSelected}
          fullWidth
          searchable
        />
        <div className="my-5"></div>
        <button
          type="submit"
          className="px-3 py-2 w-full rounded-xl bg-black text-white "
        >
          Next
        </button>
      </div>
    </div>
  );
}
