import React from 'react'
import NewsStories from "../../components/HomePageComp/NewsStories.jsx"
import HeroSection from "../../components/HomePageComp/HeroSection.jsx"

const heroSectionData = { 
  img_Src : '/images/blog/blogimg.png',
  title : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  desc : 'In the realm of industrial automation, logic controllers play a pivotal role in managing and controlling various processes. These intelligent devices, often referred to as Programmable Logic Controllers (PLCs), have revolutionized the way industries operate [...]',
}
const page = () => {
  return (
    <div>
       <HeroSection data={heroSectionData}/>
       <NewsStories newsData={newsData} defaultRows={2}/>
    </div>
  )
}
export default page


const newsData = [
  {
    id: 1,
    image: "/images/NewsStories/Plug.png",
    date: "March 1, 2025",
    title: "Web Solution Release",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    image: "/images/NewsStories/Operator.png",
    date: "March 1, 2025",
    title: "Web Solution Release",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    image: "/images/NewsStories/Plug.png",
    date: "March 1, 2025",
    title: "Web Solution Release",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    image: "/images/NewsStories/Operator.png",
    date: "March 2, 2025",
    title: "New Tech Launch",
    description: "The latest tech innovation is here. Discover what’s new!",
  },

  {
    id: 5,
    image: "/images/NewsStories/Plug.png",
    date: "March 3, 2025",
    title: "AI Breakthrough",
    description: "Artificial Intelligence is evolving faster than ever before.",
  },
  {
    id: 6,
    image: "/images/NewsStories/Plug.png",
    date: "March 3, 2025",
    title: "AI Breakthrough",
    description: "Artificial Intelligence is evolving faster than ever before.",
  },
  {
    id: 7,
    image: "/images/NewsStories/Plug.png",
    date: "March 3, 2025",
    title: "AI Breakthrough",
    description: "Artificial Intelligence is evolving faster than ever before.",
  },
  {
    id: 8,
    image: "/images/NewsStories/Plug.png",
    date: "March 3, 2025",
    title: "AI Breakthrough",
    description: "Artificial Intelligence is evolving faster than ever before.",
  },
];