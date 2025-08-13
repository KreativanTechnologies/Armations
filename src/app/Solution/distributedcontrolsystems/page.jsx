import DCSContent from "../../../components/DCScomp/DCSContent";
import HeroSection from "../../../components/DCScomp/HeroSection";
import HeroImage from "../../../assets/distributed/hero.png";

const heroData = {
  img_Src: HeroImage,
  title: "Distributed Control System",
};

const page = () => {
  return (
    <div>
      <HeroSection data={heroData} />
      <DCSContent />
    </div>
  );
};

export default page;
