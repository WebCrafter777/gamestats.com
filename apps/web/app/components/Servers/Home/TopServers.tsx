'use client'

import React from 'react'
import { SectionContainer } from '../../SectionContainer'
import { ServerComponent_Row } from '../ServerComponent_Row';
import { useTranslation } from 'react-i18next';

const serversDummyData = [
    {
        alpha3: "BE",
        country: "Belgium",
        name: "SANDERS [CS2] | SANDSTONE | BOOST +300 FPS | !SKINS !WS !KNIFE | BOOST +300 FPS | !SKINS !WS !KNIFE",
        players: 15,
        maxPlayers: 24,
        ip: "192.168.1.101",
        map: "De_Dust2",
        tier: 'premium'
    },
    {
        alpha3: "US",
        country: "United States",
        name: "Example US Server",
        players: 10,
        maxPlayers: 20,
        ip: "192.168.1.102",
        map: "Map Name",
        tier: 'vip+'
    },
    {
        alpha3: "DE",
        country: "Germany",
        name: "Example DE Server",
        players: 8,
        maxPlayers: 16,
        ip: "192.168.1.103",
        map: "Map Name",
        tier: 'normal'
    },
    {
        alpha3: "FR",
        country: "France",
        name: "Example FR Server",
        players: 12,
        maxPlayers: 22,
        ip: "192.168.1.104",
        map: "Map Name",
        tier: 'vip'
    },
    {
        alpha3: "GB",
        country: "United Kingdom",
        name: "Example UK Server",
        players: 20,
        maxPlayers: 40,
        ip: "192.168.1.105",
        map: "Map Name",
        tier: 'premium'
    },
    {
        alpha3: "IT",
        country: "Italy",
        name: "Example IT Server",
        players: 16,
        maxPlayers: 36,
        ip: "192.168.1.106",
        map: "Map Name",
        tier: 'vip+'
    },
    // Add more server objects here...
    // Dummy servers with tier 'normal'
    {
        alpha3: "AU",
        country: "Australia",
        name: "Example AU Server",
        players: 22,
        maxPlayers: 42,
        ip: "192.168.1.107",
        map: "Map Name",
        tier: 'normal'
    },
    {
        alpha3: "NL",
        country: "Netherlands",
        name: "Example NL Server",
        players: 18,
        maxPlayers: 38,
        ip: "192.168.1.108",
        map: "Map Name",
        tier: 'normal'
    },
    // Add more 'normal' servers here...
];

export const TopServers = () => {
    const { t } = useTranslation();

    const tierOrder:{[key:string]:number} = {
        'premium': 4,
        'vip+': 3,
        'vip': 2,
        'normal': 1
    };

    return (
        <SectionContainer className='m-components_distance'>
            <div className='dark:bg-[#ffffff10] bg-white rounded-[10px] py-[20px] sm:px-[21px] px-[8px] flex flex-col justify-center items-center gap-[24px] border-[1px] border-gray2 dark:border-[#ffffff3b]'>
                <h1 className='dark:text-white text-black text-[20px] font-bold'>{t('topservers',{number:15})}</h1>
                <div className='flex flex-col w-full gap-[10px]'>
                    {
                        serversDummyData.sort((a, b) => {
                            return tierOrder[b.tier] - tierOrder[a.tier];
                        }).map((server, index) => (
                            <ServerComponent_Row key={index} {...server} />
                        ))
                    }
                </div>
            </div>
        </SectionContainer>
    );
}