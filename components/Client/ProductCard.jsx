import React, { useContext, useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { useEffect } from "react";
import { CartContext } from "@components/context/CartContext";

const ProductCard = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  return (
    <div className="w-full h-[330px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
      <div className="flex justify-end"></div>
      {/* <Link
          to={`${
            isEvent === true
              ? `/product/${product._id}?isEvent=true`
              : `/product/${product._id}`
          }`}
        > */}
      <img
        src={`${product.images && product.images[0]}`}
        alt=""
        className="w-full h-[170px] object-contain"
        loading="lazy"
      />
      {/* </Link> */}
      {/* <Link to={`/shop/preview/${product?.shop._id}`}>
          <h5 className={`${styles.shop_name}`}>{product.shop.title}</h5>
        </Link> */}
      {/* <Link
          to={`${
            isEvent === true
              ? `/product/${product._id}?isEvent=true`
              : `/product/${product._id}`
          }`}
        > */}
      <h4 className="py-4 font-[600]">
        {product.title.length > 40
          ? product.title.slice(0, 40) + "..."
          : product.title}
      </h4>

      <div className="flex">{/* <Ratings rating={product?.ratings} /> */}</div>

      <div className="py-2 flex items-center justify-between">
        <div className="flex">
          <h5 className="font-bold text-[20px] text-[#333] ff">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </h5>
        </div>
        {/* <span className="font-[400] text-[17px] text-[#68d284]">99 sold</span> */}
      </div>
      {/* </Link> */}

      {/* side options */}
      <div className=" ">
        {/* {click ? (
          <AiFillHeart
            size={22}
            className="cursor-pointer absolute right-2 top-5"
            //   onClick={() => removeFromWishlistHandler(product)}
            color={click ? "red" : "#333"}
            title="Remove from wishlist"
          />
        ) : ( */}
        <AiOutlineHeart
          size={22}
          className="cursor-pointer  absolute right-2 top-5 "
          //   onClick={() => addToWishlistHandler(product)}
          color={"#333"}
          //   color={click ? "red" : "#333"}
          title="Add to wishlist"
        />
        {/* )} */}
        <AiOutlineEye
          size={22}
          className="cursor-pointer  absolute right-2 top-14"
          // onClick={() => setOpen(!open)}
          color="#333"
          title="Quick view"
        />
        <AiOutlineShoppingCart
          size={25}
          className="cursor-pointer  absolute right-2 top-24"
          onClick={() => addProduct(product)}
          color="#444"
          title="Add to cart"
        />
        {/* {open ? <ProductDetailsCard setOpen={setOpen} product={product} /> : null} */}
      </div>
    </div>
  );
};

export default ProductCard;
