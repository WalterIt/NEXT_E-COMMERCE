import { CartContext } from "@components/context/CartContext";
import Link from "next/link";
import { useContext } from "react";

const Header = ({ onCartToggle }) => {
  const { cartProducts } = useContext(CartContext);

  return (
    <header className="bg-[#222] w-full px-10 py-8 h-10 items-center flex font-Roboto fixed top-0 left-0 right-0  z-50 ">
      <div className="flex w-full p-0 justify-between ">
        <Link href="/" className="text-white">
          Ecommerce
        </Link>

        <nav className="flex text-gray-100 gap-4 ">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/account">Account</Link>
          <button type="button" onClick={onCartToggle}>
            Cart (
            {cartProducts?.reduce((total, item) => total + item.quantity, 0)})
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
