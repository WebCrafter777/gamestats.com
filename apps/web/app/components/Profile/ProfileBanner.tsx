import React from "react";
import { SectionContainer } from "../SectionContainer";
import Image from "next/image";
import { Icon } from "@/app/styles/Icon";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";
import { CountryIcons } from "@/public/svg/CountryIcons";

export const ProfileBanner = () => {
  return (
    <SectionContainer className="h-[400px] xs:px-auto px-0">
      <div className="relative h-full  flex flex-col justify-between xs:rounded-[20px] rounded-[0px]">
        <div className="flex justify-between relative z-[1] mt-3.5 w-full px-[20px] pt-[12px]">
          <div
            className="relative z-[2] flex flex-col w-[127px] h-[101px] rounded-lg pl-2 gap-y-1 justify-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          >
            <p className="text-white not-italic font-bold">
              Posts:<span className="text-amber-400">10</span>
            </p>
            <p className="text-white not-italic font-bold">
              Comments: <span className="text-amber-400">10</span>
            </p>
            <p className="text-white not-italic font-bold">
              Servers: <span className="text-white">4</span>
            </p>
          </div>
          <div></div>
        </div>

        <div className="flex xs:justify-between justify-start relative z-[1] px-[20px] pt-[12px] bg-gray-40 xs: rounded-b-[20px] xs:flex-row flex-col">
          <div className="flex gap-[10px] mb-5">
            <div className="relative w-[79px] h-[79px]">
              <Image
                fill
                src="/images/user/userPlaceholder2.webp"
                alt="Profile Banner Img"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center ml-2">
              <p className="text-white not-italic text-3xl font-semibold">
                Ashen One
              </p>
              <span className="text-amber-400 not-italic font-medium">
                User
              </span>
            </div>
          </div>

          {/* Second new div */}
          <div className="flex gap-2 justify-start items-center xs:order-none order-first xs:mb-0 mb-1 ">
            <div>
              <Icon svg={CountryIcons[`ka`]} className="w-[28px] h-[20px]" />
            </div>
            <div>
              <p className="text-white not-italic text-lg">Georgia</p>
            </div>
          </div>
        </div>
        {/* <Image
          fill
          src={"/images/banners/ProfileBanner.webp"}
          alt="Background"
          className="object-cover xs:rounded-[20px] rounded-[0px] "
        /> */}
        <div className="absolute w-full h-full bg-gradient-to-t from-transparent from-[0%] dark:to-[#ffffff63] to-[#000000ad]  xs:rounded-[20px] rounded-[0px] ">

        </div>
      </div>
    </SectionContainer>
  );
};
