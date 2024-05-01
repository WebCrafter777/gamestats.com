import React from 'react'

export const SectionContainer = ({children,disable,className}:{children:React.ReactNode,disable?:boolean,className?:string}) => {
  return (
    <section className={`${!disable ? "xs:px-[22px] px-[8px]" : '' } ${className}`}>
        {children}
    </section>
  )
}
