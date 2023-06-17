import React, { useContext, useState } from "react";
// import styles from "../../styles/styles";
import { Country, State } from "country-state-city";
import { useRouter } from "next/navigation";
// import { useSelector } from "react-redux";
import { useEffect } from "react";
import { CartContext } from "@components/context/CartContext";
import "@styles/styles.css";
// import styles from "@styles/styles";
// import axios from "axios";
// import { server } from "../../server";
// import { toast } from "react-toastify";

const Checkout = () => {
  const { totalPrice, cartProducts } = useContext(CartContext);
  //   const { user } = useSelector((state) => state.user);
  //   const { cart } = useSelector((state) => state.cart);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [userInfo, setUserInfo] = useState(false);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [couponCodeData, setCouponCodeData] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paymentSubmit = () => {
    if (
      username === "" ||
      email === "" ||
      phoneNumber === "" ||
      address1 === "" ||
      address2 === "" ||
      zipCode === null ||
      country === "" ||
      city === ""
    ) {
      alert("Please fill all the fields!");
    } else {
      const userInfo = {
        username,
        email,
        phoneNumber,
      };

      const shippingAddress = {
        address1,
        address2,
        zipCode,
        country,
        city,
      };

      const orderData = {
        cartProducts,
        finalPrice,
        subTotalPrice,
        shipping,
        // discountPrice,
        shippingAddress,
        userInfo,
      };

      // update local storage with the updated orders array
      localStorage.setItem("latestOrder", JSON.stringify(orderData));
      router.push("/payment");
    }
  };

  const subTotalPrice = totalPrice;

  const shipping = subTotalPrice * 0.1;

  const finalPrice = subTotalPrice + shipping;

  //   const subTotalPrice = cart.reduce(
  //     (acc, item) => acc + item.quantity * item.discountPrice,
  //     0
  //   );

  //   // this is shipping cost variable

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const name = couponCode;

    // await axios.get(`${server}/coupon/get-coupon-value/${name}`).then((res) => {
    //   const shopId = res.data.couponCode?.shopId;
    //   const couponCodeValue = res.data.couponCode?.value;
    //   if (res.data.couponCode !== null) {
    //     const isCouponValid =
    //       cart && cart.filter((item) => item.shopId === shopId);

    //     if (isCouponValid.length === 0) {
    //       toast.error("Coupon code is not valid for this shop");
    //       setCouponCode("");
    //     } else {
    //       const eligiblePrice = isCouponValid.reduce(
    //         (acc, item) => acc + item.quantity * item.discountPrice,
    //         0
    //       );
    //       const discountPrice = (eligiblePrice * couponCodeValue) / 100;
    //       setDiscountPrice(discountPrice);
    //       setCouponCodeData(res.data.couponCode);
    //       setCouponCode("");
    //     }
    //   }
    //   if (res.data.couponCode === null) {
    //     toast.error("Coupon code doesn't exists!");
    //     setCouponCode("");
    //   }
    // });
  };

  //   const discountPercentenge = couponCodeData ? discountPrice : "";

  //   const totalPrice = couponCodeData
  //     ? (subTotalPrice + shipping - discountPercentenge).toFixed(2)
  //     : (subTotalPrice + shipping).toFixed(2);

  //   console.log(discountPercentenge);

  return (
    // <div className="w-full flex flex-col bg-red-500 items-center py-8">
    //   <div className="w-[90%] flex gap-5 1000px:w-[70%]  800px:flex">
    //     <div className="w-[60%] 800px:w-full bg-white">A</div>
    //     <div className="w-[35%] 800px:w-full 800px:mt-0  bg-blue-400">B</div>
    //   </div>

    <div className="w-full flex flex-col items-center py-8">
      <div className="w-[90%] 1000px:w-[70%] flex gap-8 800px:flex mb-4">
        <div className="w-full 800px:w-[65%]">
          <ShippingInfo
            // user={user}
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            address1={address1}
            setAddress1={setAddress1}
            address2={address2}
            setAddress2={setAddress2}
            zipCode={zipCode}
            setZipCode={setZipCode}
          />
        </div>
        <div className="w-[35%] 800px:w-[35%] 800px:mt-0 ">
          <CartData
            handleSubmit={handleSubmit}
            finalPrice={finalPrice}
            shipping={shipping}
            subTotalPrice={subTotalPrice}
            // couponCode={couponCode}
            // setCouponCode={setCouponCode}
            // discountPercentenge={discountPercentenge}
          />
        </div>
      </div>
      <div
        className={`button w-[150px] 800px:w-[280px] hover:scale-95 hover:font-semibold`}
        onClick={paymentSubmit}
      >
        <h5 className="text-white">Go to Payment</h5>
      </div>
    </div>
  );
};

const ShippingInfo = ({
  username,
  setUsername,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  country,
  setCountry,
  city,
  setCity,
  userInfo,
  setUserInfo,
  address1,
  setAddress1,
  address2,
  setAddress2,
  zipCode,
  setZipCode,
}) => {
  return (
    <div className="w-full 800px:w-[95%] bg-white rounded-md p-5 pb-8">
      <h5 className="text-[18px] font-[500]">Shipping Address</h5>
      <br />
      <form>
        <div className="w-full flex pb-3">
          <div className="w-[50%]">
            <label className="block pb-2">Full Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className={` !w-[95%]`}
            />
          </div>
          <div className="w-[50%]">
            <label className="block pb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className=""
            />
          </div>
        </div>

        <div className="w-full flex pb-3">
          <div className="w-[50%]">
            <label className="block pb-2">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={`!w-[95%]`}
              required
            />
          </div>
          <div className="w-[50%]">
            <label className="block pb-2">Zip Code</label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
              className=""
            />
          </div>
        </div>

        <div className="w-full flex pb-3">
          <div className="w-[50%]">
            <label className="block pb-2">Country</label>
            <select
              className="w-[95%] border h-[40px] rounded-[5px]"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option className="block pb-2" value="">
                Choose your country
              </option>
              {Country &&
                Country.getAllCountries().map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="w-[50%]">
            <label className="block pb-2">State</label>
            <select
              className="w-[95%] border h-[40px] rounded-[5px]"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option className="block pb-2" value="">
                Choose your State
              </option>
              {State &&
                State.getStatesOfCountry(country).map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="w-full flex pb-3">
          <div className="w-[50%]">
            <label className="block pb-2">Address1</label>
            <input
              type="address"
              required
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              className={`!w-[95%]`}
            />
          </div>
          <div className="w-[50%]">
            <label className="block pb-2">Address2</label>
            <input
              type="address"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              required
              className=""
            />
          </div>
        </div>

        <div></div>
      </form>
      {/* <h5
        className="text-[18px] cursor-pointer inline-block"
        onClick={() => setUserInfo(!userInfo)}
      >
        Choose From saved address
      </h5> */}
      {/* {userInfo && (
        <div>
          {user &&
            user.addresses.map((item, index) => (
              <div className="w-full flex mt-1">
                <input
                  type="checkbox"
                  className="mr-3"
                  value={item.addressType}
                  onClick={() =>
                    setAddress1(item.address1) ||
                    setAddress2(item.address2) ||
                    setZipCode(item.zipCode) ||
                    setCountry(item.country) ||
                    setCity(item.city)
                  }
                />
                <h2>{item.addressType}</h2>
              </div>
            ))}
        </div>
      )} */}
    </div>
  );
};

const CartData = ({
  handleSubmit,
  finalPrice,
  shipping,
  subTotalPrice,
  //   couponCode,
  //   setCouponCode,
  //   discountPercentenge,
}) => {
  return (
    <div className="w-full bg-[#fff] rounded-md p-5 pb-8">
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">subtotal:</h3>
        <h5 className="text-[18px] font-[600]">
          {" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(subTotalPrice)}
        </h5>
      </div>
      <br />
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">shipping:</h3>
        <h5 className="text-[18px] font-[600]">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(shipping)}
        </h5>
      </div>
      <br />
      <div className="flex justify-between border-b pb-3">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">Discount:</h3>
        <h5 className="text-[18px] font-[600]">
          -
          {/* - {discountPercentenge ? "$" + discountPercentenge.toString() : null} */}
        </h5>
      </div>
      <div className="flex justify-between items-center pt-3">
        <h3 className="text-[20px] font-[600] text-[#000000e3] ">Total:</h3>
        <h5 className="text-[18px] font-[600] text-end ">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(finalPrice)}
        </h5>
      </div>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`h-[40px] pl-2`}
          placeholder="Coupoun code"
          //   value={couponCode}
          //   onChange={(e) => setCouponCode(e.target.value)}
          required
        />
        <input
          className={`w-full h-[40px] border border-[#f63b60] text-center text-[#f63b60] rounded-[3px] mt-8 cursor-pointer`}
          required
          value="Apply code"
          type="submit"
        />
      </form> */}
    </div>
  );
};

export default Checkout;
