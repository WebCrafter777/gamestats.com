"use client";

import React, { useEffect, useRef } from "react";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { PremiumSliderComponent } from "../../Premium/PremiumSliderComponent";
import { SectionContainer } from "../../SectionContainer";
import useMediaQuery, { screenSizes } from "@/app/hooks/useMediaQuery";
import { Icon } from "@/app/styles/Icon";
import { PremiumIcons } from "@/public/svg/PremiumIcons";

export const PremiumServersSlider = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const isAboveMediumScreens = useMediaQuery(screenSizes.mediumScreens);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  }, []);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper.autoplay.running) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && !swiperRef.current.swiper.autoplay.running) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <SectionContainer className="w-full relative" disable={!isAboveMediumScreens}>
      <Swiper
        ref={swiperRef}
        modules={[FreeMode, Autoplay]}
        freeMode={true}
        slidesPerView={"auto"}
        spaceBetween={15}
        className="swiper-container !overflow-y-visible w-full max-w-full swiper-nostop"
        autoplay={{
          delay: 20,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        speed={9000}
        loop
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SwiperSlide className="!w-fit overflow-visible ">
          <PremiumSliderComponent />
        </SwiperSlide>
        <SwiperSlide className="!w-fit overflow-visible ">
          <PremiumSliderComponent />
        </SwiperSlide>
        <SwiperSlide className="!w-fit overflow-visible ">
          <PremiumSliderComponent />
        </SwiperSlide>
        <SwiperSlide className="!w-fit overflow-visible ">
          <PremiumSliderComponent />
        </SwiperSlide>
        <SwiperSlide className="!w-fit overflow-visible ">
          <PremiumSliderComponent />
        </SwiperSlide>
        <SwiperSlide className="!w-fit overflow-visible ">
          <PremiumSliderComponent />
        </SwiperSlide>
        <SwiperSlide className="!w-fit overflow-visible ">
          <PremiumSliderComponent />
        </SwiperSlide>
        <SwiperSlide className="!w-fit overflow-visible ">
          <PremiumSliderComponent />
        </SwiperSlide>
        <SwiperSlide className="!w-fit overflow-visible ">
          <PremiumSliderComponent />
        </SwiperSlide>
        <SwiperSlide className="!w-fit overflow-visible ">
          <PremiumSliderComponent />
        </SwiperSlide>
      </Swiper>
    </SectionContainer>
  );
};
