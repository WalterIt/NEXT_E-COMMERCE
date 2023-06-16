"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data.slice(0, 10));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="w-11/12 mx-auto">
      <div className="text-[27px]  text-center md:text-start font-[600] ff pb-[20px]">
        <h1 className="!text-gray-700 ">NEW ARRIVALS</h1>
      </div>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
        {products && products.length !== 0 && (
          <>
            {products &&
              products.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProduct;
