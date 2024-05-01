"use client";

import React from "react";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";

import Link from "next/link";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { PrimaryDropdown } from "../Dropdowns/PrimaryDropdown";
import { CountryIcons } from "@/public/svg/CountryIcons";
import { Icon } from "../../styles/Icon";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import i18nConfig from "@/i18n-config";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { useRegistrationModal } from "@/app/hooks/useRegistrationModal";

export const handleLanguageChange = (
  val: string,
  i18n: any,
  currentPathname: string,
  router: any
) => {
  const currentLocale = i18n.language;
  const newLocale = val;

  // set cookie for next-i18n-router
  const days = 30;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = date.toUTCString();
  document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

  if (currentLocale === i18nConfig.defaultLocale) {
    router.replace("/" + newLocale + currentPathname);
  } else {
    router.replace(
      currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
    );
  }
  router.refresh()
};

export const LargeScreensNavbarContent = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const currentPathname = usePathname();  
  return (
    <div className="flex flex-grow items-center justify-end lg:gap-[24px] gap-[16px] text-[15px] select-none dark:text-white text-black font-inter font-medium">
      <ul className="flex lg:gap-[24px] gap-[16px]">
        <li>
          <Link href={"/"}>{t("home")}</Link>
        </li>
        <li>
          <Link href={"/games"}>{t("games")}</Link>
        </li>
        <li>
          <Link href={"/servers"}>{t("servers")}</Link>
        </li>
        <li>
          <Link href={"/forum"}>{t("forum")}</Link>
        </li>
      </ul>
    
      <PrimaryDropdown
        className="border-[1px] border-solid dark:border-white border-black dark:bg-transparent bg-white !pr-[1px] min-w-[100px]"
        data={[
          {
            label: (
              <div className="flex justify-between gap-[15px]">
                <Icon className="w-[23px] h-[18px]" svg={CountryIcons["en"]} />
                <h3 className="text-[14px] uppercase font-bold font-inter">
                  EN
                </h3>
              </div>
            ),
            onClick: () =>
              handleLanguageChange("en", i18n, currentPathname, router),
          },
          {
            label: (
              <div className="flex justify-between gap-[15px]">
                <Icon className="w-[23px] h-[18px]" svg={CountryIcons["ka"]} />
                <h3 className="text-[14px] uppercase font-bold font-inter">
                  ka
                </h3>
              </div>
            ),
            onClick: () =>
              handleLanguageChange("ka", i18n, currentPathname, router),
          },
          {
            label: (
              <div className="flex justify-between gap-[15px]">
                <Icon className="w-[23px] h-[18px]" svg={CountryIcons["ru"]} />
                <h3 className="text-[14px] uppercase font-bold font-inter">
                  RU
                </h3>
              </div>
            ),
            onClick: () =>
              handleLanguageChange("ru", i18n, currentPathname, router),
          },
        ]}
        label={
          <div className="flex gap-[5px]">
            <Icon
              className="w-[23px] h-[18px]"
              svg={CountryIcons[i18n.language as "en" | "ka" | "ru"]}
            />
            <p className="uppercase">{i18n.language}</p>
          </div>
        }
      />
    </div>
  );
};
