import PropTypes from "prop-types";

function PayButton({ src, alt }) {
  return (
    <button
      className="flex w-[340px] h-12 bg-[black] justify-center items-center
      cursor-pointer mt-0 mb-4 mx-auto rounded-lg border-[none] hover:bg-[#3c4043]"
    >
      <img className="h-[26px]" src={src} alt={alt} />
    </button>
  );
}
PayButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default PayButton;
