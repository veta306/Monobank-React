import PropTypes from "prop-types";
import { useState } from "react";

function InputContainer({ label, id, pattern, required }) {
  const [notEmpty, setNotEmpty] = useState(false);
  const handleInput = (e) => {
    if (e.target.value !== "") setNotEmpty(true);
    else setNotEmpty(false);
  };
  return (
    <div
      className="box-content w-[306px] h-14 border transition-all
      mt-0 mb-4 mx-auto px-4 py-0 rounded-2xl border-solid border-[#ccc]"
    >
      <input
        type="text"
        id={id}
        className="peer h-[41px] w-full text-base mt-3 border-0 focus:outline-none invalid:text-[#fb5155]"
        pattern={pattern}
        required={required}
        onChange={handleInput}
      />
      <label
        htmlFor={id}
        className={`relative top-[-38px] opacity-60 leading-6 transition-all 
        peer-hover:text-xs peer-hover:top-[-52px] peer-focus:text-xs peer-focus:top-[-52px] ${
          notEmpty ? "text-xs top-[-52px]" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
}
InputContainer.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  required: PropTypes.bool,
};
export default InputContainer;
