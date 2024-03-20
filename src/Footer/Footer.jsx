import FooterButton from "./FooterButton";

function Footer() {
  return (
    <footer className="flex justify-between items-center mb-4">
      <div className="text-xs leading-4 font-medium opacity-80 text-white">
        АТ «УНІВЕРСАЛ БАНК» Ліцензія НБУ №92 від <br />
        20.01.1994, у держреєстрі банків №226
      </div>
      <div className="w-[400px] h-12 flex justify-between">
        <FooterButton
          iconSrc="./assets/cup.svg"
          altText="cup"
          buttonText="Провести розіграш"
        />
        <FooterButton
          iconSrc="./assets/gamepad.svg"
          altText="gamepad"
          buttonText="Віджет для стрімів"
        />
      </div>
    </footer>
  );
}
export default Footer;
