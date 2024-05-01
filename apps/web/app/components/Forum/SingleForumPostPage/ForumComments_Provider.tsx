import React, { Suspense } from 'react'
import { ForumComments } from './ForumComments'

export const ForumComments_Provider = async() => {
  const dummyComments = [
    {
      author: "John Doe",
      role: "Admin",
      text: "This is the first comment.",
      postedAt: "11:39 PM, April 27",
    },
    {
      author: "Jane Smith",
      role: "User",
      text: "This is the second comment.",
      postedAt: "11:45 PM, April 27",
    },
    {
      author: "Mike Johnson",
      role: "Moderator",
      text: "This is the third comment.",
      postedAt: "12:00 AM, April 28",
    },
  ];
  await new Promise(resolve=>setTimeout(resolve,5000))
  return (
      <ForumComments comments={dummyComments}/>

  )
}
