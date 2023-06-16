import { CartContext } from "@components/context/CartContext";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";

const CartItem = ({
  item,
  item: { description, price, title, images, quantity },
}) => {
  const { addProduct, subtractProduct, removeProduct } =
    useContext(CartContext);

  //   const cartPrice = quantity * +price;

  const onRemoveItem = () => {
    // dispatch({
    //   type: REDUCER_ACTIONS.REMOVE,
    //   payload: item,
    // });
  };

  const onIncreaseItemQty = () => {
    // dispatch({
    //   type: REDUCER_ACTIONS.ADD,
    //   payload: { ...item, quantity: 1 },
    // });
  };

  const onDecreaseItemQty = () => {
    // dispatch({
    //   type: REDUCER_ACTIONS.SUBTRACT,
    //   payload: { ...item, quantity: 1 },
    // });
    // if (quantity < 1) {
    //   onRemoveItem();
    // }
  };

  return (
    <div className="flex items-center justify-between w-full px-5">
      <div className="flex items-center gap-5">
        <div
          className={`bg-gray-100  relative rounded p-3 hover:scale-105 transition-all duration-700 ease-in-out grid  items-center`}
        >
          <img
            src={images[0]}
            alt={title}
            className="w-36 h-auto object-fill "
          />
          <div className="absolute right-2.5 top-3 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded">
            ${price}
          </div>
        </div>
        <div className="grid items-center gap-4">
          <div className="grid items-center leading-none">
            <h1 className="w-[25vw] font-medium text-lg text-slate-900 lg:text-sm ">
              {title}
            </h1>
            {/* <p className="text-sm text-slate-800 lg:text-xs ">{description}</p> */}
          </div>
          <div className="flex items-center justify-center gap-5 w-full">
            <button
              type="button"
              className="bg-theme-cart   rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center hover:scale-90 "
              onClick={() => subtractProduct(item)}
            >
              <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2] " />
            </button>
            <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:w-6 lg:h-5   flex items-center justify-center ">
              {quantity}
            </div>
            <button
              type="button"
              className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center hover:scale-90 "
              onClick={() => addProduct(item)}
            >
              <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2] " />
            </button>
          </div>
        </div>
      </div>
      <div className="grid items-center gap-5">
        <div className="grid items-center justify-center">
          <h1 className="text-lg  lg:text-base text-slate-900 font-medium ">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price * quantity)}
          </h1>
        </div>
        <div className="grid items-center justify-center">
          <button
            type="button"
            className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center hover:scale-110"
            onClick={() => removeProduct(item)}
          >
            <TrashIcon className="w-5 h-5 text-white hover:text-orange-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
