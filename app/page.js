"use client";
import Featured from "@components/Client/Featured";
import Header from "@components/Client/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [product, setProduct] = useState("");

  const getProduct = async () => {
    const res = await fetch("/api/products/6477a27e2b851264dede9bb2");
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <main className=" w-full flex flex-col h-[100vh] bg-[#F6F6F5] ">
      <Header />
      <Featured product={product} />
    </main>
  );
}
