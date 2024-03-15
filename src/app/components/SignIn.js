"use client";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center font-bold">
        <h1 className="text-4xl text-center md:text-8xl md:tracking-[-5px]">
          <span className="text-red-900">@</span>mail broadcast
        </h1>
        <div className="w-[200px] my-2 mx-auto border-[1px] border-[#141414]"></div>
        <h3 className="text-2xl text-center font-normal">
          Only <span className="text-yellow-500 font-bold">Gmail</span> Service
          Available Now Other Service Available Soon...
        </h3>
        <button
          className="text-1xl border-2 border-[#141414] px-6 py-2 my-2 rounded-md"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
