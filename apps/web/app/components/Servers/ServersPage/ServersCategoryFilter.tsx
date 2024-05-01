"use client";

import React from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionContainer } from "../../SectionContainer";
import { useServersFilter } from "@/app/hooks/useServersFilter";

const staticData: { name: string; id: string }[] = [
  { name: "Deathmatch", id: "DNSJAD512edwaS" },
  { name: "Arms Race", id: "FASDHI234asdwQ" },
  { name: "Capture the Flag", id: "WQOPOD9213kdfA" },
  { name: "Team Deathmatch", id: "XZCNMV853lkaSD" },
  { name: "Free-for-All", id: "QWERDF735asdas" },
  { name: "Bomb Defusal", id: "LKJHAS123zxvnm" },
  { name: "Gun Game", id: "POIUQE856dfghj" },
  { name: "Zombie Mode", id: "NBVMQW097poiuy" },
  { name: "Domination", id: "TYUIOH1923mnbfv" },
  { name: "Search and Destroy", id: "ZXCVBN6098lkjhv" },
  { name: "King of the Hill", id: "POIUYT456gfhjkl" },
  { name: "Survival", id: "QWERTY1234zxcvb" },
  { name: "Escort", id: "ASDFGH0987nmvbc" },
  { name: "Last Man Standing", id: "LKJHGF321dfghjk" },
  { name: "VIP Escort", id: "ZXCVBN456poiuyt" },
];


export const ServersCategoryFilter = () => {
    const {category,game,setData} = useServersFilter()
    const CategoryComponent = ({ name, id }: { name: string; id: string }) => {
      return (
        <div onClick={()=>setData({
          category:category === id ? null : id
        })} className={`p-[10px]  dark:text-white dark:bg-[#ffffff0a] bg-[#f1f3f6] text-black rounded-[11px] text-[18px]
         font-normal min-w-[140px] text-center cursor-pointer
         ${category === id && 'dark:!bg-[#ffffff15]  text-white bg-gray2 !font-medium'}
         `}>
          {name}
        </div>
      );
    };
    
    return (
    <SectionContainer className=" m-components_distance">
      <Swiper
        modules={[FreeMode]}
        freeMode
        className="!py-[10px] !px-[10px] dark:bg-transparent bg-white w-full dark:border-none border-gray2 border-[1px] rounded-[14px]"
        spaceBetween={10}
        slidesPerView={"auto"}
      >
        {staticData.map((category) => (
          <SwiperSlide className="!w-fit" key={category.id}>
            <CategoryComponent name={category.name} id={category.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  );
};
