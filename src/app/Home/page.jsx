import React from 'react'
import AtArmation from "../../components/HomePageComp/AtArmation.jsx"
import HeroSection from "../../components/HomePageComp/HeroSection.jsx"
import NewsStories from "../../components/HomePageComp/NewsStories.jsx"
import OurAchievements from "../../components/HomePageComp/OurAchievements.jsx"
import OurMission from "../../components/HomePageComp/OurMission.jsx"
import Parallax from "../../components/HomePageComp/Parallax.jsx"

const page = () => {
  return (
    <div className="w-full h-full">
      <HeroSection/>
      <OurMission/>
      <Parallax/>
      <OurAchievements/>
      <AtArmation/>
      <NewsStories newsData={newsData}/>
      <Parallax/>
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
