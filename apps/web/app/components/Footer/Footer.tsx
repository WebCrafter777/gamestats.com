"use client";

import React from "react";
import { SectionContainer } from "../SectionContainer";
import { Logo_Horizontal_Full } from "../Logo";
import { Icon } from "@/app/styles/Icon";
import { SocialIcons } from "@/public/svg/SocialIcons";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <SectionContainer className="max-w-[1370px] mx-auto">
      <footer className="m-components_distance dark:bg-gray2 bg-white  xs:!px-[31px] px-[12px] !pt-[61px] !pb-[30px] rounded-[21px] flex flex-col gap-[54px]">
        <div className="flex justify-between items-start gap-[40px] sb:flex-row flex-col">
          <div className="flex flex-col gap-[27px]">
            <div className="w-[208px] h-[41px] relative">
              <Logo_Horizontal_Full />
            </div>
            <div className="flex flex-col gap-[5px] dark:text-white text-black">
              <p className="text-[20px] font-medium font-inter">
                (+995) 1234567
              </p>
              <p className="text-[16px] font-inter">test@gmail.com</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-y-5 xs:justify-normal justify-between sm:w-1/2 w-full">
            <div className="flex flex-col gap-[15px] px-[10px] md:basis-1/4 xs:basis-1/2 ">
              <h2 className="dark:text-white text-black text-[18px] font-medium">
                {t('quicklinks')}
              </h2>
              <ul className="flex flex-col gap-[11px]">
                <li className="dark:text-[#ffffff5d] text-gray text-[16px] cursor-pointer">
                  <Link href={"/"}>{t("home")}</Link>
                </li>
                <li className="dark:text-[#ffffff5d] text-gray text-[16px] cursor-pointer">
                  <Link href={"/games"}>{t("games")}</Link>
                </li>
                <li className="dark:text-[#ffffff5d] text-gray text-[16px] cursor-pointer">
                  <Link href={"/servers"}>{t("servers")}</Link>
                </li>
                <li className="dark:text-[#ffffff5d] text-gray text-[16px] cursor-pointer">
                  <Link href={"/forum"}>{t("forum")}</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[15px] px-[10px] md:basis-1/4 xs:basis-1/2 ">
              <h2 className="dark:text-white text-black text-[18px] font-medium">
                {t('games')}
              </h2>
              <ul className="flex flex-col gap-[11px]">
                <li className="dark:text-[#ffffff5d] text-gray text-[16px] cursor-pointer">
                  <Link href={"/"}>Cs1.6</Link>
                </li>
                <li className="dark:text-[#ffffff5d] text-gray text-[16px] cursor-pointer">
                  <Link href={"/games"}></Link>
                </li>
                <li className="dark:text-[#ffffff5d] text-gray text-[16px] cursor-pointer">
                  <Link href={"/servers"}>{t("servers")}</Link>
                </li>
                <li className="dark:text-[#ffffff5d] text-gray text-[16px] cursor-pointer">
                  <Link href={"/forum"}>{t("forum")}</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[15px] px-[10px] md:basis-1/4 xs:basis-1/2 ">
              <h2 className="dark:text-white text-black text-[18px] font-medium">
                Quick Links
              </h2>
              <ul className="flex flex-col gap-[11px]">
                <li className="dark:text-[#ffffff5d] text-gray text-[16px] cursor-pointer">
                  Link1
                </li>
                <li className="dark:text-[#ffffff5d] text-gray text-[16px] cursor-pointer">
                  Link2
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[15px] px-[10px] md:basis-1/4 xs:basis-1/2 ">
              <h2 className="dark:text-white text-black text-[18px] font-medium">
                Quick Links
              </h2>
              <ul className="flex flex-col gap-[11px]">
                <li className="dark:text-[#ffffff5d] text-gray text-[16px] cursor-pointer">
                  Link1
                </li>
                <li className="dark:text-[#ffffff5d] text-gray text-[16px] cursor-pointer">
                  Link2
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <hr className="w-full h-[1px] dark:text-[#ffffff5d] text-gray" />
        <div className="flex sm:flex-nowrap flex-wrap  justify-between items-center gap-[11px]">
          <div className="flex xs:flex-nowrap flex-wrapc items-center gap-[15px]">
            <p className="flex gap-[5px] dark:text-white">
              Powered by
              <Link target="_blank" href={"https://geoserv.ge"}>
                Geoserv.ge
              </Link>
            </p>
            <ul className="flex flex-wrap gap-[5px]">
              <li className="p-[10px] rounded-full border-[1px] dark:border-[#ffffff52] border-black">
                <Icon
                  svg={SocialIcons["twitter_white"]}
                  className="w-[20px] h-[18px] ColorChangableIcons"
                />
              </li>
              <li className="p-[10px] rounded-full border-[1px] dark:border-[#ffffff52] border-black">
                <Icon
                  svg={SocialIcons["facebook_white"]}
                  className="w-[20px] h-[18px] ColorChangableIcons"
                />
              </li>
              <li className="p-[10px] rounded-full border-[1px] dark:border-[#ffffff52] border-black">
                <Icon
                  svg={SocialIcons["linkedin_white"]}
                  className="w-[20px] h-[18px] ColorChangableIcons"
                />
              </li>
            </ul>
          </div>
          <p className="dark:text-white text-black text-[16px]">
            {t("allrightsreserved")}
          </p>
        </div>
      </footer>
    </SectionContainer>
  );
};
