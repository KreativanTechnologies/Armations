'use client';
import HeroSection from "../../../components/DCScomp/HeroSection.jsx";
import Grid from "../../../components/CustomizedSolution/Grid.jsx";

const heroData = {
  img_Src: '/images/Banner/energySaving.png',
  title: "Energy Saving Solution",
};


const gridData = [
  {
    src: "/images/energySaving/energy1.png",
    title: "Air Handling Units",
    desc: "Air handling units condition and distribute air throughout a building with Energy Saving Solution – Aarmation Electric.First, they draw fresh ambient air from outside and then clean it. Next, they either heat or cool the air and may add humidity as needed. Subsequently, the system forces this conditioned air through ductwork to designated areas within the building. Additionally, most units include a separate duct to remove used, dirty air from rooms, which is then returned to the AHU. A fan in the AHU discharges this air back to the atmosphere. Furthermore, some of this return air gets recirculated into the fresh air supply to conserve energy.",
  },
  {
    src: "/images/energySaving/energy2.png",
    title: "Air Compressors",
    desc: "An air compressor is a device that converts power (using an electric motor, diesel or gasoline engine, etc.) into potential energy stored in pressurized air (i.e., compressed air).​",
  },
  {
    src: "/images/energySaving/energy3.png",
    title: "Chillers",
    desc: "Chiller is a machine that removes heat from a liquid via a vapour-compression or absorption refrigeration cycle. This liquid can then be circulated through a heat exchanger to cool equipment, or another process stream (such as air or process water)..",
  },
  {
    src: "/images/energySaving/energy4.png",
    title: "Centrifugal Fans",
    desc: "A centrifugal fan is a mechanical device for moving air  or other gases in a direction at an angle to the incoming fluid. Centrifugal fans often contain a ducted housing to direct outgoing air in a specific direction or across a heat sink.",
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
