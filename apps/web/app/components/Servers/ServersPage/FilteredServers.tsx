'use client'
import { useServersFilter } from '@/app/hooks/useServersFilter'
import React, { useEffect, useState } from 'react'
import { SectionContainer } from '../../SectionContainer'
import { ServerComponent_Row } from '../ServerComponent_Row'

export const FilteredServers = () => {
  const {hideempty,hidefull,anticheat,country,region,name,game} = useServersFilter() 
  const [filteredServers,setFilteredServers] = useState(serversDummyData)  
  useEffect(()=>{
    let filtered = serversDummyData
    if(game && game.id){      
        filtered = filtered.filter(server=>server.game === game.id)
    }
    if(hideempty){
        filtered = filtered.filter(server=>server.players !== 0)
    }
    if(hidefull){
        filtered = filtered.filter(server=>server.maxPlayers !== server.players)
    }
    if(anticheat){
        filtered = filtered.filter(server=> server.antiCheat)
    }
    if(country){
        filtered = filtered.filter(server=>server.country === country)
    }
    if(name){
        filtered = filtered.filter(server=>server.name.includes(name))
    }
    setFilteredServers(filtered)
  },[hideempty,hidefull,anticheat,name,country,region,game])
  
  return (
    <SectionContainer className='m-components_distance'>
        <div className='bg-gray-40 border-[1px] border-[#ffffff60] py-[20px] px-[21px] rounded-[10px] flex flex-col gap-[10px]'>
            {filteredServers.length > 0 ?
                filteredServers.map(server=>(
                    <ServerComponent_Row
                    tier='normal'
                    key={server.ip}
                        {...server}
                    />
                ))
                :
                <div className='flex justify-center items-center text-[25px]  text-white uppercase font-bold tracking-wide'>
                    Servers not found
                </div>
            }
        </div>
    </SectionContainer>
  )
}


const serversDummyData = [
    {
      id: "1",
      alpha3: "GE",
      country: "Georgia",
      name: "GE_CS_Player_1",
      players: 5,
      maxPlayers: 10,
      ip: "192.168.1.1",
      map: "Map_1",
      game: "1", 
      antiCheat:false
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
      game: "2",
      antiCheat:false
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
      antiCheat:false
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
      antiCheat:false
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
      antiCheat:false
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
      antiCheat:false
    },
  ];
  