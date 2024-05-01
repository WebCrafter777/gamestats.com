"use client";
import { Icon } from "@/app/styles/Icon";
import { ArrowIcons } from "@/public/svg/ArrowIcons";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServerComponent = ({
  game,
  serverName,
  map,
  players,
  country,
  logo,
}: ServerComponentProps) => {
  return (
    <div className="w-full flex justify-between gap-[15px]">
      <div className="relative w-[32px] h-[32px]">
        <Image src={logo} alt="country" fill />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-[5px]">
          <div className="w-[20px] h-[20px] relative">
            <Image
              src={`https://flagsapi.com/${country}/flat/64.png`}
              alt="country"
              fill
            />
          </div>
          <h4 className="text-[12px] font-medium text-yellow_loud">
            de_dust2_2x2
          </h4>
        </div>
        <h4 className="text-[12px] text-text_gray font-medium">
          [CS:GO] ★SURF+RPG #2 | FAMILY PROJECT | PUBLIC |{" "}
        </h4>
      </div>
      <h2 className="text-text_gray">6/64</h2>
    </div>
  );
};
interface ServerComponentProps extends ServerProps {
  logo: string;
}

interface ServerProps {
  game: string;
  serverName: string;
  map: string;
  players: string;
  country: string;
}

interface Props {
  game: string;
  logo: string;
  data: ServerProps[];
  className?: string;
}

export const VipGamesSidebarComponent = ({
  game,
  logo,
  data,
  className,
}: Props) => {
  return (
    <div className={`${className}`}>
      <div className="px-[10px] py-[12px] bg-gray2 text-white shadow-lg flex items-center  justify-between">
        <div className="flex gap-[5px]">
          <div className="w-[30px] h-[30px] relative">
            <Image src={logo} alt="cs go" fill className="object-cover" />
          </div>
          <h1 className="font-semibold font-roboto text-[16px]">{game}</h1>
        </div>
        <p className="text-[#ccc] text-[15px] font-semibold">Vip+</p>
      </div>
      <div className="dark:bg-[#ffffff15] bg-white px-[5px] py-[10px] dark:text-white text-black flex flex-col gap-[15px] cursor-pointer">
        {data.map((dat) => (
          <ServerComponent {...{ ...dat, logo }} />
        ))}
      </div>
    </div>
  );
};
