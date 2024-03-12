"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Compose from "./Compose";

const SignIn = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="w-screen">
        <div className="my-3">
          <div className="font-bold w-[100%] flex justify-around items-center md:gap-5 py-2">
            <div>
              <Image
                src={session?.user?.image}
                width={50}
                height={50}
                alt="Picture of the author"
                className="rounded-full"
              />
            </div>
            <h1 className="md:text-3xl tracking-tight">
              {session.user.name}
              <span> &#183; </span>({session.user.email})
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
        <Compose />
      </div>
    );
  }

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
