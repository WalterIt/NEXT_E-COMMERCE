"use client";
import Nav from "@components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

const AdminLayout = ({ children }) => {
  const { data: session } = useSession();

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
    <div className="bg_blue_gradient  min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow my-2 mr-2 rounded-lg p-4 ">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
