"use client";
import Link from "next/link";

const Featured = ({ product: { _id, title, images, price, description } }) => {
  return (
    <section className="m-10 h-[60vh] p-8 rounded-lg bg-white grid grid-cols-2 800px:grid-cols-1  ff gap-10 ">
      <div className="grid items-center justify-center flex-col">
        <h1 className="text-3xl text-gray-700 font-bold">{title}</h1>
        <p className="line-clamp-5">{description}</p>
        <div className="flex gap-4">
          <Link
            href={`/products/${_id}`}
            className="bg-[#222] hover:bg-[#222222dd] text-white  py-2 px-4 rounded mt-4"
          >
            Read More
          </Link>
          <button className="bg-[#222] hover:bg-[#222222dd] text-white flex py-2 px-4 rounded mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="grid justify-center">
        <img src={images} alt="notebook" className="h-[250px] min-w-[250px] " />
      </div>
    </section>
  );
};

export default Featured;
