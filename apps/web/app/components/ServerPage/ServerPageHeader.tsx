"use client";

import React from "react";
import { SectionContainer } from "../SectionContainer";
import Image from "next/image";
import { AdSuggestion } from "../Ad/AdSuggestion";

export const ServerPageHeader = () => {
  return (
    <SectionContainer className="w-full">
      <div className="dark:bg-gray-40 bg-[#ffffff63] p-[10px] rounded-[5px] flex justify-between items-center sb:h-[160px] ">
        <div className="flex gap-[10px] items-center sb:flex-row flex-col  md:min-w-[600px] h-full w-full">
          <div className="sb:w-[132px] w-full h-full min-w-[132px] min-h-[132px] relative rounded-[11px]">
            <Image
              src={"/images/placeholders/logo.webp"}
              alt="Logo_Server"
              fill
              className="rounded-[inherit] object-cover"
            />
          </div>
          <div className="flex items-center h-full">
            <div className="flex flex-col  h-full justify-between ">
              <div>
                <h1 className="sm:text-[36px] sb:text-[26px] text-[24px]   font-bold dark:text-white text-center  ">
                  Server Name Placeholder
                </h1>
                <p className="font-bold text-[16px] dark:text-white">
                  Status:{" "}
                  <span className=" dark:text-yellow_loud text-green-700 capitalize">up</span>
                </p>
              </div>
              <div className="flex sb:flex-nowrap flex-wrap gap-[9px] gap-y-[4px] items-center">
                <div className="flex gap-[9px] items-center">

                <span className="w-[17px] h-[17px] bg-[#00FF47] border-[1px] border-black rounded-full" />
                <h3 className="dark:text-white text-[16px] font-bold">
                  10.10.10.10
                </h3>
                </div>
                <div className="flex items-center  gap-[10px] dark:text-white">
                  <h2 className="text-[16px] font-medium">Server in</h2>
                  <div className="w-[25px] h-[25px] relative">
                    <Image
                      src={`https://flagsapi.com/GE/flat/64.png`}
                      alt="country"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <AdSuggestion
            x={600}
            y={138}
            className="flex-grow !h-full max-w-[600px] !px-0 md:inline hidden "
        /> */}
      </div>
    </SectionContainer>
  );
};
