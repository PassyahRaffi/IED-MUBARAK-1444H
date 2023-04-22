import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Ketupat from "../../public/img/ketupat.svg";
import Hero from "../../public/img/family.JPG";
import Script from "next/script";

export default function Home() {
  const meta = {
    title: `IED MUBARAK 1444 H`,
    description: `Create mockups or prototypes in Figma at speed.`,
    image: "https://www.nucleus-ui.com/img/nucleus-socialmedia.png",
    type: "website",
  };
  const [button, setButton] = useState<boolean>(false);
  // console.log(button);

  let srcLink = `https://www.youtube.com/embed/7JQOsVptfDk?&autoplay=1&mute=
    ${button == true ? "0" : "1"}
    &loop=1&playlist=7JQOsVptfDk`;

  const handleButton = () => {
    setButton(true);
    // console.log(button);
  };

  useEffect(() => {
    setTimeout(async () => {
      // setButton(true);
    });
  }, []);

  return (
    <main>
      <title>{meta.title}</title>
      <section
        onClick={handleButton}
        className="flex justify-center items-center bg-slate-400"
      >
        <div className="absolute flex justify-around top-20 left-0 h-full w-full md:mt-20 z-[100]">
          <Image
            className="animate-ketupat-left md:hidden"
            src={Ketupat}
            alt="ketupat"
            width={200}
            height={200}
          />
          <Image
            className="animate-ketupat-left hidden md:flex"
            src={Ketupat}
            alt="ketupat"
            width={300}
            height={300}
          />
          <Image
            className="animate-ketupat-right hidden lg:flex"
            src={Ketupat}
            alt="ketupat"
            width={300}
            height={300}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "100vh",
          }}
          className="bg-hero h-[100%] min-w-[100vw] object-custom bg-[length:100%_100%] flex justify-center relative"
        >
          {/* <Image
            src={Hero}
            alt=""

          /> */}
          <div className="text-center">
            <h1 className="italic font-bold text-3xl md:text-5xl mt-[40%]">
              Ied Mubarak 1444 H
            </h1>
            <h1 className="italic font-bold md:text-xl mt-2">
              minal aidin wal faidzin, <br />
              sorry to be born and inner heart
            </h1>
            <span>
              <iframe
                id="music"
                width="560"
                height="315"
                src={srcLink}
                className="hidden"
                allow="autoplay"
              />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
