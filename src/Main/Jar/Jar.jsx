import StatsData from "./StatsData";

function Jar() {
  return (
    <div className="w-1/2 bg-gray-100 flex flex-col">
      <img
        className="mt-[42px] mb-6 mx-auto"
        src="assets/logo_short.png"
        alt="logo"
      />
      <div
        className="w-[215px] h-[219px] bg-[url('./assets/jar\_bg.png')] 
        bg-contain bg-no-repeat flex justify-center items-center mb-5 m-auto"
      >
        <div className="h-[197px] w-[150px] bg-[url('./assets/uah\_33.png')] bg-no-repeat bg-contain"></div>
      </div>
      <div className="text-center text-sm font-medium leading-4">
        Павло К. збирає
      </div>
      <div className="text-center text-[22px] font-black mt-1 leading-[26px]">
        На FPV +БК+ Антена
      </div>
      <div className="text-center text-sm font-medium leading-[19.6px] mt-3">
        На 10 FPV з акумуляторами + БК + антена та щогла
      </div>
      <div className="w-[325px] h-[65px] flex overflow-hidden items-center mt-4 mb-0 mx-auto rounded-2xl bg-white">
        <StatsData
          iconSrc="./assets/collected.svg"
          altText="collected"
          label="Накопичено"
          styles={"w-[51%] border-r-[solid] border-r-[1px]"}
          number={(localStorage.getItem("accumulated") || 0) + " ₴"}
        ></StatsData>
        <StatsData
          iconSrc="./assets/target.svg"
          altText="target"
          label="Ціль"
          number="200000 ₴"
        ></StatsData>
      </div>
      <div className="mt-auto pb-[42px]"></div>
    </div>
  );
}
export default Jar;
