"use client";
import Header from "@components/Client/Header";
import CheckoutSteps from "@components/checkout/CheckoutSteps";
import Payment from "@components/payment/Payment";

const PaymentPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#f6f9fc]">
      <Header />
      <br />
      <br />
      <CheckoutSteps active={2} />
      <Payment />
      <br />
      <br />
    </div>
  );
};

export default PaymentPage;
