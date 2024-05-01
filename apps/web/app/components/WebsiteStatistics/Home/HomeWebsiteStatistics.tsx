
'use client'

import React from "react";
import { SectionContainer } from "../../SectionContainer";
import { Icon } from "@/app/styles/Icon";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";
import { UserIcons } from "@/public/svg/UserIcons";
import { useTranslation } from "react-i18next";

export const Home_WebsiteStatistics = () => {
  const {t} = useTranslation()
  return (
    <SectionContainer className="m-components_distance grid grid-cols-4 h-fit md:gap-[10px] gap-[5px] justify-between">
      <div className="md:col-span-1 xs:col-span-2 col-span-4  flex justify-center items-center flex-col gap-[5px] bg-gray h-full rounded-[12px] font-semibold py-[30px] px-[10px]">
        <Icon
          svg={UserIcons['user_approved']}
          className="w-[44px] h-[44px]"
        />
        <h1 className="lg:text-[18px] text-[15px] text-white text-center">
        {t('Home:registeredusers')}: <span className="text-yellow_loud">1000</span>
        </h1>
      </div>
      <div className="md:col-span-1 xs:col-span-2 col-span-4  flex justify-center items-center flex-col gap-[5px] bg-gray h-full rounded-[12px] font-semibold py-[30px] px-[10px]">
        <Icon
          svg={WebsiteIcons['game']}
          className="w-[44px] h-[44px]"
        />
        <h1 className="lg:text-[18px] text-[15px] text-white text-center">
          {t('Home:supportedgames')}: <span className="text-yellow_loud">1000</span>
        </h1>
      </div>
      <div className="md:col-span-1 xs:col-span-2 col-span-4  flex justify-center items-center flex-col gap-[5px] bg-gray h-full rounded-[12px] font-semibold py-[30px] px-[10px]">
        <Icon
          svg={WebsiteIcons['computer']}
          className="w-[44px] h-[44px]"
        />
        <h1 className="lg:text-[18px] text-[15px] text-white text-center">
        {t('Home:trackedservers')}: <span className="text-yellow_loud">1000</span>
        </h1>
      </div>
      <div className="md:col-span-1 xs:col-span-2 col-span-4 flex justify-center items-center flex-col gap-[5px] bg-gray h-full rounded-[12px] font-semibold py-[30px] px-[10px]">
        <Icon
          svg={WebsiteIcons['forum']}
          className="w-[44px] h-[44px]"
        />
        <h1 className="lg:text-[18px] text-[15px] text-white text-center">
        {t('Home:forumtopics')}: <span className="text-yellow_loud">1000</span>
        </h1>
      </div>
    </SectionContainer>
  );
};
