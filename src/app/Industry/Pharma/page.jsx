import React from "react";

import Pharmasection from "../../../components/Pharma/pharmaSection.jsx";
import Section from "../../../components/Textile/section.jsx";
import NewsStories from "../../../components/HomePageComp/NewsStories.jsx";

import Pharmabox from "../../../components/Pharma/Pharmabox.jsx";

const newsData = [
  {
    id: 1,
    image: "/images/blog/lc.jpg",
    date: "March 1, 2025",
    title: "Understanding Logic Controllers: The Heart of Industrial Automation",
    description:
      "A logic controller is an electronic device that uses programmed instructions to control machinery and processes in industrial settings. Originally developed to replace relay-based control systems, PLCs are now central to automation in manufacturing, assembly lines, and process control. ",
  },
  {
    id: 2,
    image: "/images/NewsStories/Operator.png",
    date: "March 1, 2025",
    title: "Understanding Industrial Sensors: The Backbone of Modern Automation",
    description:
      "In today’s fast-paced industrial environment, automation and precision are paramount. At the heart of this technological revolution lie industrial sensors, essential devices that monitor and measure various parameters in manufacturing processes.",
  },
  {
    id: 3,
    image: "/images/blog/iot.png",
    date: "March 1, 2025",
    title: "IoT Experts: Your Guide to Navigating the Industrial Revolution",
    description:
      "The Internet of Things is changing the industrialization process completely by connecting billions of devices through sensors, software, and network connectivity. All these devices make it easy to collect data and analyze, making it easy to bring major changes into the industrialization process.",
  },
  {
    id: 4,
    image: "/images/blog/ti.png",
    date: "March 2, 2025",
    title: "Transforming Industries with SCADA Innovation",
    description: "Role of SCADA in Automation with rapid changes in electrical systems, monitoring and controlling these systems quickly is crucial. SCADA, or Supervisory Control and Data Acquisition, plays an irreplaceable role here. As an innovative electrical company, we proudly offer modern SCADA systems. These systems facilitate operations, improve safety, and promote sector development.",
  },
];

export default function Page() {
  return (
    <>
      <div className="relative flex items-center py-4 bg-white justify-center mt-20 mb-20">
        <div className="w-0.5 h-10 bg-white mr-4"></div>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Pharmaceutical Industry{" "}
            <span className="text-red-500">Solutions</span>
          </h2>
          <div className="h-1 w-40 bg-red-500 mx-auto mt-2 rounded-full" />
        </div>
      </div>
      
      
      <Pharmasection />
      <Pharmabox />
      <Section />
      <NewsStories newsData={newsData} />
    </>
  );
}