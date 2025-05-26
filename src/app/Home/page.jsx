import React from "react";
import AtArmation from "../../components/HomePageComp/AtArmation.jsx";
import HeroSection from "../../components/HomePageComp/HeroSection.jsx";
import NewsStories from "../../components/HomePageComp/NewsStories.jsx";
import OurAchievements from "../../components/HomePageComp/OurAchievements.jsx";
import OurMission from "../../components/HomePageComp/OurMission.jsx";
import Parallax from "../../components/HomePageComp/Parallax.jsx";
import { Zap, Sun } from "lucide-react";
const heroSectionData = {
  img_Src: "/images/home/bg.png",
  title: "Aarmation Electric",
  desc: "Our end-to-end smart solutions empower smart industries, smart living, and smart enterprises and deliver connected experiences by connecting assets, operation/logistics, and services.",
  btn_Text: "Explore more",
};

const OurVisionData = {
  title: "Our Vision",
  desc: "Our vision is to position “AARMATION ELECTRIC” globally as a leading project company in Electrical, IoT, SCADA, Artificial Intelligence, Automation Solutions, and Instrumentation by 2030.",
  btn_Text: "Let's go",
  img_Src: "/om.png",
};
const ParallaxData = {
  title: "Our Mission",
  desc: "Our end to end smart solutions empower smart industries, smart living and smart enterprises and deliver connecting experiences by connecting assets, operation/ logistics and services.",
  btn_Text: "Learn More About Us",
  redirectTo: "/About",
  img_Src: "/om.png",
  list: [
    {
      icon: Zap,
      text: "Energy Saving Solution",
    },
    {
      icon: Sun,
      text: "Distributed Control System",
    },
  ],
};

const ParallaxData2 = {
  title: "Did You Know?",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
  btn_Text: "Learn More",
  redirectTo: "/About",
  img_Src: "/om.png",
  list: [],
};
const page = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col gap-4 md:gap-0 ">
      <HeroSection data={heroSectionData} />
      <OurMission data={OurVisionData} />
      <Parallax data={ParallaxData} />
      <OurAchievements />
      <AtArmation />
      <NewsStories newsData={newsData} />
      <Parallax data={ParallaxData2} />
    </div>
  );
};
export default page;

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