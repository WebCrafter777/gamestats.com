"use client";

import { Icon } from "@/app/styles/Icon";
import { ArrowIcons } from "@/public/svg/ArrowIcons";
import Link from "next/link";

interface News {
  name: string;
  id: string;
}

export const NewsSidebar = ({ news }: { news: News[] }) => {
  return (
    <div className={``}>
      <div className="px-[10px] py-[12px] bg-gray2 text-white shadow-lg">
        <h1 className="font-semibold font-roboto text-[18px]">Quick Links</h1>
      </div>
      <div className="dark:bg-[#ffffff15] bg-white px-[12px] py-[14px] dark:text-white text-black flex flex-col gap-[15px] cursor-pointer">
        {news.map((comp) => (
          <Link href={`/forum/${comp.id}/${comp.name.replaceAll(' ','-')}`} className="flex justify-between items-center">
            <div className="flex gap-[7px]">
              <h1 className="text-[13px] font-medium">{comp.name.slice(0,25)}</h1>
            </div>
            <div className="p-[7px] bg-gray2">
              <Icon
                svg={ArrowIcons["arrow_right_white"]}
                className="md:w-[14px] sm:h-[14px] w-[13px] h-[13px]"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
