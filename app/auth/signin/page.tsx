import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import SigninForm from "@/components/Auth/SigninForm";

export const metadata: Metadata = {
  title: "SignIn",
  description:
    "SignIn",
};

const SignIn: React.FC = () => {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-full xl:w-[500px] mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full border-stroke dark:border-strokedark xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-10">
              
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign In
              </h2>

              <SigninForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
