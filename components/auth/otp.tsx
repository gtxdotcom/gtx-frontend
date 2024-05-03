"use client";
import { useEffect, useRef, RefObject } from "react";
import localFont from "next/font/local";
import Link from "next/link";

const microsoft = localFont({ src: "../../public/fonts/chinese.msyh.ttf" });

const OTPField = () => {
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    inputsRef.current[0].focus();
    buttonRef.current?.setAttribute("disabled", "disabled");

    inputsRef.current.forEach((input, index1) => {
      input.addEventListener("keyup", (e: KeyboardEvent) => {
        const currentInput = input;
        const nextInput = input.nextElementSibling as HTMLInputElement;
        const prevInput = input.previousElementSibling as HTMLInputElement;

        if (currentInput.value.length > 1) {
          currentInput.value = "";
          return;
        }

        if (
          nextInput &&
          nextInput.hasAttribute("disabled") &&
          currentInput.value !== ""
        ) {
          nextInput.removeAttribute("disabled");
          nextInput.focus();
        }

        if (e.key === "Backspace") {
          inputsRef.current.forEach((input, index2) => {
            if (index1 <= index2 && prevInput) {
              input.setAttribute("disabled", "true");
              input.value = "";
              prevInput.focus();
            }
          });
        }

        buttonRef.current?.classList.remove("active");
        buttonRef.current?.setAttribute("disabled", "disabled");

        const inputsNo = inputsRef.current.length;
        if (
          !inputsRef.current[inputsNo - 1].disabled &&
          inputsRef.current[inputsNo - 1].value !== ""
        ) {
          buttonRef.current?.classList.add("active");
          buttonRef.current?.removeAttribute("disabled");
        }
      });
    });

    inputsRef.current[0].addEventListener(
      "paste",
      function (event: ClipboardEvent) {
        event.preventDefault();

        // const pastedValue = (
        //   event.clipboardData || window.clipboardData
        // ).getData("text");

        const pastedValue = event.clipboardData?.getData("text");
        const otpLength = inputsRef.current.length;

        for (let i = 0; i < otpLength; i++) {
          if (pastedValue && i < pastedValue.length) {
            inputsRef.current[i].value = pastedValue[i];
            inputsRef.current[i].removeAttribute("disabled");
            inputsRef.current[i].focus;
          } else {
            inputsRef.current[i].value = ""; // Clear any remaining inputs
            inputsRef.current[i].focus;
          }
        }
      }
    );
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
      <div className="bg-white text-black text-center px-6 pt-[30px] lg:pt-[90px] flex flex-col flex-grow items-center">
        <div className="row justify-content-center">
          <div
            className="col-12 col-md-6 col-lg-4"
            style={{ minWidth: "500px" }}
          >
            <div
              className="card bg-white mb-5 mt-5 border-0"
              style={{ boxShadow: "0 12px 15px rgba(0, 0, 0, 0.02)" }}
            >
              <div className="card-body p-5 text-center">
                <h4 className=" text-2xl font-medium">One Time Password</h4>
                <p className=" text-sm py-4  text-[#6978A0]">
                  Enter the One Time Password sent to your phone
                </p>

                <div className="otp-field mb-7">
                  {Array(6)
                    .fill(null)
                    .map((_, i) => (
                      <input
                        key={i}
                        type="number"
                        disabled={i !== 0}
                        ref={(el: HTMLInputElement) =>
                          (inputsRef.current[i] = el)
                        }
                      />
                    ))}
                </div>

                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-xl bg-[#929292] text-white w-80"
                >
                  Next
                </button>
                <div className="py-8 text-xs font-light">
                  Didn't receive anything? &nbsp;
                  <span className=" font-bold">
                    <button className=" font-semibold"> Resend code</button>
                  </span>
                  &nbsp; or&nbsp;
                  <span className=" font-bold">
                    <button className=" font-semibold"> call me instead</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPField;
