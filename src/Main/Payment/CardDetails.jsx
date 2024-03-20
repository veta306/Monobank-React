import InputContainer from "./InputContainer";
import Subfield from "./Subfield";

function CardDetails() {
  return (
    <form>
      <InputContainer
        label="Номер картки"
        id="card-number"
        pattern="[0-9]{16}"
        required={true}
      />
      <div
        className="flex box-content w-[306px] h-14 border transition-all
        mt-0 mb-4 mx-auto px-4 py-0 rounded-2xl border-solid border-[#ccc]"
      >
        <Subfield id="month" pattern="[0-1][0-9]" label="Місяць"></Subfield>
        <Subfield id="year" pattern="[0-9]{2}" label="Рік"></Subfield>
        <Subfield id="cvc2" pattern="[0-9]{3}" label="CVC2"></Subfield>
      </div>
      <button
        type="submit"
        className="block w-[346px] h-14 bg-[#fb5155] text-[white] text-base
         font-bold cursor-pointer mt-0 mb-[42px] mx-auto rounded-2xl border-[none] 
         hover:bg-[linear-gradient(_transparent,rgba(0,0,0,0.05)_40%,rgba(0,0,0,0.1)_)] 
         disabled:cursor-default disabled:opacity-40 disabled:pointer-events-none;"
        disabled
      >
        Поповнити банку
      </button>
    </form>
  );
}

export default CardDetails;
