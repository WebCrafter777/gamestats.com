import React, { useRef } from "react";
import { SectionContainer } from "../SectionContainer";

export const AdSuggestion = ({
  x,
  y,
  className,
}: {
  x: number;
  y: number;
  className?: string;
}) => {
  return (
    <SectionContainer className={`w-full h-full ${className}`}>
      <div
        className={`w-full h-full bg-[#A3A3A3] lg:rounded-[8px] text-[38px] font-semibold flex justify-center items-center text-white`}
      >
        AD {x}X{y}
      </div>
    </SectionContainer>
  );
};
