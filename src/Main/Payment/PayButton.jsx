import PropTypes from "prop-types";

function PayButton({ onClick, src, alt }) {
  return (
    <button
      className="flex w-[340px] h-12 bg-[black] justify-center items-center
      cursor-pointer mt-0 mb-4 mx-auto rounded-lg border-[none] hover:bg-[#3c4043]"
      onClick={onClick}
    >
      <img className="h-[26px]" src={src} alt={alt} />
    </button>
  );
}
PayButton.propTypes = {
  onClick: PropTypes.func,
  src: PropTypes.string,
  alt: PropTypes.string,
};
export default PayButton;
