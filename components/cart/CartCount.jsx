import { CartContext } from "@components/context/CartContext";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";

const CartCount = ({ onCartToggle, setConfirm }) => {
  const { cartProducts, clearCart } = useContext(CartContext);

  return (
    <div className="bg-white h-11 flex items-center  justify-between px-3 sticky top-0 left-0 right-0 w-full">
      <div className="flex items-center gap-3 ">
        <div
          className="grid items-center cursor-pointer text-slate-900 hover:text-orange-500 stroke-[2]"
          onClick={onCartToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className=" grid items-center ">
          <h1 className="text-base font-medium text-slate-900  ">
            Your Cart:{" "}
            <span className="bg-theme-cart font-normal text-sm rounded px-1 py-0.5 text-slate-100 ">
              {/* ({cartProducts.length} Items) */}(
              {cartProducts?.reduce((total, item) => total + item.quantity, 0)}{" "}
              Items)
            </span>
          </h1>
        </div>
      </div>
      <div className="flex justify-between  items-center ">
        <button
          type="button"
          className="rounded bg-theme-cart flex justify-between items-center active:scale-90 p-0.5 text-white text-xs  hover:text-orange-500"
          onClick={clearCart}
        >
          <XMarkIcon className="w-5 h-5 text-white stroke-[2] hover:text-orange-500" />
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartCount;
