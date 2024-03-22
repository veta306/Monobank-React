import PaymentButton from "./PaymentButton";
import { useState } from "react";
import PropTypes from "prop-types";

function PaymentCard({ setParentInputValue }) {
  const [inputWidth, setInputWidth] = useState("w-[1ch]");
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    changeInput(e.target.value);
  };
  const changeInput = (value) => {
    if (!value.match(/^[0-9]{0,5}$/)) return;
    setInputWidth(value.length);
    setInputValue(value);
    setParentInputValue(value);
  };
  const handlePaymentButtonClick = (amount) => {
    const updatedValue = +inputValue + amount;
    changeInput(updatedValue.toString());
  };
  return (
    <div
      className="w-[394px] h-[217px] flex flex-col items-center mt-[42px] mb-8 mx-auto p-6 rounded-3xl border-[3px] border-solid border-transparent
        [background:linear-gradient(white,white)_padding-box,linear-gradient(92.12deg,#57b5f9_0%,#da11ba_100%)_border-box]"
    >
      <div className="flex">
        <div className="text-sm font-semibold leading-4">Сума поповнення</div>
        <img
          className="w-4 h-4 ml-[7px]"
          src="./assets/money.png"
          alt="money"
        />
      </div>
      <div className="flex justify-around mt-5">
        <input
          type="text"
          maxLength={5}
          value={inputValue}
          //seriously🤢?
          className={`text-5xl font-bold text-right border-0 outline-none ${
            inputWidth === 5
              ? "w-[5ch]"
              : inputWidth === 4
              ? "w-[4ch]"
              : inputWidth === 3
              ? "w-[3ch]"
              : inputWidth === 2
              ? "w-[2ch]"
              : "w-[1ch]"
          }`}
          placeholder="0"
          onChange={handleInputChange}
        />
        <div className="text-5xl font-bold ml-3 leading-[59px]">₴</div>
      </div>
      <div className="flex w-[340px] h-[42px] justify-between mt-[26px]">
        <PaymentButton
          label="+100 ₴"
          onPress={() => handlePaymentButtonClick(100)}
        ></PaymentButton>
        <PaymentButton
          label="+500 ₴"
          onPress={() => handlePaymentButtonClick(500)}
        ></PaymentButton>
        <PaymentButton
          label="+1 000 ₴"
          onPress={() => handlePaymentButtonClick(1000)}
        ></PaymentButton>
      </div>
    </div>
  );
}

PaymentCard.propTypes = {
  setParentInputValue: PropTypes.func,
};
export default PaymentCard;
