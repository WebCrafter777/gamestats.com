'use client'
import React from 'react'
import { ForumPost_Row } from '../ForumPost_Row'

const dummyForumData = [
    {
        "image": "/images/maps/dust2.webp",
        "title": "The Impact of Artificial Intelligence on Future Job Markets",
        "description": "An exploration of the effects of artificial intelligence on the job market of the future, discussing potential challenges and opportunities.",
        "tags": ["AI", "future", "job-market"],
        "author": {
            "name": "Sarah Johnson"
        },
        "views": 500,
        "likes": 80,
        "comments": 25
    },
    {
        "image": "/images/maps/dust2.webp",
        "title": "Exploring the Potential of Blockchain Technology in Supply Chain Management",
        "description": "An in-depth analysis of how blockchain technology can revolutionize supply chain management, focusing on its potential applications and benefits.",
        "tags": ["blockchain", "supply-chain", "technology"],
        "author": {
            "name": "Michael Brown"
        },
        "views": 350,
        "likes": 45,
        "comments": 18
    },
    {
        "image": "/images/maps/dust2.webp",
        "title": "Tips for Effective Remote Team Collaboration",
        "description": "Practical tips and strategies for enhancing collaboration among remote teams, addressing common challenges and maximizing productivity.",
        "tags": ["remote-work", "team-collaboration", "tips"],
        "author": {
            "name": "Emily Wilson"
        },
        "views": 280,
        "likes": 55,
        "comments": 20
    },
    {
        "image": "/images/maps/dust2.webp",
        "title": "The Role of Data Analytics in Improving Customer Experience",
        "description": "An examination of how data analytics can be leveraged to enhance customer experience, with insights into effective strategies and tools.",
        "tags": ["data-analytics", "customer-experience", "analysis"],
        "author": {
            "name": "David Lee"
        },
        "views": 400,
        "likes": 70,
        "comments": 30
    },
    {
        "image": "/images/maps/dust2.webp",
        "title": "Climate Change: Addressing the Challenges and Opportunities",
        "description": "A discussion on the challenges posed by climate change and the opportunities for sustainable solutions, highlighting key areas for action.",
        "tags": ["climate-change", "environment", "sustainability"],
        "author": {
            "name": "Anna Martinez"
        },
        "views": 600,
        "likes": 90,
        "comments": 35
    },
    {
        "image": "/images/maps/dust2.webp",
        "title": "The Future of Renewable Energy Sources",
        "description": "An exploration of the future prospects of renewable energy sources, examining technological advancements and their implications for sustainability.",
        "tags": ["renewable-energy", "future", "sustainability"],
        "author": {
            "name": "Daniel Smith"
        },
        "views": 450,
        "likes": 75,
        "comments": 28
    }
]

export const ForumPagePosts = () => {
  return (
    <div className='flex-grow bg-gray-40 border-gray border-[1px] rounded-[10px] overflow-hidden'>
        <div className='border-b-[2px] border-b-gray w-full py-[19px]'>
            <h1 className='not-italic font text-3xl text-white px-[20px]'>Recent Forum Posts</h1>
        </div>
        <div className='sm:p-[20px] p-[10px] flex flex-col gap-[10px]'>
            {
                dummyForumData.map((post,id)=>(
                    <ForumPost_Row key={id} className='md:!col-span-1 !col-span-2' {...post}/>
                ))
            }
        </div>
    </div>
  )
}
