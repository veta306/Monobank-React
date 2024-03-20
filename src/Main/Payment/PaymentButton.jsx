import PropTypes from "prop-types";

function PaymentButton({ label }) {
  return (
    <button
      className="border w-[103px] h-[42px] bg-[white] text-base font-medium cursor-pointer
      rounded-2xl border-solid border-[#ccc] hover:bg-[#e6e6e6]"
    >
      {label}
    </button>
  );
}
PaymentButton.propTypes = {
  label: PropTypes.string.isRequired,
};
export default PaymentButton;
