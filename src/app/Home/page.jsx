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
      <NewsStories/>
      <Parallax/>
    </div>
  )
}
export default page