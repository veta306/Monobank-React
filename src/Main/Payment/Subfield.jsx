import PropTypes from "prop-types";
import { useState } from "react";

function Subfield({ id, label, pattern }) {
  const [notEmpty, setNotEmpty] = useState(false);
  const handleInput = (e) => {
    if (e.target.value !== "") setNotEmpty(true);
    else setNotEmpty(false);
  };
  return (
    <div className="w-[91px] shadow-[11px_0px_0px_-10px_#ccc] mr-4 last:shadow-none last:mr-0">
      <input
        className="peer h-[41px] w-full text-base mt-3 border-0 focus:outline-none invalid:text-[#fb5155]"
        type="text"
        id={id}
        pattern={pattern}
        onChange={handleInput}
        required
      />
      <label
        className={`relative top-[-38px] opacity-60 leading-6 transition-all 
        peer-hover:text-xs peer-hover:top-[-52px] peer-focus:text-xs peer-focus:top-[-52px] ${
          notEmpty ? "text-xs top-[-52px]" : ""
        }`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
Subfield.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
};
export default Subfield;
