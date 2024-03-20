import PropTypes from "prop-types";
const FooterButton = ({ iconSrc, altText, buttonText }) => {
  return (
    <div
      className="w-48 h-10 flex justify-center items-center bg-[rgba(255,255,255,0.08)] cursor-pointer 
      transition-all mt-2 rounded-2xl border border-solid border-[rgba(255,255,255,0.4)] 
      hover:bg-[rgba(255,255,255,0.2)]"
    >
      <img className="w-4 h-4 mr-2" src={iconSrc} alt={altText} />
      <div className="font-semibold text-sm leading-6 text-[white]">
        {buttonText}
      </div>
    </div>
  );
};
FooterButton.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
export default FooterButton;
