import { NewsSidebar } from "../NewsSidebar";

export const News_Provider = async() => {
    const dummyNews = [
        {
          name: "What is going on on cs go?",
          id: "news001"
        },
        {
          name: "Latest Update 2",
          id: "news002"
        },
        {
          name: "Special Report 3",
          id: "news003"
        },
        {
          name: "Exclusive Interview 4",
          id: "news004"
        },
        {
          name: "Top Story 5",
          id: "news005"
        }
      ];
      await new Promise(resolve=>setTimeout(resolve,5000))
  return (
    <NewsSidebar news={dummyNews} />
  )
}


export const NewsLoadingSkeleton = (
  <div className="h-[300px] dark:bg-[#ffffff15] bg-white animate-pulse w-full  rounded-[5px]"/>
)