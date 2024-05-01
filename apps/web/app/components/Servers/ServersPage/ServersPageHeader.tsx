'use client'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { SectionContainer } from '../../SectionContainer'

export const ServersPageHeader = () => {
    const {t} = useTranslation()
  return (
    <SectionContainer className='flex justify-center items-center flex-col'>
        <h1 className='xs:text-[34px] text-[26px] dark:text-white text-black font-bold text-center'>{t('Servers:welcome')}</h1>
        <p className='xs:text-[16px] text-[14px] max-w-[600px] text-primary_second text-center'>{t("Servers:subtitle")}</p>
    </SectionContainer>
  )
}
