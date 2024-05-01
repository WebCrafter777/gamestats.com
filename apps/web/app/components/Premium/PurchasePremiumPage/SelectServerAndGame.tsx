"use client";

import React, { useCallback, useMemo, useState } from "react";
import { SectionContainer } from "../../SectionContainer";
import { motion } from "framer-motion";
import { Icon } from "@/app/styles/Icon";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";
import { SearchGameInput } from "../../Inputs/SearchGameInput";
import { useTranslation } from "react-i18next";
import { PrimaryInput } from "../../Inputs/TextField/PrimaryInput";
import { PrimaryButton } from "../../Buttons/PrimaryButton";
import { Game_Row } from "../../Games/Game_Row";
import { ServerComponent_Row } from "../../Servers/ServerComponent_Row";
import { useFormik } from "formik";

const gameNames = [
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

const staticData = [
  {
    id: "1",
    alpha3: "GE",
    country: "Georgia",
    name: "GE_CS_Player_1",
    players: 5,
    maxPlayers: 10,
    ip: "192.168.1.1",
    map: "Map_1",
    game: "1", // Game ID for Counter-Strike: Global Offensive
  },
  {
    id: "2",
    alpha3: "GE",
    country: "Georgia",
    name: "GE_LOL_Player_2",
    players: 8,
    maxPlayers: 12,
    ip: "192.168.2.2",
    map: "Map_2",
    game: "2", // Game ID for League of Legends
  },
  // Add more objects as needed
  {
    id: "3",
    alpha3: "GE",
    country: "Georgia",
    name: "GE_Dota2_Player_3",
    players: 7,
    maxPlayers: 15,
    ip: "192.168.3.3",
    map: "Map_3",
    game: "3", // Game ID for Dota 2
  },
  {
    id: "4",
    alpha3: "GE",
    country: "Georgia",
    name: "GE_Valorant_Player_4",
    players: 6,
    maxPlayers: 20,
    ip: "192.168.4.4",
    map: "Map_4",
    game: "4", // Game ID for Valorant
  },
  // Add 30 more entries
  {
    id: "5",
    alpha3: "GE",
    country: "Georgia",
    name: "GE_ApexLegends_Player_5",
    players: 12,
    maxPlayers: 16,
    ip: "192.168.5.5",
    map: "Map_5",
    game: "5", // Game ID for Apex Legends
  },
  {
    id: "6",
    alpha3: "GE",
    country: "Georgia",
    name: "GE_Fortnite_Player_6",
    players: 9,
    maxPlayers: 14,
    ip: "192.168.6.6",
    map: "Map_6",
    game: "6",
  },
];

enum STEPS {
    GAME = 1,
    SERVER = 2,
    NEXT = 3,
  }
  
  export const SelectServerAndGame = ({
    values: { game, server },
    onChange,
    handleNextPage
  }: {
    values: { game: string | null; server: string | null };
    onChange: (comp: string, val: string | null) => void;
    handleNextPage:()=>void
  }) => {
    const [activeStep, setActiveStep] = useState<STEPS>(STEPS.GAME);
    const { t } = useTranslation();
  
    const [searchValues, setSearchValues] = useState({
      game: "",
      server: "",
    });
  
    const handleNextStep = useCallback(() => {
      const nextStep =
        activeStep !== STEPS.NEXT ? activeStep + 1 : activeStep;
      setActiveStep(nextStep);
    }, [activeStep, setActiveStep]);
  
    const handlePrevStep = useCallback(() => {
      const prevStep =
        activeStep !== STEPS.GAME ? activeStep - 1 : activeStep;
      setActiveStep(prevStep);
    }, [activeStep, setActiveStep]);

    const searchGame: typeof gameNames = useMemo(() => {
        if (searchValues.game) {
          let filtered = gameNames.filter((game) => {
            console.log(searchValues.game);
            return game.name
              .toLowerCase()
              .includes(searchValues.game.toLowerCase());
          });
    
          return filtered;
        } else {
          return gameNames;
        }
      }, [searchValues.game]);
    
      const searchServer: typeof staticData = useMemo(() => {
        if (server || game) {
          let filtered = staticData.filter((serv) => {
            let matchesServer = true;
            let matchesGame = true;
    
            if (searchValues.server) {
              matchesServer = serv.name
                .toLowerCase()
                .includes(searchValues.server.toLowerCase());
            }
    
            if (game) {
              matchesGame = serv.game === game;
            }
    
            return matchesServer && matchesGame;
          });
    
          return filtered;
        } else {
          return staticData;
        }
      }, [searchValues.server, game]);
    
    
  
  
  return (
    <div className="flex flex-col gap-[15px]">
      <div className=" dark:bg-gray-40 bg-white sm:pl-[26px] sm:py-[4px] sm:pr-[4px] rounded-[6px] flex items-center gap-[25px] w-full ">
        <h2 className="text-[16px] dark:text-white text-black font-bold capitalize sm:inline hidden">
          {t("searchforgame")}
        </h2>
        <div className="flex flex-grow">
          <PrimaryInput
            id="searchGame"
            name="searchGame"
            variant="secondary"
            value={searchValues.game}
            onChange={(e) =>
              setSearchValues((prev) => ({ ...prev, game: e.target.value }))
            }
            parentClassName="flex-grow"
            placeholder="Search by game name"
            className="rounded-r-none border-none"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-[10px] ">
        {searchGame.length > 0 ? (
          <React.Fragment>
            <h1 className="text-[30px] font-semibold flex items-center gap-[10px] dark:text-white">
              <Icon
                svg={WebsiteIcons["game_yellow"]}
                className="w-[40px] h-[40px]"
              />
              {t("selectgame")}
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full gap-x-[5px] gap-y-[6px]">
              {searchGame.map((insideGame) => (
                <Game_Row
                  active={insideGame.id === game}
                  onClick={() => {
                    if (insideGame.id !== game) {
                      onChange("game", insideGame.id);
                      onChange("server", null);
                      setActiveStep(STEPS.SERVER)    
                    } else {
                      setActiveStep(STEPS.GAME)                        
                      onChange("game", null);
                      onChange("server", null);
                    }
                  }}
                  className="!col-span-1"
                  {...insideGame}
                />
              ))}
            </div>
          </React.Fragment>
        ) : (
          <div className=" col-span-full flex justify-center items-center gap-[5px] w-full">
            <Icon
              svg={WebsiteIcons["sad_emoji"]}
              className="w-[30px] h-[30px]"
            />
            <h1 className="dark:text-white text-[22px] font-medium w-fit">
              No game found
            </h1>
          </div>
        )}
      </div>

      {activeStep >= STEPS.SERVER && (
        <React.Fragment>
          <div className=" dark:bg-gray-40 bg-white sm:pl-[26px] sm:py-[4px] sm:pr-[4px] rounded-[6px] flex items-center gap-[25px] w-full">
            <h2 className="text-[16px] dark:text-white text-black font-bold capitalize sm:inline hidden">
              {t("servers")} {t("search")}
            </h2>
            <div className="flex flex-grow">
              <PrimaryInput
                id="searchGame"
                name="searchGame"
                variant="secondary"
                value={searchValues.server}
                onChange={(e) =>
                  setSearchValues((prev) => ({
                    ...prev,
                    server: e.target.value,
                  }))
                }
                parentClassName="flex-grow"
                placeholder="Search by game name"
                className="rounded-r-none border-none"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-[10px]">
            {searchServer.length > 0 ? (
              <React.Fragment>
                <h1 className="text-[30px] font-semibold flex items-center gap-[10px] dark:text-white">
                  <Icon
                    svg={WebsiteIcons["server_yellow"]}
                    className="w-[40px] h-[40px]"
                  />
                  {t("selectserver")}
                </h1>
                <div className="w-full flex flex-col gap-x-[5px] gap-y-[6px]">
                  {searchServer.map((insideServer) => (
                    <div
                      className={`${insideServer.id === server && "border-[1px] border-yellow_loud"} rounded-[6px]`}
                      onClick={() => {
                        if (insideServer.id !== server) {
                          onChange("server", insideServer.id);
                          handleNextStep();
                        } else {
                          onChange("server", null);
                          setActiveStep(STEPS.SERVER)
                        }
                      }}
                    >
                      <ServerComponent_Row tier="normal" disabled {...insideServer} />
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ) : (
              <div className=" col-span-full flex justify-center items-center gap-[5px] w-full">
                <Icon
                  svg={WebsiteIcons["sad_emoji"]}
                  className="w-[30px] h-[30px]"
                />
                <h1 className="dark:text-white text-[22px] font-medium w-fit">
                  No server found
                </h1>
              </div>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
