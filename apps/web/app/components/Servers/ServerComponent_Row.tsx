"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/app/styles/Icon";
import { PremiumIcons } from "@/public/svg/PremiumIcons";

interface Props {
  alpha3: string;
  country: string;
  name: string;
  players: number;
  maxPlayers: number;
  ip: string;
  map: string;
  disabled?: boolean;
  tier: string;
  // tier: "premium" | "vip" | "vip+" | "normal";
}

export const ServerComponent_Row = ({
  alpha3,
  country,
  name,
  players,
  maxPlayers,
  ip,
  map,
  disabled,
  tier,
}: Props) => {
  const serverTierClassname =
    tier === "vip"
      ? "bg-primary"
      : tier === "vip+"
        ? "bg-gradient-to-r from-[#69e868] to-[#4f78fd]"
        : tier === "premium"
          ? "bg-light_primary"
          : "";
  return (
    <Link
      href={`/servers/${country}/${ip.replaceAll(".", ":")}`}
      onClick={(e) => disabled && e.preventDefault()}
      className={`w-full 
                  rounded-[6px] 
                  p-[1px] inline-block
    ${serverTierClassname}
    `}
    >
      <div className="flex items-center justify-between gap-[35px] px-[16px] py-[10px]  bg-gray2 rounded-[6px]">
        {tier === "premium" ? (
          <Icon
            svg={PremiumIcons["premium_pearl"]}
            className="w-[25px] h-[25px]"
          />
        ) : tier === "vip+" ? (
          <Icon svg={PremiumIcons["vip+"]} className="w-[30px] h-[30px]" />
        ) : tier === "vip" ? (
          <Icon svg={PremiumIcons["vip"]} className="w-[25px] h-[25px]" />
        ) : null}
        <div className="flex-grow sm:w-2/3 flex gap-[35px] items-center ">
          <div className="w-[30px] h-[30px] relative">
            <Image
              src={`https://flagsapi.com/${alpha3}/flat/64.png`}
              alt="country"
              fill
            />
          </div>
          <h3 className="sm:inline hidden  dark:text-white text-black lg:text-[16px] text-[14px] uppercase font-inter font-medium">
            {name.length > 80 ? name.slice(0, 77) + "..." : name}
          </h3>
        </div>
        <div className="flex sm:justify-end justify-between gap-[10px] items-center dark:text-white text-black sm:w-1/3 w-full">
          <h3 className="text-center basis-1/3">
            {players}/{maxPlayers}
          </h3>
          <h3 className="text-center basis-1/3">{ip}</h3>
          <h3 className=" basis-1/3  xs:inline hidden text-right">{map}</h3>
        </div>
      </div>
    </Link>
  );
};
