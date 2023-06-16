import Image from "next/image";
import emptybag from "../../assets/emptybag.png";

const CartEmpty = ({ onCartToggle, setConfirm }) => {
  return (
    <div className="flex items-center justify-center flex-col h-screen px-11 text-center gap-7 ">
      <Image
        src={emptybag}
        alt="empty bag"
        sizes={200}
        className="w-[200px] lg:w-[200px] sm:w-[200px] h-auto object-fill transition-all duration-300 hover:scale-110 "
      />
      <button
        type="button"
        className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold hover:scale-110 "
        onClick={() => {
          onCartToggle();
          setConfirm(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-slate-900"
        >
          <path
            fillRule="evenodd"
            d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="">Back to Nike Store</span>
      </button>
    </div>
  );
};

export default CartEmpty;
