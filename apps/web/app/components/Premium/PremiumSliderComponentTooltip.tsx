import { Icon } from "@/app/styles/Icon";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";
import Image from "next/image";
import React from "react";
import { US } from 'country-flag-icons/react/3x2'
interface Props {
  left: null | number;
  top: null | number;
  activeId: null | string;
  width: null | number;
}
export const PremiumSliderComponentTooltip = ({
  left,
  activeId,
  top,
  width,
}: Props) => {
  return (
    <div
      className="absolute z-[20] flex flex-col justify-center items-center gap-[5px]"
      style={{
        top: top ? Math.min(top + 35, window.innerHeight - 35) : 0,
        left: left ? Math.max(left - 100, 0) : 0,
        width: width ? Math.min(width + 200, window.innerWidth - (left ? left - 100 : 0)) : 0,
    }}>
      <div className="mx-auto">
        <Icon svg={WebsiteIcons["triangle"]} className="w-[16px] h-[16px]" />
      </div>
      <div className="dark:bg-gray2 bg-white w-full h-fit px-[8px] py-[8px] rounded-[5px] flex items-center gap-[15px] text-[15px] z-[20]">
        <div className="relative w-[140px] h-[120px]">
          <Image
            src={"/images/servers/serverBig.webp"}
            alt="Server_Image"
            fill
            className="object-cover rounded-[5px]"
          />
        </div>
        <div className="h-full flex flex-col flex-grow gap-[5px]">
          <div className="flex gap-[5px]">
            <h2 className="dark:text-[#ffffff9a] text-black uppercase font-semibold">Game</h2>
            <h2 className="dark:text-[#ffffff9a] text-black uppercase font-semibold">Cs1.6</h2>
            <h2 className="dark:text-[#e25151] text-[#e25151] uppercase font-semibold">
              {"<MIRAGE | Perfect-CS 2 #2...>"}
            </h2>
          </div>
          <div className="flex gap-[5px] flex-wrap">
            <h3 className="font-medium text-gray w-fit flex gap-[4px]">
              Status:
              <span className=" text-primary_second shadow-2xl">Online</span>
            </h3>
            <h3 className="font-medium text-gray w-fit flex gap-[4px]">
              Players:
              <span className=" dark:text-yellow_loud text-primary ">10/8</span>
            </h3>
            <h3 className="font-medium text-gray w-fit flex gap-[4px]">
              Map:
              <span className=" dark:text-yellow_loud text-primary">Dust2_2</span>
            </h3>
          </div>
          <div className="flex gap-[15px] items-center ">
            <h3 className="flex items-center gap-[5px] dark:text-white text-black">
              <US className="w-[20px] h-[20px]" />
              United States
            </h3>
            <h3 className="font-medium text-gray w-fit flex gap-[4px]">
              Adress:
              <span className=" dark:text-yellow_loud text-primary ">94.12.512.5</span>
            </h3>
          </div>
          <div className="w-full h-[30px] relative">
            <Image
              src={"/images/maps/dust2.webp"}
              alt="Server_Image"
              fill
              className="object-cover rounded-[5px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
