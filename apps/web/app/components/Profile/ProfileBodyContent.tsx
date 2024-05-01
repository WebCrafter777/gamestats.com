"use client";
import React from "react";
import { SectionContainer } from "../SectionContainer";
import { ForumPost_Row } from "../Forum/ForumPost_Row";
import { QuickLinks } from "../shared/QuickLinks";
import { Icon } from "@/app/styles/Icon";
import { ArrowIcons } from "@/public/svg/ArrowIcons";
import Link from "next/link";
import Image from "next/image";
import useMediaQuery, { screenSizes } from "@/app/hooks/useMediaQuery";

const dummyForumData = [
  {
      "image": "/images/maps/dust2.webp",
      "title": "The Impact of Artificial Intelligence on Future Job Markets",
      "description": "An exploration of the effects of artificial intelligence on the job market of the future, discussing potential challenges and opportunities.",
      "tags": ["AI", "future", "job-market"],
      "author": {
          "name": "Sarah Johnson"
      },
      "views": 500,
      "likes": 80,
      "comments": 25
  },
  {
      "image": "/images/maps/dust2.webp",
      "title": "Exploring the Potential of Blockchain Technology in Supply Chain Management",
      "description": "An in-depth analysis of how blockchain technology can revolutionize supply chain management, focusing on its potential applications and benefits.",
      "tags": ["blockchain", "supply-chain", "technology"],
      "author": {
          "name": "Michael Brown"
      },
      "views": 350,
      "likes": 45,
      "comments": 18
  },
  {
      "image": "/images/maps/dust2.webp",
      "title": "Tips for Effective Remote Team Collaboration",
      "description": "Practical tips and strategies for enhancing collaboration among remote teams, addressing common challenges and maximizing productivity.",
      "tags": ["remote-work", "team-collaboration", "tips"],
      "author": {
          "name": "Emily Wilson"
      },
      "views": 280,
      "likes": 55,
      "comments": 20
  },
  {
      "image": "/images/maps/dust2.webp",
      "title": "The Role of Data Analytics in Improving Customer Experience",
      "description": "An examination of how data analytics can be leveraged to enhance customer experience, with insights into effective strategies and tools.",
      "tags": ["data-analytics", "customer-experience", "analysis"],
      "author": {
          "name": "David Lee"
      },
      "views": 400,
      "likes": 70,
      "comments": 30
  },
  {
      "image": "/images/maps/dust2.webp",
      "title": "Climate Change: Addressing the Challenges and Opportunities",
      "description": "A discussion on the challenges posed by climate change and the opportunities for sustainable solutions, highlighting key areas for action.",
      "tags": ["climate-change", "environment", "sustainability"],
      "author": {
          "name": "Anna Martinez"
      },
      "views": 600,
      "likes": 90,
      "comments": 35
  },
  {
      "image": "/images/maps/dust2.webp",
      "title": "The Future of Renewable Energy Sources",
      "description": "An exploration of the future prospects of renewable energy sources, examining technological advancements and their implications for sustainability.",
      "tags": ["renewable-energy", "future", "sustainability"],
      "author": {
          "name": "Daniel Smith"
      },
      "views": 450,
      "likes": 75,
      "comments": 28
  }
]



const AddedServersComponent = () => {
  return (
    <div className="">
      <div className="px-[10px] py-[12px] bg-gray2 text-white shadow-lg">
        <h1 className="font-semibold font-roboto text-[18px]">Added Servers</h1>
      </div>
      <div className="dark:bg-[#ffffff15] bg-white px-[12px] py-[14px] dark:text-white text-black flex flex-col gap-[15px] cursor-pointer">
        <Link
          href={"/servers/csgo"}
          className="flex justify-between items-center"
        >
          <div className="flex items-center gap-[7px]">
            <div className="relative w-[30px] h-[30px]">
              <Image
                src={
                  "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/f75dd04fa12445a8ec43be65fa16ff1b8d2bf82e.jpg"
                }
                alt="cs go"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-[16px] font-medium">10.10.10.10</h1>
          </div>
          <div className="p-[7px] bg-gray2">
            <Icon
              svg={ArrowIcons["arrow_right_white"]}
              className="md:w-[14px] sm:h-[14px] w-[13px] h-[13px]"
            />
          </div>
        </Link>
        <Link
          href={"/servers/csgo"}
          className="flex justify-between items-center"
        >
          <div className="flex items-center gap-[7px]">
            <div className="relative w-[30px] h-[30px]">
              <Image
                src={
                  "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/f75dd04fa12445a8ec43be65fa16ff1b8d2bf82e.jpg"
                }
                alt="cs go"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-[16px] font-medium">10.10.10.10</h1>
          </div>
          <div className="p-[7px] bg-gray2">
            <Icon
              svg={ArrowIcons["arrow_right_white"]}
              className="md:w-[14px] sm:h-[14px] w-[13px] h-[13px]"
            />
          </div>
        </Link>
        <Link
          href={"/servers/csgo"}
          className="flex justify-between items-center"
        >
          <div className="flex items-center gap-[7px]">
            <div className="relative w-[30px] h-[30px]">
              <Image
                src={
                  "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/f75dd04fa12445a8ec43be65fa16ff1b8d2bf82e.jpg"
                }
                alt="cs go"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-[16px] font-medium">10.10.10.10</h1>
          </div>
          <div className="p-[7px] bg-gray2">
            <Icon
              svg={ArrowIcons["arrow_right_white"]}
              className="md:w-[14px] sm:h-[14px] w-[13px] h-[13px]"
            />
          </div>
        </Link>
        <Link
          href={"/servers/csgo"}
          className="flex justify-between items-center"
        >
          <div className="flex items-center gap-[7px]">
            <div className="relative w-[30px] h-[30px]">
              <Image
                src={
                  "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/f75dd04fa12445a8ec43be65fa16ff1b8d2bf82e.jpg"
                }
                alt="cs go"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-[16px] font-medium">10.10.10.10</h1>
          </div>
          <div className="p-[7px] bg-gray2">
            <Icon
              svg={ArrowIcons["arrow_right_white"]}
              className="md:w-[14px] sm:h-[14px] w-[13px] h-[13px]"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export const ProfileBodyContent = () => {
  const isAboveMediumScreens = useMediaQuery(screenSizes.mediumScreens);

  return (
    <SectionContainer className="flex md:flex-row flex-col gap-[25px] m-components_distance">
        {!isAboveMediumScreens && <AddedServersComponent />}
      <div className="h-fit flex-grow flex flex-col gap-[10px]">
        {dummyForumData.map((post) => (
          <ForumPost_Row className="w-full" {...post} />
        ))}
      </div>
      <div className="lg:w-[420px] md:w-[300px] w-full flex flex-col gap-[10px]">
        {isAboveMediumScreens && <AddedServersComponent />}
        <QuickLinks />
      </div>
    </SectionContainer>
  );
};
