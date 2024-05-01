"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useDarkMode } from "../hooks/useDarkMode";

export const Logo_Full_Vertical = () => {
  const { isDarkMode } = useDarkMode();

  const logoSrc = !isDarkMode
    ? "/images/logo/Logo_Vertical_Full_Light.webp"
    : "/images/logo/Logo_Vertical_Full_Dark.webp"; // Corrected order of light and dark

  return (
    <div className="select-none outline-none w-full h-full">
      <Image src={logoSrc} alt="Logo_Full_Vertical" fill draggable={false} />
    </div>
  );
};
export const Logo_Horizontal = () => {
  return (
    <div className="select-none outline-none w-full h-full">
      <Image
        src={"/images/logo/Logo_Horizontal.webp"}
        alt="Logo_full_Horizontal"
        fill
        draggable={false}
      />
    </div>
  );
};

export const Logo_Horizontal_Full = () => {
  const { isDarkMode } = useDarkMode();

  const logoSrc = isDarkMode
  ? "/images/logo/Logo_Horizontal_Full_Dark.webp"
  : "/images/logo/Logo_Horizontal_Full_Light.webp"; // Corrected order of light and dark

  return (
    <div className="select-none outline-none w-full h-full">
      <Image
        src={logoSrc}
        alt="Logo_full_Horizontal"
        fill
        draggable={false}
      />
    </div>
  );
};
