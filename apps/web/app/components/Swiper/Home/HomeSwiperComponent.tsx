import Image from "next/image";
import React from "react";
import { SwiperNavigation } from "../SwiperNavigation";
import { PrimaryButton } from "../../Buttons/PrimaryButton";

// Define data object
const serverData = {
  imageUrl: "/images/maps/dust2.webp",
  serverName: "UGC | Dust2 #1 24/7 | UGC-Gaming.net",
  gameName: "Counter Strike 1.6",
  gameModes: [
    { name: "Zombie Mode" },
    { name: "Deathmatch" },
    { name: "Capture the Flag" },
    { name: "Team Deathmatch" },
  ],
  features: [
    "• Customizable character classes for diverse gameplay.",
    "• Dynamic weather effects for immersive experience.",
    "• Robust crafting system for endless item combinations.",
    "• Varied enemy AI behaviors for challenging encounters.",
    "• Expansive skill tree with countless build possibilities.",
    "• Interactive dialogue system for rich storytelling and still more which lefts undiscovered.",
    "• Realistic physics engine for lifelike interactions.",
    "• Realistic physics engine for lifelike interactions.",
    "• Realistic physics engine for lifelike interactions.",
    "• Realistic physics engine for lifelike interactions.",
  ],
  description:
    "Welcome to our Counter-Strike server! Join us for thrilling tactical gameplay, intense firefights, and competitive matches. Whether you're a seasoned veteran or new to the game, our server offers an exciting experience for all players.",
};

export const HomeSwiperComponent = () => {
  return (
    <div className=" md:rounded-[5px] lg:h-[404px] md:h-[504px] h-fit md:min-h-[0px] min-h-[400px] flex gap-[10px] relative w-full md:p-0 xs:px-[20px] px-[10px] py-[40px] dark:bg-transparent bg-white ">
      <Image
        src={"/images/maps/dust2.webp"}
        alt="Server banner"
        fill
        className="md:hidden absolute right-0 left-0 object-cover "
      />
      <div className="md:hidden inline absolute w-full h-full bg-[#000000a9] right-0 top-0 " />
      <div
        className="flex-grow md:relative md:inline hidden  w-full top-0 right-0 h-full clip-inner"
        style={{ clipPath: "polygon(0 0, 100% 0, 69% 100%, 0% 100%)" }}
      >
        <Image
          src={serverData.imageUrl}
          alt="Server banner"
          fill
          className="object-cover"
        />
      <div className="absolute w-full h-full bg-[#000000a9] right-0 top-0 " />

      </div>

      <div className="md:w-[905px] w-full flex flex-col gap-[31px] z-[20] xs:p-2">
        <div className="flex justify-between w-full">
          <SwiperNavigation nextEl="HomeBannerNext" prevEl="HomeBannerPrev" />
          <div className="px-[12px] py-[5px] text-[12px] font-semibold font-inter bg-primary text-white rounded-[4px] cursor-pointer">
            {serverData.gameName}
          </div>
        </div>
        <div className="flex flex-col h-full ">
          <h1 className="text-[23px] md:text-black text-[#E8E260]  dark:text-[#E8E260]   font-bold font-inter">
            {serverData.serverName}
          </h1>
          <div className="flex flex-col gap-[2px] items-start">
            <p className="md:text-gray text-white  md:text-[14px] text-[12px]">
              {serverData.description} Features:
            </p>
            <ul className="md:text-gray text-white md:text-[14px] text-[12px]">
              {serverData.features.slice(0, 6).map((feature,index) => (
                <li key={index}>
                  {feature.length > 80 ? feature.slice(0, 80) + "..." : feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex  flex-wrap gap-[5px]">
          {/* Map game modes from the object */}
          {serverData.gameModes.map((mode, index) => (
            <PrimaryButton
              key={index}
              variant="secondary"
              className="px-[10px] py-[5px] uppercase"
            >
              {mode.name}
            </PrimaryButton>
          ))}
        </div>
      </div>
    </div>
  );
};
