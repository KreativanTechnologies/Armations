import Range from '../../../components/TurenkeySystems/CompleteRange';
import HeroSection from "../../../components/DCScomp/HeroSection";
import Grid from "../../../components/CustomizedSolution/Grid.jsx";

const gridData = [
  {
    src: "/images/TurnkeySol/T1.png",
    title: "Level Sensors",
  },
  {
    src: "/images/TurnkeySol/T2.png",
    title: "Temperature Sensors",
  },
  {
    src: "/images/TurnkeySol/T3.png",
    title: "Photoelectric Sensors",
  },
  {
    src: "/images/TurnkeySol/T4.png",
    title: "Proximity Sensors",
  },
  {
    src: "/images/TurnkeySol/T5.png",
    title: "Level Sensors",
  },
  {
    src: "/images/TurnkeySol/T6.png",
    title: "Temperature Sensors",
  },
  {
    src: "/images/TurnkeySol/T7.png",
    title: "Pressure Sensors",
  }
];

const heroData = {
  img_Src: '/images/TurnkeySol/T9.png',
  title: "Turnkey Solutions",
};

const Page = () => {
  return (
    <div className="bg-white">
      <HeroSection data={heroData} />
      {/* <Range /> */}
      <Grid data={gridData} />
    </div>
  );
};

export default Page;
