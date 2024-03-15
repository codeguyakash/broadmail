"use client";
import { signIn } from "next-auth/react";
import { SiGmail } from "react-icons/si";
import Footer from "./Footer";
const SignInPage = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-around mt-10">
        <div className="text-center font-bold">
          <div className="flex items-center justify-center">
            <SiGmail className="size-[40px] md:size-[100px]" />
            <h1 className="text-4xl text-center md:text-8xl md:tracking-[-5px]">
              -BROADMAIL
            </h1>
          </div>
          <div className="w-[200px] my-2 mx-auto border-[1px] border-[#141414]"></div>
          <h3 className="text-[18px] text-center font-light">
            Only <span className="text-yellow-500 font-bold">Gmail</span>{" "}
            Service Available Now, Other Service Available Soon...
          </h3>
          <div className="relative flex place-items-center before:absolute before:h-[500px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[280px] after:w-full sm:after:w-[300px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-3]"></div>
          <button
            className="text-1xl border-2 border-[#141414] px-6 py-2 my-2 rounded-md"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default SignInPage;
