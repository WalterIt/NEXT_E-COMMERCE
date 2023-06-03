"use client";
import Nav from "@components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import Logo from "./Logo";

const AdminLayout = ({ children }) => {
  const { data: session } = useSession();
  const [showNav, setShowNav] = useState(false);

  if (!session) {
    return (
      <main className="bg_blue_gradient w-screen h-screen flex items-center">
        <div className="w-full text-center">
          <button
            className="bg-white p-2 rounded-lg px-4"
            onClick={() => signIn("google")}
          >
            Login with Google
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className="bg_blue_gradient  min-h-screen">
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setShowNav(!showNav)}
          className="p-1 pl-4 text-white hover:scale-110 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="flex grow justify-center mr-10 text-white font-semibold">
          <Logo />
        </div>
      </div>
      <div className=" flex">
        <Nav show={showNav} />
        <div className="bg-white flex-grow my-2 mr-2 rounded-lg p-4 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
