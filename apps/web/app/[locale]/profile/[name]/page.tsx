import { ForumPost_Row } from '@/app/components/Forum/ForumPost_Row'
import { Icon } from '@/app/styles/Icon'
import { ArrowIcons } from '@/public/svg/ArrowIcons'
import React from 'react'
import { PageContainer } from '../../PageContainer'
import { ProfileBanner } from '@/app/components/Profile/ProfileBanner'
import { ProfileBody } from '@/app/components/Profile/ProfileBody'
import { Metadata } from 'next'
import {lightSanitize} from 'sanitize/light'

const dummydataArray = [
    {
        "image": "/images/forum/post1.webp",
        "title": "The Impact of Artificial Intelligence on Future Job Markets",
        "tags": ["AI", "future", "job-market"],
        "author": {
            "name": "Sarah Johnson"
        },
        "views": 500,
        "likes": 80,
        "comments": 25
    },
    {
        "image": "/images/forum/post1.webp",
        "title": "Exploring the Potential of Blockchain Technology in Supply Chain Management",
        "tags": ["blockchain", "supply-chain", "technology"],
        "author": {
            "name": "Michael Brown"
        },
        "views": 350,
        "likes": 45,
        "comments": 18
    },
    {
        "image": "/images/forum/post1.webp",
        "title": "Tips for Effective Remote Team Collaboration",
        "tags": ["remote-work", "team-collaboration", "tips"],
        "author": {
            "name": "Emily Wilson"
        },
        "views": 280,
        "likes": 55,
        "comments": 20
    },
    {
        "image": "/images/forum/post1.webp",
        "title": "The Role of Data Analytics in Improving Customer Experience",
        "tags": ["data-analytics", "customer-experience", "analysis"],
        "author": {
            "name": "David Lee"
        },
        "views": 400,
        "likes": 70,
        "comments": 30
    },
    {
        "image": "/images/forum/post1.webp",
        "title": "Climate Change: Addressing the Challenges and Opportunities",
        "tags": ["climate-change", "environment", "sustainability"],
        "author": {
            "name": "Anna Martinez"
        },
        "views": 600,
        "likes": 90,
        "comments": 35
    }
]

export const generateMetadata: () => Promise<Metadata> = async () => {
    return {
        title: 'Ashen One | ServersStats.com',
        description:"Ashen One's Profile on ServersStats.com, track added servers"
    };
};


const ProfilePage = ({params}:{params:{name:string}}) => {
    const sanitizedName = lightSanitize(params.name)
  return (
    <PageContainer>
        <ProfileBanner />
        <ProfileBody/>
    </PageContainer>
  )
}

export default ProfilePage