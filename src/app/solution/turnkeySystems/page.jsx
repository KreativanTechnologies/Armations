import Range from '../../../components/TurenkeySystems/CompleteRange.jsx';
import HeroSection from "../../../components/DCScomp/HeroSection.jsx";
import Grid from "../../../components/CustomizedSolution/Grid.jsx";

const gridData = [
  {
    src: "/images/TurnkeySol/T1.png",
    title: "Level Sensors",
    desc:'Level sensors are essential components in process automation used to detect, monitor, and control the level of liquids, solids, or slurries within a tank or system. At AEPL, we offer a wide range of reliable and accurate level sensing solutions tailored to various industrial applications, including water treatment, chemical processing, and storage management.'
  },
  {
    src: "/images/TurnkeySol/T2.png",
    title: "Temperature Sensors",
    desc: 'Temperature sensors are critical devices used in process automation to measure and monitor temperature variations in various industrial applications. At AEPL, we provide a comprehensive range of temperature sensors designed for accuracy and reliability, ensuring optimal performance in processes such as HVAC, food processing, and chemical manufacturing.'
  },
  {
    src: "/images/TurnkeySol/T3.png",
    title: "Photoelectric Sensors",
    desc : 'Photoelectric sensors are versatile devices used in automation to detect the presence or absence of objects, measure distances, and monitor processes. At AEPL, we provide a comprehensive range of photoelectric sensors designed for various applications, including packaging, material handling, and quality control.'
  },
  {
    src: "/images/TurnkeySol/T4.png",
    title: "Proximity Sensors",
    desc: 'Proximity sensors are essential components in automation systems, used to detect the presence or absence of objects without physical contact. At AEPL, we offer a wide range of proximity sensors designed for various industrial applications, including manufacturing, robotics, and material handling.'
  },
  {
    src: "/images/TurnkeySol/T5.png",
    title: "Level Sensors",
    desc: 'Level sensors are essential components in process automation used to detect, monitor, and control the level of liquids, solids, or slurries within a tank or system. At AEPL, we offer a wide range of reliable and accurate level sensing solutions tailored to various industrial applications, including water treatment, chemical processing, and storage management.'
  },
  {
    src: "/images/TurnkeySol/T6.png",
    title: "Temperature Sensors",
    desc: 'Temperature sensors are critical devices used in process automation to measure and monitor temperature variations in various industrial applications. At AEPL, we provide a comprehensive range of temperature sensors designed for accuracy and reliability, ensuring optimal performance in processes such as HVAC, food processing, and chemical manufacturing.'  
  },
  {
    src: "/images/TurnkeySol/T7.png",
    title: "Pressure Sensors",
    desc: 'Pressure sensors are vital components in process automation, used to measure and monitor pressure levels in various industrial applications. At AEPL, we offer a wide range of pressure sensors designed for accuracy and reliability, ensuring optimal performance in processes such as fluid control, HVAC systems, and chemical processing.'
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
