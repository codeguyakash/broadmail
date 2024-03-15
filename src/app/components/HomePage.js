"use client";
import { useSession } from "next-auth/react";
import SignInPage from "./SignInPage";
import SignOutPage from "./SignOutPage";

const HomePage = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return <SignOutPage props={session} />;
  }
  return <SignInPage />;
};

export default HomePage;
