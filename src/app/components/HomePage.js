"use client";
import { useSession } from "next-auth/react";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const HomePage = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return <SignOut props={session} />;
  }
  return <SignIn />;
};

export default HomePage;
