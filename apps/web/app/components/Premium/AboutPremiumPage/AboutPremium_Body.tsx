import React from 'react'
import { SectionContainer } from '../../SectionContainer'

export const AboutPremium_Body = () => {
  return (
    <SectionContainer className='flex sm:flex-row flex-col gap-x-[15px] gap-y-[20px] dark:text-white m-components_distance'>
        <div className='flex flex-col gap-[10px]' id='aboutPremium'>
            <h1 className='text-[20px] font-bold'>About Premium</h1>
            <p className='text-[17px] text-text_gray'>{`Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                 an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                   popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`}</p>
        </div>
        <div className='flex flex-col gap-[10px]' id='aboutPremium2'>
            <h1 className='text-[20px] font-bold'>How to pay</h1>
            <p className='text-[17px] text-text_gray'>{`Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                 an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                   popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`}</p>
        </div>
    </SectionContainer>
  )
}
