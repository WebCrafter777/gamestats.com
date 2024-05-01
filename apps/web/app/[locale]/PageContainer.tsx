'use client'

import React from 'react'
export const PageContainer = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return (
    <main className='max-w-[1370px] mx-auto mt-[20px]'> 
      {children}
    </main>
  )
}
