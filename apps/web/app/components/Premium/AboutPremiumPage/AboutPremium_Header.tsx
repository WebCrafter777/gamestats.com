"use client";

import { Icon } from "@/app/styles/Icon";
import { SectionContainer } from "../../SectionContainer";
import { PremiumIcons } from "@/public/svg/PremiumIcons";
import { PrimaryButton } from "../../Buttons/PrimaryButton";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";
import Link from "next/link";

export const AboutPremium_Header = () => {
  return (
    <SectionContainer className="mt-[30px] flex flex-col items-center justify-center gap-[22px]">
      <Icon
        svg={PremiumIcons["premium_pearl"]}
        className="w-[204px] h-[204px]"
      />
      <div className="flex flex-col gap-[10px] w-full justify-center items-center">
        <h1 className="text-[38px] dark:text-white font-semibold">
          Buy Premium
        </h1>
        <div className="flex  flex-col justify-center items-center">
          <div className="sm:text-[30px] xs:text-[28px]  text-[24px] flex xs:gap-[10px] font-roboto xs:flex-row flex-col justify-center items-center">
            <span
              className="relative uppercase font-roboto w-fit
          after:left-0 after:top-0 after:bottom-0 after:my-auto after:absolute after:w-full after:h-[2px] after:bg-gray 
          text-gray"
            >
              5 USD
            </span>
            <h1 className="text-text_gray text-center">
              <span className="font-bold text-light_primary">1 USD </span>/
              day(24 hours){" "}
            </h1>
          </div>
          <p className="text-text_gray mb-[20px]">Limited Time!</p>
          <p className="text-text_gray max-w-[600px] text-center">
            Your premium server will be prominently featured in the "PREMIUM"
            block at the top of the site, ensuring maximum visibility to all
            visitors on ServersStats.
          </p>
        </div>
        <Link href={'/premium/purchase'}>
          <PrimaryButton className="uppercase text-[18px]" variant="gradient">
            Continue
          </PrimaryButton>
        </Link>
      </div>
      <ul className="w-full max-w-[1024px] py-[20px] border-t-[2px] border-t-gray flex md:flex-nowrap flex-wrap justify-center items-center gap-[10px]">
        <li className="text-[18px] font-medium text-text_gray flex gap-[6px] items-center cursor-pointer">
          <Icon svg={WebsiteIcons["tos"]} className="w-[18px] h-[18px]" />
          Terms of service
        </li>
        <li className="text-[18px] font-medium text-text_gray  cursor-pointer">
          <Link href={"#aboutPremium2"} className="flex gap-[6px] items-center">
            <Icon
              svg={WebsiteIcons["question"]}
              className="w-[24px] h-[24px]"
            />
            How to pay
          </Link>
        </li>
        <li className="text-[18px] font-medium text-text_gray flex gap-[6px] items-center cursor-pointer">
          <Icon svg={WebsiteIcons["phone"]} className="w-[24px] h-[24px]" />
          Contact
        </li>
      </ul>
    </SectionContainer>
  );
};
