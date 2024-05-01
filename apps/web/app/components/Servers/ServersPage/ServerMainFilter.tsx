"use client";
import React, { useEffect, useRef, useState } from "react";
import { SectionContainer } from "../../SectionContainer";
import { PrimaryInput } from "../../Inputs/TextField/PrimaryInput";
import { useServersFilter } from "@/app/hooks/useServersFilter";
import { Icon } from "@/app/styles/Icon";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";
import { PrimaryDropdown } from "../../Dropdowns/PrimaryDropdown";
import { PrimarySwitch } from "../../Inputs/Switch/PrimarySwitch";
import useMediaQuery, { screenSizes } from "@/app/hooks/useMediaQuery";
import { useTranslation } from "react-i18next";

// Array of countries
const countries: string[] = [
  "United States",
  "Canada",
  "Brazil",
  "United Kingdom",
  "Germany",
  "France",
  "Japan",
  "China",
  "Australia",
  "India",
  "Russia",
  "Mexico",
  "South Korea",
  "Italy",
  "Spain",

];
const games = [
  {
    id: "1",
    name: "Counter-Strike: Global Offensive",
    banner:
      "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1698860631",
  },
  {
    id: "2",
    name: "League of Legends",
    banner:
      "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b",
  },
  {
    id: "3",
    name: "Dota 2",
    banner:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg",
  },
  {
    id: "4",
    name: "Valorant",
    banner:
      "https://cdn.mos.cms.futurecdn.net/YHdtAs36hSJUL56Lq2nxFi-1200-80.jpg",
  },
  {
    id: "5",
    name: "Apex Legends",
    banner:
      "https://cdn.akamai.steamstatic.com/steam/apps/1172470/capsule_616x353.jpg?t=1712869091",
  },
  {
    id: "7",
    name: "Call of Duty: Warzone",
    banner:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/wz/overview/WZPLP_Hero.webp",
  },
];

export const ServerMainFilter = () => {
  const {t} = useTranslation()
  const [isSmallScreensMenuOpen, setSmallScreensMenuOpen] = useState(false);
  const { setData, name, hidefull, hideempty, anticheat,game,country } = useServersFilter();
  const isAboveSmallScreens = useMediaQuery(screenSizes.smallScreens);
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (isSmallScreensMenuOpen) {
      const handleOutsideClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          setSmallScreensMenuOpen(false);
        }
      };

      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }
  }, [isSmallScreensMenuOpen]);


  return (
    <SectionContainer className="m-components_distance w-full">
      <div
        className={` bg-gray-40 p-[10px]  flex items-center relative rounded-[14px] sm:gap-0 gap-[50px] ${isSmallScreensMenuOpen && "rounded-b-none"}`}
      >
        <div className="flex items-center gap-[15px] sm:w-fit w-full">
          <h4 className="text-[18px] font-semibold text-[#ffffff69] sm:inline hidden">
            {t('filters')}:
          </h4>
          <PrimaryInput
            id="Search"
            name="Search"
            placeholder="Search by hostname or map...."
            value={name}
            onChange={(e) => {
              setData({
                name: e.target.value,
              });
            }}
            parentClassName="xs:h-[40px] h-[38px] rounded-[6px] flex-grow lg:w-[400px] sm:w-[220px] w-full"
            leftSvg={() => (
              <div className="dark:bg-[#ffffff05] h-full flex justify-center items-center rounded-l-[6px] px-[12px]">
                <Icon
                  svg={WebsiteIcons["search"]}
                  className="w-[18px] h-[18px]"
                />
              </div>
            )}
            className="w-full rounded-l-none h-[40px] dark:bg-[#ffffff05] "
          />
        </div>
        <div className="flex-grow flex items-center gap-[7px]">
          {isAboveSmallScreens && (
            <React.Fragment>
              <PrimaryDropdown
                label={
                  <div className="text-[#ffffffa8] flex gap-[5px] items-center">
                    <Icon
                      svg={WebsiteIcons["flag"]}
                      className="w-[28px] h-[28px]"
                    />{" "}
                    {country ? country :t('country')}
                  </div>
                }
                data={countries.map((country) => ({
                  onClick: () => setData({ country }),
                  label: country,
                }))}
                childClassName="text-[12px]"
                childContainerClassName="!bg-gray max-h-[300px]"
                searchable
              />
              <PrimaryDropdown
                label={
                  <div className="text-[#ffffffa8] flex gap-[5px] items-center">
                    <Icon
                      svg={WebsiteIcons["game"]}
                      className="w-[28px] h-[28px]"
                    />{" "}
                    {game ?  game.name : t('games')}
                  </div>
                }
                data={games.map((game) => ({
                  onClick: () => setData({ game }),
                  label: game.name,
                }))}
                childClassName="text-[12px]"
                childContainerClassName="!bg-gray max-h-[300px]"
                searchable
              />
            </React.Fragment>
          )}

            <div
              className="ml-auto py-[10px] px-[8px] bg-secondary rounded-[10px] cursor-pointer"
              onClick={() => setSmallScreensMenuOpen((prev) => !prev)}  >
              <Icon svg={WebsiteIcons["hamburger_second"]} />
            </div>

        </div>
        {isSmallScreensMenuOpen  && (
          <div ref={ref} className="absolute top-[60px] w-fit right-0 bg-primary_second z-[1]  rounded-b-[14px] py-[10px] px-[10px] flex flex-col gap-[10px]">
            <div className="flex gap-[10px] justify-start items-center flex-wrap">
              
            <PrimarySwitch
              id="hidefull"
              isTrue={hidefull}
              setIsTrue={() => setData({ hidefull: !hidefull })}
              label={t('Servers:hidefull')}
              />
            <PrimarySwitch
              id="hideempty"
              isTrue={hideempty}
              setIsTrue={() => setData({ hideempty: !hideempty })}
              label={t('Servers:hideempty')}
              />
            <PrimarySwitch
              id="anticheat"
              isTrue={anticheat}
              setIsTrue={() => setData({ anticheat: !anticheat })}
              label={t('Servers:anticheat')}
              />
              </div>
            {!isAboveSmallScreens && (
              <React.Fragment >
                <PrimaryDropdown
                  label={
                    <div className="text-[#ffffffa8] flex gap-[5px] items-center">
                      <Icon
                        svg={WebsiteIcons["flag"]}
                        className="w-[28px] h-[28px]"
                      />{" "}
                      {t('country')}
                    </div>
                  }
                  data={countries.map((country) => ({
                    onClick: () => setData({ country }),
                    label: country,
                  }))}
                  childClassName="text-[12px]"
                  childContainerClassName="!bg-gray max-h-[300px]"
                  searchable
                />
                     <PrimaryDropdown
                label={
                  <div className="text-[#ffffffa8] flex gap-[5px] items-center">
                    <Icon
                      svg={WebsiteIcons["game"]}
                      className="w-[28px] h-[28px]"
                    />{" "}
                    {t('games')}
                  </div>
                }
                data={games.map((game) => ({
                  onClick: () => setData({ game }),
                  label: game,
                }))}
                childClassName="text-[12px]"
                childContainerClassName="!bg-gray max-h-[300px]"
              />
              </React.Fragment>
            )}
          </div>
        )}
      </div>
    </SectionContainer>
  );
};
