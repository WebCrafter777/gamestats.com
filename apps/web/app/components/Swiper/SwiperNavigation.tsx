'use client'

import { Icon } from '@/app/styles/Icon'
import { ArrowIcons } from '@/public/svg/ArrowIcons'
import React from 'react'

export const SwiperNavigation = ({nextEl,prevEl}:{nextEl:string,prevEl:string}) => {
  return (
    <div className='flex gap-[2px] items-center justify-center'>
        <Icon
          svg={ArrowIcons['swiperNavigation']}
          className={`${prevEl} w-[30px] h-[30px] cursor-pointer swiperNavigation`}
        />
        <Icon
          svg={ArrowIcons['swiperNavigation']}
          className={`${nextEl} w-[30px] h-[30px] rotate-180 cursor-pointer swiperNavigation`}
        />
    </div>
  )
}
