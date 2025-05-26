'use client';
import Grid from '../../../components/CustomizedSolution/Grid.jsx'
import Remote from '../../../components/CustomizedSolution/Remote.jsx'
import HeroSection from "../../../components/DCScomp/HeroSection";

const heroData = {
  img_Src: '/images/CoustimizeSol/CBg.png',
  title: "Customized Solutions",
};

const Page = () => {
  return (
    <div className="bg-white">
        <HeroSection data={heroData} />
        <Remote />
        <Grid />
    </div>
  );
};

export default Page;
