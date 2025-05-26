'use client';
import HeroSection from "../../../components/DCScomp/HeroSection";
import Grid from "../../../components/CustomizedSolution/Grid.jsx";

const heroData = {
  img_Src: '/images/Banner/energySaving.png',
  title: "Energy Saving Solution",
};


const gridData = [
  {
    src: "/images/energySaving/energy1.png",
    title: "Air Handling Units",
    desc: "Air handling units condition and distribute air throughout a building with Energy Saving Solution – Aarmation Electric. ...",
  },
  {
    src: "/images/energySaving/energy2.png",
    title: "Air Compressors",
    desc: "An air compressor is a device that converts power ...",
  },
  {
    src: "/images/energySaving/energy3.png",
    title: "Chillers",
    desc: "An air compressor is a device that converts power ...",
  },
  {
    src: "/images/energySaving/energy4.png",
    title: "Centrifugal Fans",
    desc: "A centrifugal fan is a mechanical device for moving air ...",
  },
];


const Page = () => {
  return (
    <div className="bg-white">
      <HeroSection data={heroData} />
      <Grid data={gridData} />
    </div>
  );
};

export default Page;
