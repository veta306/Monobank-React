import Jar from "./Jar/Jar";
import Payment from "./Payment/Payment";

function MainContent() {
  return (
    <main className="w-full min-h-[680px] shadow-[0_0_14px_rgba(0,0,0,0.2)] overflow-hidden flex mx-auto my-4 rounded-3xl bg-white">
      <Jar></Jar>
      <Payment></Payment>
    </main>
  );
}
export default MainContent;
