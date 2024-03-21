import { useState } from "react";
import "./App.css";

const pleaseData = {
  proposal: [
    "Please make me the happiest person alive and say 'yes'.",
    "Please click yes as a symbol of my love and commitment.",
    "Please join me in creating a future filled with love and happiness.",
    "Please be my partner for life and share in all of life's joys and sorrows.",
    "Please allow me to cherish and love you for eternity.",
    "Please say 'yes' and let's start our journey together.",
    "Please make my dreams come true by being my wife.",
    "Please say you'll marry me and make me the luckiest person in the world.",
    "Please accept this proposal and let's build a life together.",
    "Please give me the honor of being your husband.",
  ],
  askingTexts: [
    "Kya itna bura hu mein Mommy.. ? ",
    "Please dil ki baat bol do cutie",
    "Par mein toh bohot pyar karta hu na tumse .. cutie😖",
    "Aap mela dil tod lehe ho Babu..",
    "Aap thode badmash ho kya cutie",
    "Par meine toh apni kundali bhi milali hain ... ",
    "Meri raani ko palko par bithaunga ... maan jao ",
    "Tu maan meri jaan ..  ",
    "Dekho kitni pyari hain .. fir bhi nakhre dikhati hain ",
    "Dekho kitni samjhdar hain .. fir bhi fir bhi mera pyar nahi samjhti  ",
    "Par meine to meri maa ko bhi bata diya hain... bahu ke barein mein ",
  ],

  askingGifUrl: [
    "https://media.tenor.com/K9aldggYXaEAAAAi/cute-bunny.gif",
    "https://media.tenor.com/amRuuQRN6d0AAAAi/love.gif",
    "https://media.tenor.com/0VzK0wKS_cMAAAAi/kakaotalk-emoticon.gif",
    "https://media.tenor.com/DvWwqDSpr3MAAAAi/mochi-peach.gif",
    "https://media.tenor.com/ppJGvOm48zIAAAAi/peach-and-goma-peach-goma.gif",
  ],

  gifUrls: [
    "https://media.tenor.com/YfaICXGzuSoAAAAi/i-love-you-i-missed-you.gif",
    "https://media.tenor.com/k2nlhWgMVucAAAAi/cute.gif",
    "https://media.tenor.com/-bhYvDZUG2QAAAAi/bunny-bunnies.gif",
    "https://media.tenor.com/bmd6etOp9xMAAAAi/peach-goma-love-peach-and-goma.gif",
    "https://media1.tenor.com/m/3pXNYZVUIZkAAAAC/peach-and-goma.gif",
    "https://media1.tenor.com/m/bbvK24wkdXkAAAAC/peach-goma-carry-basket.gif",
    "https://media.tenor.com/JhVlbsQoCboAAAAi/cute-dancing.gif",
  ],
};

function App() {
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [askText, setAskText] = useState("Hey Pookie , Do you Love me ... ??");
  const [yes, setYes] = useState(false);

  const [image, setImage] = useState(
    "https://media.tenor.com/SFy5Za0DyMEAAAAi/erm-fingers.gif"
  );

  const moveButton = (e) => {
    e.preventDefault();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = 80;
    const buttonHeight = 40;
    const padding = 20; // Padding around the button

    const randomX =
      Math.random() * (screenWidth - buttonWidth - padding * 2) + padding;
    const randomY =
      Math.random() * (screenHeight - buttonHeight - padding * 2) + padding;

    setNoButtonStyle({
      ...noButtonStyle,
      position: "absolute",
      left: `${randomX}px`,
      top: `${randomY}px`,
    });

    setImage(
      pleaseData.askingGifUrl[
        Math.ceil(Math.random() * pleaseData.askingGifUrl.length)
      ]
    );
    setAskText(
      pleaseData.askingTexts[
        Math.floor(Math.random() * pleaseData.askingTexts.length)
      ]
    );
  };

  if (!yes) {
    return (
      <div className=" w-full h-screen flex justify-center items-center flex-col bg-pink-300/40 ">
        <div className="flex flex-col justify-center items-center">
          <div className="h-60 ">
            <img
              src={
                image
                  ? image
                  : "https://media.tenor.com/qVdyIgm8wzYAAAAi/hello.gif"
              }
              className="w-full h-full"
            />
          </div>
          <div className="text-center my-4 sm:p-4 ">
            <h1 className="text-lg font-semibold">{askText}</h1>
            <p className="text-lg">
              {
                pleaseData.proposal[
                  Math.floor(Math.random() * pleaseData.proposal.length)
                ]
              }
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center  border-4  gap-4">
          <button className="btns" onClick={() => setYes(true)}>
            Yes
          </button>
          <button className="btns" onClick={moveButton} style={noButtonStyle}>
            NO
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-pink-300/40 ">
      <div className="flex justify-center items-center text-center flex-col">
        <div className="h-[18rem] ">
          <img
            src={
              pleaseData.gifUrls[
                Math.floor(Math.random() * pleaseData.gifUrls.length)
              ]
            }
            className="w-full h-full"
          />
        </div>
        <div className="text-xl font-semibold ">
          <h1>Yeeeaaaahhhh .... !!!!</h1>
          <h1>I Knew it.....</h1>
          <h1>I Love You tooo , My love... 💕</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
