"use client";

import { useServersFilter } from "@/app/hooks/useServersFilter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface GameInterface {
  banner: string;
  name: string;
  id: string;
}
interface Props extends GameInterface {
  className?: string;
  disabled?: boolean;
}
export const Game_Box = ({ id, banner, name, className, disabled }: Props) => {
  const { setData } = useServersFilter();
  return (
    <Link
      href={`/servers`}
      onClick={(e) => {
        if (disabled) {
          e.stopPropagation();
          e.preventDefault()
        } else {
          setData({ game: { id, name } });
        }
      }}
      className={`relative cursor-pointer select-none  rounded-[20px]  flex items-end justify-center ${className}`}
    >
      <Image
        src={banner}
        alt={`game_${name}_banner`}
        className="object-cover rounded-[20px]"
        fill
      />
      <div className="absolute w-full h-full bg-[#0000009a]  rounded-[20px]   " />
      <h2 className="relative z-[1] text-white pb-[5px] sm:text-[16px] xs:text-[13px] text-[15px] text-center font-medium p-2">
        {name}
      </h2>
    </Link>
  );
};
