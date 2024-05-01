"use client";

import { Icon } from "@/app/styles/Icon";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";
import React, { useState } from "react";
import { PrimaryInput } from "../../Inputs/TextField/PrimaryInput";
import Link from "next/link";

export const ForumPageSideBar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="md:w-[420px] w-full flex flex-col gap-[10px] md:order-none order-first">
      <div className="flex flex-col w-full bg-gray-40 border-gray border-[1px] rounded-[10px] p-[10px] order-first">
        <div>
          <p className="text-white not-italic text-[16px] font-medium">
            Search By Topic:
          </p>
        </div>
        <div className="mt-[5px]">
          <PrimaryInput
            id="search"
            name="search"
            variant="secondary"
            className="border-none rounded-l-none h-[50px]"
            placeholder="Search for forum topic..."
            leftSvg={() => (
              <div className="px-[10px] bg-[#4343437a]  flex justify-center items-center h-[50px] rounded-l-[5px]">
                <Icon
                  svg={WebsiteIcons["search"]}
                  className="w-[16px] h-[16px]"
                />
              </div>
            )}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col w-full bg-gray-40 border-gray border-[1px] rounded-[10px] p-[10px] gap-[10px]">
        <div className="p-[5px]">
          <p className="text-white not-italic text-[17px]">Popular Tags</p>
        </div>
        <div className="p-[5px] bg-gray-40 border-[1px] border-gray rounded-[5px] flex flex-col gap-[10px] max-h-[300px] overflow-y-auto ">
          <div className="flex items-center gap-[10px] p-[3px]">
            <Icon svg={WebsiteIcons["planet"]} className="w-[20px] h-[20px]" />
            <p className="text-white not-italic text-[16px]">
              General Discussion
            </p>
          </div>
          <Link href={'/tos'} className="flex items-center gap-[10px] p-[3px]">
            <Icon svg={WebsiteIcons["planet"]} className="w-[20px] h-[20px]" />
            <p className="text-white not-italic text-[16px]">Guides and FAQ</p>
          </Link>
          <div className="flex items-center gap-[10px] p-[3px]">
            <Icon svg={WebsiteIcons["planet"]} className="w-[20px] h-[20px]" />
            <p className="text-white not-italic text-[16px]">General Help</p>
          </div>
          <div className="flex items-center gap-[10px] p-[3px]">
            <Icon svg={WebsiteIcons["planet"]} className="w-[20px] h-[20px]" />
            <p className="text-white not-italic text-[16px]">
              Ideas & Requests
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full bg-gray-40 border-gray border-[1px] rounded-[10px] p-[10px] gap-[10px]">
        <div className="p-[5px]">
          <p className="text-white not-italic text-[17px]">Game Forums</p>
        </div>
        <div className="p-[10px] bg-gray-40 border-[1px] border-gray rounded-[5px] flex flex-col gap-[10px] max-h-[300px] overflow-y-auto ">
          <div className="flex items-center gap-[30px] p-[3px]">
            <Icon
              svg={WebsiteIcons["csgo_logo"]}
              className="w-[20px] h-[20px]"
            />
            <p className="text-white not-italic text-[16px]">
              Counter Strike 1.6
            </p>
          </div>
          <div className="flex items-center gap-[30px] p-[3px]">
            <Icon
              svg={WebsiteIcons["csgo_logo"]}
              className="w-[20px] h-[20px]"
            />
            <p className="text-white not-italic text-[16px]">
              Counter Strike 1.6
            </p>
          </div>
          <div className="flex items-center gap-[30px] p-[3px]">
            <Icon
              svg={WebsiteIcons["csgo_logo"]}
              className="w-[20px] h-[20px]"
            />
            <p className="text-white not-italic text-[16px]">
              Counter Strike 1.6
            </p>
          </div>
          <div className="flex items-center gap-[30px] p-[3px]">
            <Icon
              svg={WebsiteIcons["csgo_logo"]}
              className="w-[20px] h-[20px]"
            />
            <p className="text-white not-italic text-[16px]">
              Counter Strike 1.6
            </p>
          </div>
          <div className="flex items-center gap-[30px] p-[3px]">
            <Icon
              svg={WebsiteIcons["csgo_logo"]}
              className="w-[20px] h-[20px]"
            />
            <p className="text-white not-italic text-[16px]">
              Counter Strike 1.6
            </p>
          </div>
          <div className="flex items-center gap-[30px] p-[3px]">
            <Icon
              svg={WebsiteIcons["csgo_logo"]}
              className="w-[20px] h-[20px]"
            />
            <p className="text-white not-italic text-[16px]">
              Counter Strike 1.6
            </p>
          </div>
          <div className="flex items-center gap-[30px] p-[3px]">
            <Icon
              svg={WebsiteIcons["csgo_logo"]}
              className="w-[20px] h-[20px]"
            />
            <p className="text-white not-italic text-[16px]">
              Counter Strike 1.6
            </p>
          </div>
          <div className="flex items-center gap-[30px] p-[3px]">
            <Icon
              svg={WebsiteIcons["csgo_logo"]}
              className="w-[20px] h-[20px]"
            />
            <p className="text-white not-italic text-[16px]">
              Counter Strike 1.6
            </p>
          </div>
          <div className="flex items-center gap-[30px] p-[3px]">
            <Icon
              svg={WebsiteIcons["csgo_logo"]}
              className="w-[20px] h-[20px]"
            />
            <p className="text-white not-italic text-[16px]">
              Counter Strike 1.6
            </p>
          </div>
          <div className="flex items-center gap-[30px] p-[3px]">
            <Icon
              svg={WebsiteIcons["csgo_logo"]}
              className="w-[20px] h-[20px]"
            />
            <p className="text-white not-italic text-[16px]">
              Counter Strike 1.6
            </p>
          </div>
          <div className="flex items-center gap-[30px] p-[3px]">
            <Icon
              svg={WebsiteIcons["csgo_logo"]}
              className="w-[20px] h-[20px]"
            />
            <p className="text-white not-italic text-[16px]">
              Counter Strike 1.6
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
