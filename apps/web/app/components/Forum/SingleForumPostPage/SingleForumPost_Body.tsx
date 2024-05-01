"use client";

import React from "react";
import { renderText } from "../../shared/TextRender";

export const SingleForumPost_Body = () => {
  return (
    <div className="flex flex-col gap-[10px] ">
      <div className="flex justify-between items-center  pl-[24px] pr-[10px] pt-[4px] pb-[18px] border-b-[2.5px] border-b-gray border-solid">
        <h1 className="dark:text-light_primary text-secondary text-[20px] font-semibold">
          How to download game on windows
        </h1>
        <div className="w-[191px] flex justify-between items-center dark:text-white font-medium">
          <h2>170</h2>
          <h2>5113</h2>
        </div>
      </div>
      <div className="py-[19px] px-[24px] border-b-[2.5px] border-b-gray ">
        <div className="text-[16px] dark:text-white font-roboto whitespace-pre-line">
          {renderText(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit  dolor, ultricies ac feugiat at, facilisis vitae justo. Donec sed neque  lobortis, mollis ante eget, cursus est. Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Suspendisse tellus orci, posuere ac maximus  a, efficitur nec nisi. Nam sed quam vitae turpis tincidunt aliquet nec  et diam. Cras lobortis aliquet purus, sed rhoncus erat fermentum quis.  Nunc porta purus lacus, sed maximus nunc elementum a.
          Youtube link
          <Youtube>https://www.youtube.com/watch?v=mZXLqjNnHXo</Youtube>
          Image Link
          <Image>https://img.freepik.com/free-photo/3d-render-low-poly-plexus-design-hi-tec-science-background_1048-13117.jpg?t=st=1713804096~exp=1713807696~hmac=39e52de2cb75064d0182dc7c2c18865bc68e15f3ebed22d9b07de35000545231&w=1060</Image>`)}
        </div>
        <p className="text-text_gray text-[14px] mt-[10px]">Posted 11:39  PM, April 27  </p>
      </div>
    </div>
  );
};
