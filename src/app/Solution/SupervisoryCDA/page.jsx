import ScadaInfo from '../../../components/Supervisory/ScadaInfo.jsx'
import HeroSection from "../../../components/DCScomp/HeroSection";

const heroData = {
  img_Src: '/images/supervisory/banner.png',
  title: "Supervisory control and Data Aquisition",
};

const page = () => {
  return (
    <div>
      <HeroSection data={heroData} />
      <ScadaInfo/>
      </div>
  )
}

export default page