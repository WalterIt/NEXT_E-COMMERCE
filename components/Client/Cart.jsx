import { CartContext } from "@components/context/CartContext";
import CartCount from "../cart/CartCount";
import CartEmpty from "../cart/CartEmpty";
import CartItem from "../cart/CartItem";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import "@styles/styles.css";

const Cart = ({ onCartToggle, ifCartState }) => {
  const { cartProducts, totalPrice } = useContext(CartContext);
  const [confirm, setConfirm] = useState(false);

  const onSubmitOrder = () => {
    // dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    // setConfirm(true);
  };
  const onClearCartItems = () => {
    //
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250]  ${
        ifCartState
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible translate-x-8"
      } `}
    >
      <div
        className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0 `}
      >
        <CartCount onCartToggle={onCartToggle} setConfirm={setConfirm} />
        {/* {confirm && (
          <h1 className="text-center text-3xl font-semibold text-blue-800 pt-16">
            Thank you for your order!
          </h1>
        )} */}

        {!cartProducts.length ? (
          <CartEmpty onCartToggle={onCartToggle} setConfirm={setConfirm} />
        ) : (
          <div>
            <div className=" flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[95vh] scroll-smooth scroll-style pt-3 pb-32 ">
              {cartProducts?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>
            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-lg rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                  {totalPrice}
                </h1>
              </div>
              <div className="grid items-center gap-2">
                <p className="text-sm font-medium text-center">
                  Taxes and Shipping Will Calculate At Shipping
                </p>
                <Link
                  href="/checkout"
                  type="button"
                  className="button-theme bg-theme-cart text-white text-center tracking-widest hover:scale-105 hover:font-semibold"
                  // disabled={!totalItems}
                  onClick={onSubmitOrder}
                >
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
