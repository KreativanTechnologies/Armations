// 'use client'
// import React from "react";
// import AtArmation from "../../components/HomePageComp/AtArmation.jsx";
// import HeroSection from "../../components/HomePageComp/HeroSection.jsx";
// import NewsStories from "../../components/HomePageComp/NewsStories.jsx";
// import OurAchievements from "../../components/HomePageComp/OurAchievements.jsx";
// import OurMission from "../../components/HomePageComp/OurMission.jsx";
// import Parallax from "../../components/HomePageComp/Parallax.jsx";
// import { Zap, Sun } from "lucide-react";
// const heroSectionData = {
//   img_Src: "/images/home/bg.png",
//   title: "Aarmation Electric",
//   desc: "Our end-to-end smart solutions empower smart industries, smart living, and smart enterprises and deliver connected experiences by connecting assets, operation/logistics, and services.",
//   btn_Text: "Explore more",
// };

// const OurVisionData = {
//   title: "Our Vision",
//   desc: "Our vision is to position “AARMATION ELECTRIC” globally as a leading project company in Electrical, IoT, SCADA, Artificial Intelligence, Automation Solutions, and Instrumentation by 2030.",
//   btn_Text: "Let's go",
//   img_Src: "/om.png",
// };
// const ParallaxData = {
//   title: "Our Mission",
//   desc: "Our end to end smart solutions empower smart industries, smart living and smart enterprises and deliver connecting experiences by connecting assets, operation/ logistics and services.",
//   btn_Text: "Learn More About Us",
//   redirectTo: "/About",
//   img_Src: "/om.png",
//   list: [
//     {
//       icon: Zap,
//       text: "Energy Saving Solution",
//     },
//     {
//       icon: Sun,
//       text: "Distributed Control System",
//     },
//   ],
// };

// const ParallaxData2 = {
//   title: "Did You Know?",
//   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
//   btn_Text: "Learn More",
//   redirectTo: "/About",
//   img_Src: "/om.png",
//   list: [],
// };
// const page = () => {
//   return (
//     <div className="w-full h-full bg-white flex flex-col gap-4 md:gap-0 ">
//       <HeroSection data={heroSectionData} />
//       <OurMission data={OurVisionData} />
//       <Parallax data={ParallaxData} />
//       <OurAchievements />
//       <AtArmation />
//       <NewsStories newsData={newsData} />
//       <Parallax data={ParallaxData2} />
//     </div>
//   );
// };
// export default page;

// const newsData = [
//   {
//     id: 1,
//     image: "/images/blog/lc.jpg",
//     date: "March 1, 2025",
//     title: "Understanding Logic Controllers: The Heart of Industrial Automation",
//     description:
//       "A logic controller is an electronic device that uses programmed instructions to control machinery and processes in industrial settings. Originally developed to replace relay-based control systems, PLCs are now central to automation in manufacturing, assembly lines, and process control. ",
//   },
//   {
//     id: 2,
//     image: "/images/NewsStories/Operator.png",
//     date: "March 1, 2025",
//     title: "Understanding Industrial Sensors: The Backbone of Modern Automation",
//     description:
//       "In today’s fast-paced industrial environment, automation and precision are paramount. At the heart of this technological revolution lie industrial sensors, essential devices that monitor and measure various parameters in manufacturing processes.",
//   },
//   {
//     id: 3,
//     image: "/images/blog/iot.png",
//     date: "March 1, 2025",
//     title: "IoT Experts: Your Guide to Navigating the Industrial Revolution",
//     description:
//       "The Internet of Things is changing the industrialization process completely by connecting billions of devices through sensors, software, and network connectivity. All these devices make it easy to collect data and analyze, making it easy to bring major changes into the industrialization process.",
//   },
//   {
//     id: 4,
//     image: "/images/blog/ti.png",
//     date: "March 2, 2025",
//     title: "Transforming Industries with SCADA Innovation",
//     description: "Role of SCADA in Automation with rapid changes in electrical systems, monitoring and controlling these systems quickly is crucial. SCADA, or Supervisory Control and Data Acquisition, plays an irreplaceable role here. As an innovative electrical company, we proudly offer modern SCADA systems. These systems facilitate operations, improve safety, and promote sector development.",
//   },
// ];


'use client';
import React from "react";
import AtArmation from "../../components/HomePageComp/AtArmation.jsx";
import HeroSection from "../../components/HomePageComp/HeroSection.jsx";
import NewsStories from "../../components/HomePageComp/NewsStories.jsx";
import OurAchievements from "../../components/HomePageComp/OurAchievements.jsx";
import OurMission from "../../components/HomePageComp/OurMission.jsx";
import Parallax from "../../components/HomePageComp/Parallax.jsx";
import { Zap, Sun } from "lucide-react";
import ChatBotWidget from "../../components/Chatbot/ChatBotWidget.jsx"; 
import Slider from "../../components/HomePageComp/Slider.jsx"; 
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
    { icon: Zap, text: "Energy Saving Solution" },
    { icon: Sun, text: "Distributed Control System" },
  ],
};

const ParallaxData2 = {
  title: "Did You Know?",
  desc: "We are dedicated to delivering the most innovative and customized products and solutions that meet both stated and implied customer needs. Our goal is to enhance applications by offering the latest technology at affordable prices. Additionally, we commit to providing prompt after-sales service within 24 hours. We also focus on developing technocrats by offering training and opportunities in cutting-edge technologies.",
  btn_Text: "Learn More",
  redirectTo: "/About",
  img_Src: "/om.png",
  list: [],
};

const newsData = [
  {
    id: 1,
    image: "/images/blog/lc.jpg",
    date: "March 1, 2025",
    title: "Understanding Logic Controllers: The Heart of Industrial Automation",
    description:
      "A logic controller is an electronic device that uses programmed instructions...",
  },
  {
    id: 2,
    image: "/images/NewsStories/Operator.png",
    date: "March 1, 2025",
    title: "Understanding Industrial Sensors: The Backbone of Modern Automation",
    description:
      "In today’s fast-paced industrial environment, automation and precision are paramount...",
  },
  {
    id: 3,
    image: "/images/blog/iot.png",
    date: "March 1, 2025",
    title: "IoT Experts: Your Guide to Navigating the Industrial Revolution",
    description:
      "The Internet of Things is changing the industrialization process completely...",
  },
  {
    id: 4,
    image: "/images/blog/ti.png",
    date: "March 2, 2025",
    title: "Transforming Industries with SCADA Innovation",
    description:
      "Role of SCADA in Automation with rapid changes in electrical systems...",
  },
];

const sliderData = [

  {
    img_Src: "/images/home/1.png",
    alt: "1",
    author: "L&T Electrical and Automation",
    desc: "Tech enthusiast and blogger, sharing insights on web development.",
    href: "#",
  },
  {
    img_Src: "/images/home/2.png",
    alt: "2",
    author: "Schneider Electric",
    desc: "Illustrator and storyteller, bringing characters to life with vibrant art.",
    href: "#",
  },
  {
    img_Src: "/images/home/3.png",
    alt: "3",
    author: "Siemens ",
    desc: "Food critic and chef, reviewing the finest culinary experiences.",
    href: "#",
  },
  {
    img_Src: "/images/home/4.png",
    alt: "4",
    author: "KSB Pumps",
    desc: "Travel photographer, capturing breathtaking landscapes worldwide.",
    href: "#",
  },
  {
    img_Src: "/images/home/5.png",
    alt: "5",
    author: "Tethys (Horiba)",
    desc: "Environmental activist and author, advocating for sustainable living.",
    href: "#",
  },
    {
    img_Src: "/images/home/6.jpeg",
    alt: "6",
    author: "KEI Wires and Cables",
    desc: "Environmental activist and author, advocating for sustainable living.",
    href: "#",
  },
  //   {
  //   img_Src: "/images/home/7.png",
  //   alt: "7",
  //   author: "Punjab Irrigation & Farm Solutions",
  //   desc: "Environmental activist and author, advocating for sustainable living.",
  //   href: "#",
  // },
  //   {
  //   img_Src: "/images/home/8.jpeg",
  //   alt: "8",
  //   author: "National India Construction Company",
  //   desc: "Environmental activist and author, advocating for sustainable living.",
  //   href: "#",
  // },
  // {
  //   img_Src: "/images/home/9.png",
  //   alt: "9",
  //   author: "S K Sharma Group",
  //   desc: "Environmental activist and author, advocating for sustainable living.",
  //   href: "#",
  // },
  // {
  //   img_Src: "/images/home/10.png",
  //   alt: "10",
  //   author: "Him Shakti Pvt Ltd.",
  //   desc: "Environmental activist and author, advocating for sustainable living.",
  //   href: "#",
  // },
  // {
  //   img_Src: "/images/home/11.png",
  //   alt: "11",
  //   author: "Dogra Construction Company Pvt Ltd.",
  //   desc: "Environmental activist and author, advocating for sustainable living.",
  //   href: "#",
  // },
  //   {
  //   img_Src: "/images/home/12.png",
  //   alt: "12",
  //   author: "Rebound Envirotech Pvt Ltd.",
  //   desc: "Environmental activist and author, advocating for sustainable living.",
  //   href: "#",
  // },
  //   {
  //   img_Src: "/images/home/13.jpeg",
  //   alt: "13",
  //   author: "P C Construction",
  //   desc: "Environmental activist and author, advocating for sustainable living.",
  //   href: "#",
  // },

  //   {
  //   img_Src: "/images/home/14.jpeg",
  //   alt: "14",
  //   author: "Harjeet Singh Govt Contractors",
  //   desc: "Environmental activist and author, advocating for sustainable living.",
  //   href: "#",
  // },

  //   {
  //   img_Src: "/images/home/15.png",
  //   alt: "15",
  //   author: "Katsons Technologies",
  //   desc: "Environmental activist and author, advocating for sustainable living.",
  //   href: "#",
  // },
]

export default function Page() {
  return (
    <div className="w-full h-full bg-white flex flex-col gap-4 md:gap-0 ">
      <HeroSection data={heroSectionData} />
      <OurMission data={OurVisionData} />
      <Parallax data={ParallaxData} />
      <Slider data={sliderData} />
      <AtArmation />
      <NewsStories newsData={newsData} />
      <OurAchievements />

      <Parallax data={ParallaxData2} />

      <ChatBotWidget />
    </div>
  );
}
