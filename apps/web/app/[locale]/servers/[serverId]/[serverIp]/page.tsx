import { PageContainer } from '@/app/[locale]/PageContainer'
import { ServerPageBody } from '@/app/components/ServerPage/ServerPageBody'
import { ServerPageHeader } from '@/app/components/ServerPage/ServerPageHeader'
import { Metadata } from 'next'
import React from 'react'
import { lightSanitizeObject } from 'sanitize/light'

interface Params{
  serverId:string,
  serverIp:string
}

export const generateMetadata: () => Promise<Metadata> = async () => {
  return {
      title: 'Server | ServersStats.com',
      description:"Ashen One's Profile on ServersStats.com, track added servers"
  };
};


const page = ({params}:{params:Params}) => {
  const sanitizedParams = lightSanitizeObject(params)
  
  return (
    <PageContainer>
      <ServerPageHeader/>
      <ServerPageBody/>
    </PageContainer>
  )
}

export default page