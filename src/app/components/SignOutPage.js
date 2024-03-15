"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Compose from "./Compose";
import Model from "./Model";
import { useState } from "react";
import Footer from "./Footer";

const SignOutPage = ({ props }) => {
  const [showModel, setShowModel] = useState(true);
  return (
    <div className="w-screen ">
      <div className="">
        <div className="font-bold w-[100%] flex justify-around items-center md:gap-5 pt-2">
          <div>
            <Image
              src={props?.user?.image}
              width={50}
              height={50}
              alt="Picture of the author"
              className="rounded-full"
            />
          </div>
          <h1 className="md:text-3xl tracking-tight">
            {props.user.name}
            <span> &#183; </span>({props.user.email})
          </h1>
          <button
            className="text-1xl border-[1px] border-[#141414] md:px-6 md:py-2 my-1 rounded-md"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      </div>
      <div className="w-screen bg-green-500 mx-auto border-[1px] border-[#141414] my-4"></div>
      {showModel ? <Model setShowModel={setShowModel} /> : <Compose />}
      <Footer />
    </div>
  );
};

export default SignOutPage;
