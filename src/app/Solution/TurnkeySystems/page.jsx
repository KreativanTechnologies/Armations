import Range from '../../../components/TurenkeySystems/CompleteRange';
import HeroSection from "../../../components/DCScomp/HeroSection";

const heroData = {
  img_Src: '/images/TurnkeySol/T9.png',
  title: "Turnkey Solutions",
};

const Page = () => {
  return (
    <div className="bg-white">
      <HeroSection data={heroData} />
      <Range />
    </div>
  );
};

export default Page;
