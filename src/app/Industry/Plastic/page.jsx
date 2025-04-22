import React from 'react'
import Auto from "../../../components/Textile/auto.jsx"
import  Section from "../../../components/Textile/section.jsx"
import NewsStories from "../../../components/HomePageComp/NewsStories.jsx"
import Text from "../../../components/Textile/text.jsx"
import Plastic from "../../../components/Plastic/plastic.jsx"
const page = () => {
  return (
    <div>
      
   <Plastic/>
      <Text/>
      <Auto/>
      <Section/>
      <NewsStories newsData={newsData} />
      </div>
  )
}

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
];


export default page