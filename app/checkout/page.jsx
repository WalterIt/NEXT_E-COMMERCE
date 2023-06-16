"use client";
import Header from "@components/Client/Header";
import { useState } from "react";
import { CartContextProvider } from "@components/context/CartContext";
import CheckoutSteps from "@components/checkout/CheckoutSteps";
import Checkout from "@components/checkout/Checkout";
import "@styles/styles.css";
import Cart from "@components/Client/Cart";

const CheckoutPage = () => {
  const [openCart, setOpenCart] = useState(false);
  const [ifCartState, setIfCartState] = useState(false);

  const onCartToggle = () => {
    setOpenCart(!openCart);
    setIfCartState(!ifCartState);
  };
  return (
    <CartContextProvider>
      {/* <main className=" w-full flex flex-col h-auto bg-[#F6F6F5] "> */}

      <Header onCartToggle={onCartToggle} />
      <Cart onCartToggle={onCartToggle} ifCartState={ifCartState} />
      <div>
        <CheckoutSteps active={1} />

        <Checkout />
      </div>
      {/* </main> */}
    </CartContextProvider>
  );
};

export default CheckoutPage;
