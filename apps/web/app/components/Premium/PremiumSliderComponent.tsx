'use client'
import React, { useEffect, useRef } from "react";
import { usePremiumSliderComponentTooltip } from "@/app/hooks/usePremiumSlidercomponentTooltip";
import Image from "next/image";

export const PremiumSliderComponent = () => {
  const { onHover, onCancelHover, changeData } = usePremiumSliderComponentTooltip();
  const ref = useRef<HTMLDivElement>(null);
  let animationFrameId: number | null = null;

  const updateTooltipPosition = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      changeData("1", rect.left, rect.top,rect.width);
    }
    animationFrameId = requestAnimationFrame(updateTooltipPosition);
  };

  useEffect(() => {
    const mouseEnter = () =>{
      onHover();
      animationFrameId = requestAnimationFrame(updateTooltipPosition);
    }
    const mouseLeave = () =>{
      if (animationFrameId) {
        onCancelHover();
        changeData(null,null,null,null)
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    }
    if (ref.current) {
      ref.current.addEventListener("mouseenter", mouseEnter);
      ref.current.addEventListener("mouseleave", mouseLeave);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (ref.current) {
        ref.current.removeEventListener("mouseenter", mouseEnter);
        ref.current.removeEventListener("mouseleave", mouseLeave);
      }
    };
  }, []);
  
  return ( 
    <div
      ref={ref}
      className="w-fit h-fit dark:bg-[#ffffff12] bg-white flex gap-[5px] items-center pr-[5px] font-bold rounded-[5px] cursor-pointer"
      data-tooltip-id="complexTooltip"
    >
      <div className="relative w-[50px] h-[30px]">
        <Image src={"/images/servers/serverSmall.webp"} fill alt="Premium Server" />
      </div>
      {/* Server Game */}
      <p className="dark:text-white text-black">Cs1.6</p>
      {/* map */}
      <p className="text-[#B8394E]">de_dust_2</p>
      {/* Server Title */}
      <p className="text-[#666666] whitespace-nowrap">Energetic Rust x2 nolim</p>
    </div>
  );
};
