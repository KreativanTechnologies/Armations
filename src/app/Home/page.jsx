import React from 'react'
import AtArmation from "../../components/HomePageComp/AtArmation.jsx"
import HeroSection from "../../components/HomePageComp/HeroSection.jsx"
import NewsStories from "../../components/HomePageComp/NewsStories.jsx"
import OurAchievements from "../../components/HomePageComp/OurAchievements.jsx"
import OurMission from "../../components/HomePageComp/OurMission.jsx"
import Parallax from "../../components/HomePageComp/Parallax.jsx"
import Parallax2 from "../../components/HomePageComp/Parallex2.jsx"
const heroSectionData = {
  img_Src : '/images/home/bg.png',
  title : 'Aarmation Electric',
  desc : 'Our end-to-end smart solutions empower smart industries, smart living, and smart enterprises and deliver connected experiences by connecting assets, operation/logistics, and services.',
  btn_Text : 'Explore more'
}

const page = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col gap-4 md:gap-0 ">
      <HeroSection data={heroSectionData}/>
      <OurMission/>
      <Parallax/>
      <OurAchievements/>
      <AtArmation/>
      <NewsStories newsData={newsData}/>
      <Parallax2/>
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
