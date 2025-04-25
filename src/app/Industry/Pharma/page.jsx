import React from "react";

import Pharmasection from "../../../components/Pharma/pharmaSection.jsx";
import Section from "../../../components/Textile/section.jsx";
import NewsStories from "../../../components/HomePageComp/NewsStories.jsx";
import Auto from "../../../components/Textile/auto.jsx";

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
      <div className="relative w-full h-screen overflow-hidden mt-12">
        {/* Background Image */}
        <img
          src="/images/about/Pharma/Rectangle 115.png"
          alt="Plastic Industry Background"
          className="absolute inset-0 w-[calc(90%-80px)] object-cover opacity-90 mx-auto"
          width={200}
          height={200}
        />
      </div>
      <Pharmasection />
      <Auto />
      <Section />
      <NewsStories newsData={newsData} />
    </>
  );
}