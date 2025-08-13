
import HeroSection from "../../../components/DCScomp/HeroSection.jsx";
import Products from "../../../components/SwitchgearSolComp/Products.jsx";

const heroData = {
  img_Src: '/images/CoustimizeSol/CBg.png',
  title: "SwitchGear Solutions",
};

const page = () => {
  return (
    <div>
      <HeroSection data={heroData} />
      <Products />
    </div>
  );
};

export default page;
