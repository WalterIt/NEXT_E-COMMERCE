import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#222] w-full px-10 py-8 h-10 items-center flex font-Roboto ">
      <div className="flex w-full p-0 justify-between ">
        <Link href="/" className="text-white">
          Ecommerce
        </Link>

        <nav className="flex text-gray-100 gap-4 ">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/account">Account</Link>
          <Link href="/cart">Cart (0)</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
