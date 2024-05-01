import React from 'react'
import { SectionContainer } from '../../SectionContainer'
import Image from 'next/image'

export const SinlgeForumPost_Header = () => {
  return (
   <div className='w-full relative pl-[129px] pr-[10px] py-[4px] bg-gray2 rounded-[2px] flex justify-between items-center text-white '>
      <div className='absolute left-[28px] top-0 bottom-0 my-auto w-[80px] h-[80px]'>
        <Image
          src={'/images/user/userPlaceholder2.webp'}
          alt='User_Profile_Image'
          fill
          className='rounded-full'
        />
      </div>
      <div className='flex flex-col'>
        <h2 className='dark:text-white font-bold text-[14px]'>Ashen One</h2>
        <p className='text-text_gray text-[12px]'>1 week ago</p>
      </div>
      <div className='w-[191px] flex justify-between items-center dark:text-white font-medium'>
        <h2>Replies</h2>
        <h2>Views</h2>
      </div>
   </div>
  )
}
