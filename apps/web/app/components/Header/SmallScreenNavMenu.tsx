"use client";

import { Icon } from "@/app/styles/Icon";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { PrimaryDropdown } from "../Dropdowns/PrimaryDropdown";
import { handleLanguageChange } from "./LargeScreensNavbarContent";
import { CountryIcons } from "@/public/svg/CountryIcons";
import { usePathname, useRouter } from "next/navigation";
import { DarkModeToggle } from "./Navbar";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { useRegistrationModal } from "@/app/hooks/useRegistrationModal";
import { ArrowIcons } from "@/public/svg/ArrowIcons";
import { useSession } from "next-auth/react";
import Image from "next/image";

const NavLink = ({
  to,
  label,
  isLast,
  onClick,
}: {
  to: string;
  label: string;
  isLast: boolean;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={to}
      className={`md:text-[22px] text-[16px] uppercase font-medium flex justify-between items-center py-[10px] ${isLast ? "" : "border-b-[1px] border-b-gray"} peer-last:border-none`}
      onClick={onClick ? onClick : () => {}}
    >
      {label}
      <div className="p-[10px] bg-gray rounded-[10px]">
        <Icon
          svg={ArrowIcons["arrow_right_white"]}
          className="md:w-[20px] sm:h-[20px] w-[16px] h-[16px]"
        />
      </div>
    </Link>
  );
};

export const SmallScreenNavMenu = ({
  changeNavOpen,
}: {
  changeNavOpen: (val: boolean) => void;
}) => {
  const { t, i18n } = useTranslation();
  const currentPathname = usePathname();
  const router = useRouter();
  const navLinks = [
    { to: "/", label: t("home") },
    { to: "/servers", label: t("servers") },
    { to: "/games", label: t("games") },
    { to: "/forum", label: t("forum") },
  ];
  const { onOpen: openLoginModal } = useLoginModal();
  const { onOpen: openRegisterModal } = useRegistrationModal();
  const { data, status } = useSession();

  return (
    <div className="h-fit w-full px-[22px] py-[10px] dark:bg-gray2 bg-white peer flex flex-col gap-[20px] dark:text-white text-black absolute inset-0 z-[150]">
      <div className="flex flex-col ">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            label={link.label}
            isLast={index === navLinks.length - 1}
            onClick={() => changeNavOpen(false)}
          />
        ))}
      </div>
      {status !== "loading" ? (
        status === "unauthenticated" || data === null ? (
          <div className="w-full flex gap-[10px] xs:flex-row flex-col">
            <PrimaryButton
              className="w-full  text-[20px] !py-[10px] !font-medium"
              onClick={() => {
                openLoginModal();
              }}
            >
              {t("signin")}
            </PrimaryButton>
            <PrimaryButton
              className="w-full text-[20px] !py-[10px] !font-medium"
              variant="secondary"
              onClick={openRegisterModal}
            >
              {t("signup")}
            </PrimaryButton>
          </div>
        ) : (
          <div className="flex justify-between items-center py-[5px] px-[10px] border-[1px] border-solid border-gray rounded-[7px]">
            <h4 className="text-[21px]">{data.user.username}</h4>
            <div className="relative w-[45px] h-[45px]">
              <Image
                src={
                  data.user.profile_image
                    ? data.user.profile_image
                    : "/images/user/userPlaceholder2.webp"
                }
                alt={`ProfileImage`}
                className="rounded-full"
                fill
              />
            </div>
          </div>
        )
      ) : null}
      <PrimaryDropdown
        variant="secondary"
        data={[
          {
            label: (
              <div className="flex justify-between">
                <div className="flex gap-[5px] items-center">
                  <Icon
                    className="w-[23px] h-[18px]"
                    svg={CountryIcons["en"]}
                  />
                  <h2 className="text-[15px]">{t("english")}</h2>
                </div>
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
              <div className="flex justify-between">
                <div className="flex gap-[5px] items-center">
                  <Icon
                    className="w-[23px] h-[18px]"
                    svg={CountryIcons["ka"]}
                  />
                  <h2 className="text-[15px]">{t("georgian")}</h2>
                </div>
                <h3 className="text-[14px] uppercase font-bold font-inter">
                  Ge
                </h3>
              </div>
            ),
            onClick: () =>
              handleLanguageChange("ka", i18n, currentPathname, router),
          },
          {
            label: (
              <div className="flex justify-between">
                <div className="flex gap-[5px] items-center">
                  <Icon
                    className="w-[23px] h-[18px]"
                    svg={CountryIcons["ru"]}
                  />
                  <h2 className="text-[15px]">{t("russian")}</h2>
                </div>
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
          <div className="flex gap-[5px] items-center">
            <Icon
              className="w-[23px] h-[18px]"
              svg={CountryIcons[i18n.language as "en" | "ka" | "ru"]}
            />
            {t("language")}
          </div>
        }
      />
      <DarkModeToggle />
    </div>
  );
};
