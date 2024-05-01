"use client";
import React from "react";
import { SectionContainer } from "../SectionContainer";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { handleCopy } from "../shared/handleCopy";
import { ActivePlayersTable_Provider } from "../Tables/ActivePlayersTable_Provider";
import { VipGamesSidebarComponent } from "../shared/VipGamesSidebarComponent";

const dummyData = [
  {
    game: "Counter-Strike",
    logo: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/f75dd04fa12445a8ec43be65fa16ff1b8d2bf82e.jpg",
    data: [
      {
        game: "CS:GO",
        serverName: "Official Server #1234",
        map: "de_dust2",
        players: "Player1, Player2, Player3, Player4",
        country:"GE"
      },
      {
        game: "CS:GO",
        serverName: "Casual Server #5678",
        map: "de_inferno",
        players: "Player5, Player6, Player7, Player8",
        country:"GE"
      },
      {
        game: "CS:GO",
        serverName: "Competitive Server #999",
        map: "de_mirage",
        players: "Player9, Player10, Player11, Player12",
        country:"GE"
      },
    ],
  },
  {
    game: "League of Legends",
    logo: "https://www.svgrepo.com/show/504812/riot-mobile.svg",
    data: [
      {
        game: "LoL",
        serverName: "NA Server",
        map: "Summoner's Rift",
        players: "PlayerA, PlayerB, PlayerC, PlayerD",
        country:"GE"
      },
      {
        game: "LoL",
        serverName: "EUW Server",
        map: "Twisted Treeline",
        players: "PlayerX, PlayerY, PlayerZ",
        country:"GE"
      },
      {
        game: "LoL",
        serverName: "KR Server",
        map: "Howling Abyss",
        players: "PlayerK1, PlayerK2, PlayerK3, PlayerK4",
        country:"GE"
      },
    ],
  },
];

export const ServerPageBody = () => {
  return (
    <SectionContainer className=" m-components_distance flex gap-[25px]">
      <div className="flex-grow dark:bg-gray-40 bg-white">
        <header className="flex items-center justify-between py-[13px] border-b-[1px] border-b-gray px-[10px]">
          <h2 className="font-semibold text-[20px] dark:text-white">
            Server Details
          </h2>
          <PrimaryButton variant="third">Boost server</PrimaryButton>
        </header>
        <div className="p-[10px]">
          <div className="flex sm:flex-row flex-col gap-[10px]">
            <div className="relative sm:w-[331px] w-full h-[160px]">
              <Image
                src={"/images/maps/dust2.webp"}
                alt="Server_Map"
                fill
                className="object-cover rounded-[8px]"
              />
            </div>
            <div className="flex flex-col gap-[10px] border-b-[1px] border-b-gray flex-grow">
              <h2 className="text-[23px] font-medium dark:text-white">
                [EU] .:MAPEADORES:. CS2 ZOMBIE ESCAPE
              </h2>
              <ul className="flex flex-col gap-[5px] text-[14px]">
                <li className="flex gap-[5px]">
                  <h4 className="text-text_gray font-bold uppercase">IP:</h4>
                  <h4
                    className="text-light_primary font-bold cursor-pointer"
                    data-tooltip-id="iptooltip"
                    data-tooltip-content="Copy Ip"
                    onClick={() => handleCopy("10.10.10.10")}
                  >
                    10.10.10.10
                  </h4>
                  <Tooltip id="iptooltip" />
                </li>
                <li className="flex gap-[5px]">
                  <h4 className="text-text_gray font-bold uppercase">Port:</h4>
                  <h4
                    className="text-light_primary font-bold cursor-pointer"
                    data-tooltip-id="iptooltip"
                    data-tooltip-content="Copy Ip"
                    onClick={() => handleCopy("10.10.10.10")}
                  >
                    2534
                  </h4>
                </li>
                <li className="flex gap-[5px]">
                  <h4 className="text-text_gray font-bold uppercase">MAP:</h4>
                  <h4
                    className="text-light_primary font-bold cursor-pointer"
                    data-tooltip-id="iptooltip"
                    data-tooltip-content="Copy Ip"
                    onClick={() => handleCopy("10.10.10.10")}
                  >
                    De_Dust2
                  </h4>
                </li>
                <li className="flex gap-[5px]">
                  <h4 className="text-text_gray font-bold uppercase">
                    Players:
                  </h4>
                  <h4
                    className="text-light_primary font-bold cursor-pointer"
                    data-tooltip-id="iptooltip"
                    data-tooltip-content="Copy Ip"
                    onClick={() => handleCopy("10.10.10.10")}
                  >
                    24/64
                  </h4>
                </li>
                <li className="flex gap-[5px]">
                  <h4 className="text-text_gray font-bold uppercase">
                    Server Owner:
                  </h4>
                  <h4
                    className="text-light_primary font-bold cursor-pointer capitalize"
                    data-tooltip-id="iptooltip"
                    data-tooltip-content="Copy Ip"
                    onClick={() => handleCopy("10.10.10.10")}
                  >
                    @username
                  </h4>
                </li>
              </ul>
            </div>
          </div>
          <ul className="flex w-full flex-col gap-[5px] dark:text-white font-medium text-[18px] border-b-[1px] border-b-gray pb-[10px]">
            <h1>Server Links</h1>
            <li>
              Website{" "}
              <span className="text-light_primary">https://web.com</span>
            </li>
            <li>
              Discord{" "}
              <span className="text-light_primary">https://discord.com</span>
            </li>
            <li>
              Website{" "}
              <span className="text-light_primary"> https://youtube.com</span>
            </li>
          </ul>
          <div className="pt-[10px] flex flex-col gap-[15px]">
            <h1 className="text-[19px] text-white font-medium">
              Server Information
            </h1>
            <h5 className=" whitespace-pre-line text-[16px] dark:text-white">
              {`Welcome to our CS:GO community server! Please abide by the following rules to ensure a fun and fair gaming experience for everyone:
            1. Respect: Treat all players with kindness and respect, regardless of skill level or background.
            2. No Cheating: Cheating, hacking, or using any third-party software to gain an unfair advantage is strictly prohibited.
            3. Teamwork: Coordinate with your team and communicate effectively to achieve victory.
            4. No Toxicity: Avoid toxic behavior such as harassment, hate speech, or excessive trash-talking.
            5. Follow Admin Instructions: Listen to server admins and moderators, and comply with their instructions.
            6. No Spamming or Advertising: Keep chat clear of spam, advertisements, or irrelevant content.
            7. Play Fair: Play the game fairly and avoid exploiting glitches or bugs.
            8. Use English in Chat: English is the primary language for communication in the server's chat.   
            Failure to comply with these rules may result in warnings, kicks, or bans. Have fun and enjoy your time in our CS:GO community!`}
            </h5>
          </div>
          <ActivePlayersTable_Provider />
        </div>
      </div>
      <div className="sticky top-0 min-w-[340px]  flex-col gap-[10px] md:flex hidden ">
        {dummyData.map((dat) => (
          <VipGamesSidebarComponent
            data={dat.data}
            game={dat.game}
            logo={dat.logo}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
