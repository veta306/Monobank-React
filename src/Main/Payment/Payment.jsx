import PaymentCard from "./PaymentCard";
import InputContainer from "./InputContainer";
import PayButton from "./PayButton";
import CardDetails from "./CardDetails";
import { useState } from "react";

function Payment() {
  const [showCardDetails, setShowCardDetails] = useState(false);
  const handleCardPaymentClick = () => {
    setShowCardDetails(true);
  };
  return (
    <div className="w-1/2 flex flex-col">
      <div className={`${showCardDetails ? "mt-0" : "mt-[6px]"}`}>
        <PaymentCard />
      </div>
      <InputContainer id="name" label="Ваше ім'я (необов'язково)" />
      <InputContainer id="comment" label="Коментар (необов'язково)" />
      <PayButton src="./assets/mono_pay.svg" alt="monopay" />
      <PayButton src="./assets/dark_gpay.svg" alt="googlepay" />
      <div
        className={`bg-[#ccc] h-px w-[340px] mx-auto my-2 ${
          showCardDetails ? "mt-5 mb-9 mx-auto" : ""
        }`}
      >
        <div
          className={`h-6 w-[196px] text-center bg-[white] relative text-sm font-medium leading-6 m-auto -top-3 ${
            showCardDetails ? "block" : "hidden"
          }`}
        >
          або уведіть дані картки
        </div>
      </div>
      <div
        className={`flex justify-center cursor-pointer mt-2 ${
          showCardDetails ? "hidden" : "block"
        }`}
        onClick={handleCardPaymentClick}
      >
        <img src="./assets/card.svg" alt="card" />
        <div className="text-sm font-semibold text-[#e85e5b] leading-[26px] ml-2">
          Оплатити карткою
        </div>
      </div>
      {showCardDetails && <CardDetails />}
    </div>
  );
}
export default Payment;
