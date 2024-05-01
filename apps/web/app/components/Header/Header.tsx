"use client";
import { Navbar_Top } from "./Navbar_Top";
import { Navbar } from "./Navbar";
import { PremiumServersSlider } from "../Swiper/Premium/PremiumServersSlider";
import { PremiumSliderComponentTooltip } from "../Premium/PremiumSliderComponentTooltip";
import { usePremiumSliderComponentTooltip } from "@/app/hooks/usePremiumSlidercomponentTooltip";
import useMediaQuery, { screenSizes } from "@/app/hooks/useMediaQuery";
import React from "react";

export const Header = () => {
  const { data } = usePremiumSliderComponentTooltip();
  const isAboveMediumScreens = useMediaQuery(screenSizes.mediumScreens);
  return (
    <React.Fragment>
      <Navbar_Top />
      <header className="w-full h-fit text-white md:static sticky top-0 z-[10] md:!bg-transparent dark:bg-gray2 bg-white overflow-visible">
        <div className="max-w-[1370px] mx-auto flex flex-col gap-[24px] h-fit pb-[10px]">
          <Navbar />
          <PremiumServersSlider />

          {data.activeId && isAboveMediumScreens && (
            <PremiumSliderComponentTooltip {...data} />
          )}
        </div>
      </header>
    </React.Fragment>
  );
};
