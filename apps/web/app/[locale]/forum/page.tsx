import React from 'react'
import { PageContainer } from '../PageContainer'
import { SectionContainer } from '@/app/components/SectionContainer'
import { ForumPagePosts } from '@/app/components/Forum/ForumPage/ForumPagePosts'
import { ForumPageSideBar } from '@/app/components/Forum/ForumPage/ForumPageSideBar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Forum | ServersStats.com",
  description: "Track and analyze game servers performance with ServersStats.com",
  keywords: ["game servers", "tracking service", "performance analysis", "online gaming"],
};

const ForumPage = () => {
  return (
    <PageContainer>
        <SectionContainer className='flex md:flex-row flex-col gap-[20px]'>
            <ForumPagePosts/>
            <ForumPageSideBar/>
        </SectionContainer>
    </PageContainer>
  )
}

export default ForumPage