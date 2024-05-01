"use client";

import React from "react";
import { SectionContainer } from "../SectionContainer";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { Icon } from "@/app/styles/Icon";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { useRegistrationModal } from "@/app/hooks/useRegistrationModal";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";
import { useTranslation } from "react-i18next";
import { Logo_Horizontal, Logo_Horizontal_Full } from "../Logo";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";

export const Navbar_Top = () => {
  const { onOpen: openLoginModal } = useLoginModal();
  const { onOpen: openRegisterModal } = useRegistrationModal();
  const { data, status } = useSession();
  const { t, i18n } = useTranslation();
  return (
    <header className="max-w-[1370px] mx-auto">
      <SectionContainer
        className="sm:pt-[10px] pt-0 w-full md:!bg-transparent dark:bg-gray2 bg-white pb-[10px] md:mb-[20px] border-b-gray border-b-[1px]
    flex items-center justify-between"
      >
        <Link href={"/"} className="!h-[50px] !w-[300px] relative">
          <Logo_Horizontal_Full />
        </Link>
        {status !== "loading" ? (
          status === "authenticated" ? (
            <div className="items-center gap-[5px] md:flex hidden">
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
          ) : (
            <div className="items-center gap-[20px] md:flex hidden">
              <p
                className="inline-block cursor-pointer w-fit dark:text-white"
                onClick={openLoginModal}
              >
                {t("signin")}
              </p>
              <span className="h-[20px] w-[2px] bg-brown lg:inline hidden" />
              <PrimaryButton
                className="flex items-center gap-[11px] !text-[13px]"
                onClick={openRegisterModal}
              >
                <Icon
                  svg={WebsiteIcons["auth"]}
                  className="w-[18px] h-[20px]"
                />
                {t("signup")}
              </PrimaryButton>
            </div>
          )
        ) : null}
      </SectionContainer>
    </header>
  );
};
