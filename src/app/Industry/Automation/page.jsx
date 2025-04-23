import React from 'react'
import Titlebox from '../../../components/Packagingcomp/Titlebox.jsx'
import Section from  "../../../components/Textile/section.jsx"
import FirstParallax from '../../../components/Automationcomp/FirstParallax.jsx'
import SecondParallax from '../../../components/Automationcomp/SecondParallax.jsx'
import ThirdParallax from '../../../components/Automationcomp/ThirdParallax.jsx'
import NewsStories from "../../../components/HomePageComp/NewsStories.jsx"
const page = () => {
  return (
    <div>
      <Titlebox industryName="Automation"/>
      <FirstParallax/>
      <SecondParallax/>
      <div className='mt-10'>
        <ThirdParallax/>
        </div>
        <Section/>
        <NewsStories newsData={newsData}/>
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
];
