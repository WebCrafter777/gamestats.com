'use client'

import React, { useState } from 'react'
import { SectionContainer } from '../SectionContainer'
import { PrimaryInput } from './TextField/PrimaryInput'
import { PrimaryButton } from '../Buttons/PrimaryButton'
import { useTranslation } from 'react-i18next'
import { useGameSearchInput } from '@/app/hooks/useGameSearchInput'

const RightButton = () =>{
  const {t} = useTranslation()

  return(
    <PrimaryButton className='h-full rounded-l-none px-[60px] text-[15px]' variant='secondary'>
      {t('search')}
    </PrimaryButton>
  )
}

export const SearchGameInput = () => {
  const {t} = useTranslation()
  const {value,onChange} = useGameSearchInput() 
  return (
    <SectionContainer className='w-full'>
      <div className=' dark:bg-gray-40 bg-white sm:pl-[26px] sm:py-[4px] sm:pr-[4px] rounded-[6px] flex items-center gap-[25px] w-full '>
        <h2 className='text-[16px] dark:text-white text-black font-bold capitalize sm:inline hidden'>{t('searchforgame')}</h2>
        <div className='flex flex-grow'>
          <PrimaryInput
            id='searchGame'
            name='searchGame'
            variant='secondary'
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            parentClassName='flex-grow'
            placeholder='Search by game name'
            rightSvg={RightButton}
            className='rounded-r-none border-none'
          />
        </div>
      </div>
    </SectionContainer>
  )
}
