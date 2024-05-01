'use client'

import { Icon } from '@/app/styles/Icon'
import { ArrowIcons } from '@/public/svg/ArrowIcons'
import { WebsiteIcons } from '@/public/svg/WebsiteIcons'
import Link from 'next/link'
import React from 'react'

export const QuickLinks = ({className}:{className?:string}) => {
  return (
    <div className={`${className}`}>
        <div className='px-[10px] py-[12px] bg-gray2 text-white shadow-lg'>
            <h1 className='font-semibold font-roboto text-[18px]'>Quick Links</h1>
        </div>
        <div className='dark:bg-[#ffffff15] bg-white px-[12px] py-[14px] dark:text-white text-black flex flex-col gap-[15px] cursor-pointer'>
            <Link href={'/servers'} className='flex justify-between items-center'>
                <div className='flex gap-[7px]'>
                    <Icon
                        svg={WebsiteIcons['server']}
                        className='w-[29px] h-[29px]'
                    />
                    <h1 className='text-[20px] font-medium'>Servers</h1>
                </div>
                <div className="p-[7px] bg-gray2">
                    <Icon
                    svg={ArrowIcons["arrow_right_white"]}
                    className="md:w-[14px] sm:h-[14px] w-[13px] h-[13px]"
                    />
                </div>
            </Link>
            <Link href={'/games'} className='flex justify-between items-center'>
                <div className='flex gap-[7px]'>
                    <Icon
                        svg={WebsiteIcons['games']}
                        className='w-[29px] h-[29px]'
                    />
                    <h1 className='text-[20px] font-medium'>Games</h1>
                </div>
                <div className="p-[7px] bg-gray2">
                    <Icon
                    svg={ArrowIcons["arrow_right_white"]}
                    className="md:w-[14px] sm:h-[14px] w-[13px] h-[13px]"
                    />
                </div>
            </Link>
            <Link href={'/forum'} className='flex justify-between items-center'>
                <div className='flex gap-[7px]'>
                    <Icon
                        svg={WebsiteIcons['forum_quickLink']}
                        className='w-[29px] h-[29px]'
                    />
                    <h1 className='text-[20px] font-medium'>Forum</h1>
                </div>
                <div className="p-[7px] bg-gray2">
                    <Icon
                    svg={ArrowIcons["arrow_right_white"]}
                    className="md:w-[14px] sm:h-[14px] w-[13px] h-[13px]"
                    />
                </div>
            </Link>
            <Link href={'/help'} className='flex justify-between items-center'>
                <div className='flex gap-[7px]'>
                    <Icon
                        svg={WebsiteIcons['contact']}
                        className='w-[29px] h-[29px]'
                    />
                    <h1 className='text-[20px] font-medium'>Help</h1>
                </div>
                <div className="p-[7px] bg-gray2">
                    <Icon
                    svg={ArrowIcons["arrow_right_white"]}
                    className="md:w-[14px] sm:h-[14px] w-[13px] h-[13px]"
                    />
                </div>
            </Link>
        </div>
    </div>
  )
}
