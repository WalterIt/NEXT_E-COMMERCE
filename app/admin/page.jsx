"use client";
import { useSession, signIn, signOut } from "next-auth/react";

const AdminPage = () => {
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

  return <div>Logged in as {session.user.email}</div>;
};

export default AdminPage;
