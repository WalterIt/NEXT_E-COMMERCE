"use client";
import Cart from "@components/Client/Cart";
import Featured from "@components/Client/Featured";
import FeaturedProduct from "@components/Client/FeaturedProduct";
import Header from "@components/Client/Header";
import { CartContextProvider } from "@components/context/CartContext";
import { useEffect, useState } from "react";
import "@styles/styles.css";

export default function Home() {
  const [product, setProduct] = useState("");
  const [openCart, setOpenCart] = useState(false);
  const [ifCartState, setIfCartState] = useState(false);

  const onCartToggle = () => {
    setOpenCart(!openCart);
    setIfCartState(!ifCartState);
  };

  console.log(ifCartState);

  const getProduct = async () => {
    const res = await fetch("/api/products/6477a27e2b851264dede9bb2");
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <CartContextProvider>
      <main className=" w-full flex flex-col h-auto bg-[#F6F6F5] ">
        <Header onCartToggle={onCartToggle} />
        <Cart onCartToggle={onCartToggle} ifCartState={ifCartState} />
        <Featured product={product} />
        <FeaturedProduct />
      </main>
    </CartContextProvider>
  );
}
