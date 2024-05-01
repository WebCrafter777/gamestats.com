import Image from 'next/image'
import React from 'react'

export const Game_Row = ({className,name,banner,onClick,active}:{className?:string,name:string,banner:string,onClick:()=>void,active?:boolean}) => {
  return (
    <div onClick={onClick} className={`pr-[36px] flex gap-[10px] rounded-[5px] items-center bg-gray2 select-none cursor-pointer ${active && 'border-[1px] border-yellow_loud'} ${className}`}>
        <div className='relative w-[103px] h-[42px]'>
            <Image
                src={banner}
                alt='Game_Image'
                fill
                className='object-cover rounded-l-[5px]'
            />
        </div>
        <h2 className='dark:text-white lg:text-[16px] text-[14px] font-bold'>{name.length  > 20  ? name.slice(0,17) + '...' : name  }</h2>
    </div>
  )
}
