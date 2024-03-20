import PropTypes from "prop-types";

const StatsData = ({ iconSrc, altText, label, styles }) => {
  return (
    <div className={`w-6/12 h-[41px] flex ${styles}`}>
      <img className="w-6 h-6 ml-5 mr-4 my-auto" src={iconSrc} alt={altText} />
      <div>
        <div className="text-sm font-normal text-[#808080] leading-[17px]">
          {label}
        </div>
        <div className="text-base font-medium leading-6"></div>
      </div>
    </div>
  );
};
StatsData.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  styles: PropTypes.string,
};
export default StatsData;
