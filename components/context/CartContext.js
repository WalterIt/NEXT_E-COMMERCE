"use client";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (cartProducts?.length) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  const addProduct = (product) => {
    const itemExists = cartProducts.find((item) => item._id === product._id);
    const quantity = itemExists ? itemExists.quantity + 1 : 1;
    const updatedCart = itemExists
      ? cartProducts.map((item) =>
          item._id === product._id ? { ...item, quantity } : item
        )
      : [...cartProducts, { ...product, quantity }];
    setCartProducts(updatedCart);
  };

  const subtractProduct = (product) => {
    const itemExists = cartProducts.find((item) => item._id === product._id);
    if (!itemExists) return;
    const quantity = itemExists.quantity - 1;
    const updatedCart =
      quantity > 0
        ? cartProducts.map((item) =>
            item._id === product._id ? { ...item, quantity } : item
          )
        : cartProducts.filter((item) => item._id !== product._id);
    setCartProducts(updatedCart);
  };

  const removeProduct = (product) => {
    const updatedCart = cartProducts.filter((item) => item._id !== product._id);
    setCartProducts(updatedCart);
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  const totalPrice = cartProducts.reduce((previousValue, CartItem) => {
    return previousValue + CartItem.quantity * +CartItem.price;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProduct,
        subtractProduct,
        removeProduct,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
