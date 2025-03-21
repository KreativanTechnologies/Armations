import React from 'react'
import AboutHero from '../../components/AboutPageComp/AboutHero.jsx'
import OurStory from '../../components/AboutPageComp/OurStory.jsx'
import OurLeadership from '../../components/AboutPageComp/OurLeadership.jsx'
import HowWeWork from '../../components/AboutPageComp/HowWeWork.jsx'
import SolutionWeProvide from '../../components/AboutPageComp/SolutionWeProvide.jsx'
import NewsStories from "../../components/HomePageComp/NewsStories.jsx"

const page = () => {
  return (
    <div>
        <AboutHero/>
        <OurStory/>
        <OurLeadership/>
        <HowWeWork/>
        <SolutionWeProvide/>
        <NewsStories/>
    </div>
  )
}

export default page