'use client'

import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HomeSwiperComponent } from './HomeSwiperComponent'
import { SectionContainer } from '../../SectionContainer'
import useMediaQuery, { screenSizes } from '@/app/hooks/useMediaQuery'

export const HomeSwiper = () => {
  const isAboveMediumScreens = useMediaQuery(screenSizes.mediumScreens)
  return (
    <SectionContainer className='w-full h-fit m-components_distance' disable={!isAboveMediumScreens}>
      <Swiper
        modules={[Autoplay,Navigation]}
        navigation={{
          nextEl:'.HomeBannerNext',
          prevEl:'.HomeBannerPrev',
        }}
        autoplay={{
          delay:5000,
          disableOnInteraction:true,
          pauseOnMouseEnter:true
        }}
        className='w-full'
        slidesPerView={1}
        speed={1500}
        loop
        spaceBetween={isAboveMediumScreens ? 40 : 10}
        > 
        <SwiperSlide className='!w-full'>
          <HomeSwiperComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-full'>
          <HomeSwiperComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-full'>
          <HomeSwiperComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-full'>
          <HomeSwiperComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-full'>
          <HomeSwiperComponent/>
        </SwiperSlide>
      </Swiper>
    </SectionContainer>
  )
}
