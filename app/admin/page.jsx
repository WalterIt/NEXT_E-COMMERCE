"use client";
import AdminLayout from "@components/AdminLayout";
import { useSession } from "next-auth/react";
import Image from "next/image";

const AdminPage = () => {
  const { data: session } = useSession();

  return (
    <AdminLayout>
      <div className="text-blue-900 flex justify-between ">
        <h2 className="font-semibold text-2xl">Hello, {session?.user.name}!</h2>
        <div className="">
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPage;
