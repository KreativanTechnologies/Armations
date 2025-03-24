import React from 'react'
import AboutHero from '../../components/AboutPageComp/AboutHero.jsx'
// import OurStory from '../../components/AboutPageComp/OurStory.jsx'
import OurLeadership from '../../components/AboutPageComp/OurLeadership.jsx'
import HowWeWork from '../../components/AboutPageComp/HowWeWork.jsx'
import SolutionWeProvide from '../../components/AboutPageComp/SolutionWeProvide.jsx'
import NewsStories from "../../components/HomePageComp/NewsStories.jsx"

const page = () => {
  return (
    <div>
        <AboutHero/>
        {/* <OurStory/> */}
        <OurLeadership/>
        <HowWeWork/>
        <SolutionWeProvide/>
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
