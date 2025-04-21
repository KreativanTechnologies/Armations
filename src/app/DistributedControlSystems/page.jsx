"use client";
import HeroSection from "../../components/DCScomp/HeroSection";
import DCSContent from "../../components/DCScomp/DCSContent";
import Image from "next/image";
import DCSLayout from "../../components/DCScomp/DCSLayout";
import DCSInfo from "../../components/DCScomp/DCSInfo.jsx";

const DistributedControlSystems = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <HeroSection />
      <DCSContent />
      <DCSLayout/>
      <DCSInfo/>
    </div>
  );
};

export default DistributedControlSystems;
