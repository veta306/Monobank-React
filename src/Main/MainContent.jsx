import { useState } from "react";
import Jar from "./Jar/Jar";
import Payment from "./Payment/Payment";

function MainContent() {
  const [accumulated, setAccumulated] = useState(
    +localStorage.getItem("accumulated") || 0
  );
  const updateAccumulated = (value) => {
    setAccumulated(accumulated + value);
    localStorage.setItem("accumulated", accumulated + value);
  };
  return (
    <main className="w-full min-h-[680px] shadow-[0_0_14px_rgba(0,0,0,0.2)] overflow-hidden flex mx-auto my-4 rounded-3xl bg-white">
      <Jar accumulated={accumulated}></Jar>
      <Payment updateAccumulated={updateAccumulated}></Payment>
    </main>
  );
}
export default MainContent;
