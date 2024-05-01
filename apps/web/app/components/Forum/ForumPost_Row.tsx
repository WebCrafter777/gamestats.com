"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

interface ForumPost {
  title: string;
  image: string;
  tags: string[];
  author: {
    name: string;
  };
  views: number;
  likes: number;
  comments: number;
  description:string
}

interface Props extends ForumPost {
  className?: string;
  disabled?:boolean;
}

export const ForumPost_Row = ({
  className,
  image,
  tags,
  title,
  author,
  likes,
  views,
  comments,
  description,
  disabled
}: Props) => {
  const {t} = useTranslation()
  return (
    <Link onClick={(e)=>disabled && e.preventDefault()} href={`/forum/ID/${title.replaceAll(' ','-')}`} className={`flex gap-[20px] dark:bg-[#262D34] bg-white px-[10px] py-[20px] rounded-[16px] cursor-pointer ${className}`}>
      <div className="relative min-w-[156px] min-h-[156px] w-[156px] h-[156px] sb:inline hidden">
        <Image src={image} alt="Forum" fill className="object-cover rounded-[16px] " />
      </div>
      <div className="flex flex-col  justify-between items-start flex-grow">
            <div className="flex flex-col gap-[10px]">
               <div className="flex flex-col gap-[2px]">

                <h2 className={`text-[18px] h-fit font-bold dark:text-white text-black ${title.length === 0 && 'h-[20px]'}`}>{title.length > 50 ? title.slice(0,47) + '...' : title}</h2>
                <p className={`text-[12px] text-text_gray ${description.length === 0 && 'h-[20px]'}`}>{description.length > 100 ? description.slice(0,97) + '...' : description}</p>
               </div>
                <ul className="flex gap-[10px] flex-wrap">
                    {
                        tags.map(tag=>(
                            <li className="font-bold text-[12px] py-[4px] px-[10px] bg-[#2C353D] text-[#C5D0E6] rounded-full" key={tag}>
                               {tag} 
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex !w-full justify-between items-center flex-wrap sm:gap-2 gap-2 sm:mt-2 mt-5">
                <div className="flex gap-[10px] items-center">
                        <div className="relative w-[38px] h-[38px]">
                            <Image
                                src={'/images/user/placeholder.webp'}
                                alt="User_Profile_image"
                                fill
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col justify-between">
                            <h4 className="text-[14px] font-bold dark:text-white text-black">{author.name}</h4>
                            <p className="dark:text-[#C5D0E6] text-gray2 text-[10px]">3 weeks ago</p>
                        </div>
                </div>
                <div className="flex gap-[10px] justify-end sm:mx-0 mx-auto xs:flex-nowrap flex-wrap">
                    <h2 className="text-[14px] dark:text-[#C5D0E6] text-gray2 capitalize">{views} {t('views')}</h2>
                    <h2 className="text-[14px] dark:text-[#C5D0E6] text-gray2 capitalize">{likes} {t('likes')}</h2>
                    <h2 className="text-[14px] dark:text-[#C5D0E6] text-gray2 capitalize">{comments} {t('comments')}</h2>
                </div>
            </div>
      </div>
    </Link>
  );
};
