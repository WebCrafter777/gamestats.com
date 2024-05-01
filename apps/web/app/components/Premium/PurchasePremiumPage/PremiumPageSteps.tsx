import { Icon } from '@/app/styles/Icon'
import { WebsiteIcons } from '@/public/svg/WebsiteIcons'
import React from 'react'

export const PremiumPageSteps = ({activeStep,STEPS}:{activeStep:number,STEPS:any}) => {
  return (
    <div className="w-full flex justify-center items-center gap-[17px] sb:flex-row flex-col ">
        <h2
          className={`font-medium sm:text-[16px] text-[14px] ${activeStep >= STEPS.chooseServer ? "text-light_primary" : "text-text_gray"}`}
        >
          Choose Server
        </h2>
        <div className="flex gap-[11px] items-center">
          <Icon
            svg={WebsiteIcons["line"]}
            className={`sm:w-[25px] w-[15px] h-[2px] premiumSvg ${activeStep >= STEPS.chooseTier && "active"}`}
          />
          {activeStep >= STEPS.chooseTier ? (
            <Icon
              svg={WebsiteIcons["checkbox_checked"]}
              className={`w-[20px] h-[20px] premiumSvg ${activeStep >= STEPS.chooseTier && "active"}`}
            />
          ) : (
            <Icon
              svg={WebsiteIcons["checked_unchecked"]}
              className={`w-[20px] h-[20px] premiumSvg`}
            />
          )}
          <Icon
            svg={WebsiteIcons["line"]}
            className={`sm:w-[25px] w-[15px] h-[2px] premiumSvg ${activeStep >= STEPS.chooseTier && "active"}`}
          />
        </div>
        <h2
          className={`font-medium sm:text-[16px] text-[14px] ${activeStep >= STEPS.chooseTier ? "text-light_primary" : "text-text_gray"}`}
        >
          Choose Tier
        </h2>
        <div className="flex gap-[11px] items-center">
          <Icon
            svg={WebsiteIcons["line"]}
            className={`sm:w-[25px] w-[15px] h-[2px] premiumSvg ${activeStep >= STEPS.chooseTier && "active"}`}
          />
          {activeStep >= STEPS.payment ? (
            <Icon
              svg={WebsiteIcons["checkbox_checked"]}
              className={`w-[20px] h-[20px] premiumSvg ${activeStep >= STEPS.payment && "active"}`}
            />
          ) : (
            <Icon
              svg={WebsiteIcons["checked_unchecked"]}
              className={`w-[20px] h-[20px] premiumSvg`}
            />
          )}
          <Icon
            svg={WebsiteIcons["line"]}
            className={`sm:w-[25px] w-[15px] h-[2px] premiumSvg ${activeStep >= STEPS.payment && "active"}`}
          />
        </div>
        <h2
          className={`font-medium sm:text-[16px] text-[14px] ${activeStep >= STEPS.payment ? "text-light_primary" : "text-text_gray"}`}>
          Payment
        </h2>
      </div>
  )
}
