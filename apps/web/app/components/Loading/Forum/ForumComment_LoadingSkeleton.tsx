import React from "react";

const ForumComment_LoadingSkeleton = (
  <div className={`w-full flex sb:flex-row flex-col sb:justify-normal sb:items-start justify-center items-center sb:px-[24px] px-[12px] border-b-[2.5px]`}>
    <div className="flex flex-col justify-start items-center gap-[10px] py-[12px] sb:pr-[24px] sb:border-r-[2.5px] sb:border-r-gray w-[170px]">
      <div className="relative w-[80px] h-[80px] bg-gray2 animate-pulse rounded-full"></div>
      <div className="flex flex-col justify-center items-center gap-[5px]">
        <h1 className="text-[19px] font-medium dark:text-white text-center w-[90px] h-[20px] bg-gray animate-pulse rounded-[5px]" />
        <h3 className="text-[17px] text-center w-[50px] h-[20px] bg-gray rounded-[5px]" />
      </div>
    </div>
    <div className="w-full sb:pl-[24px] py-[12px] flex flex-col gap-[5px]">
      <p className="text-[15px] dark:text-white w-full h-[150px] bg-gray animate-pulse rounded-[5px]"></p>
      <p className=" h-[40px] w-full bg-gray animate-pulse rounded-[5px]"></p>
    </div>
  </div>
);

export const ForumComments_LoadingSkeleton = (
  <div>
    {ForumComment_LoadingSkeleton}
    {ForumComment_LoadingSkeleton}
    {ForumComment_LoadingSkeleton}  
  </div>
);
