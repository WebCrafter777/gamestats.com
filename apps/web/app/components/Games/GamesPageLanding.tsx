'use client'

import React from 'react'
import { SectionContainer } from '../SectionContainer'
import { Game_Box } from './Game_Box';
import { useTranslation } from 'react-i18next';

const allGamesDummyData = [
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

const popularGamesDummyData = [
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



export const GamesPageLanding = () => {
  const {t} = useTranslation()
  return (
    <SectionContainer className='flex flex-col gap-[30px] mt-[39px] '>
        <div className='flex flex-col gap-[19px] items-center justify-center'>
            <h1 className='text-[34px] font-bold dark:text-white text-black '>{t('trending')}</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2  w-full gap-[10px]'>
                {
                    popularGamesDummyData.map(game=>(
                        <Game_Box key={game.id} className='col-span-1 sm:h-[233px] xs:h-[35vw] h-[150px]' {...game}/>
                    ))
                }
            </div>
        </div>
        <div className='flex flex-col gap-[19px] items-center justify-center'>
            <h1 className='text-[34px] font-bold dark:text-white text-black '>{t('allgames')}</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2   w-full gap-[10px]'>
                {
                    allGamesDummyData.map(game=>(
                        <Game_Box key={game.id} className='col-span-1 sm:h-[233px] xs:h-[35vw] h-[150px]' {...game}/>
                    ))
                }
            </div>
        </div>
    </SectionContainer>
  )
}
