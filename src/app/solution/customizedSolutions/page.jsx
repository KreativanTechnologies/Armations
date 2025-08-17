"use client";
import Grid from "../../../components/CustomizedSolution/Grid.jsx";
import HeroSection from "../../../components/DCScomp/HeroSection.jsx";
import ProductsCard from "../../../components/Common/ProductsCard.jsx";

const heroData = {
  img_Src: "/images/CoustimizeSol/CBg.png",
  title: "Customized Solutions",
};

const productCardData = [
  {
    title: " 🤖 IoT-Based Monitoring System in Automation",
    description:
      "A system where smart sensors, controllers, and cloud platforms work together to monitor, control, and optimize automated processes in real time.",
    image: "/images/CoustimizeSol/R1.webp",
  },
  {
    title: "Remote Monitoring of Sewage Treatment Plant",
    description:
      "Improve efficiency and safety by remotely monitoring your sewage treatment plant with our advanced system. Our state-of-the-art cloud technology offers real-time oversight and control from anywhere. With its intuitive interface, you can track performance in real-time, receive instant alerts, and manage operations seamlessly. Consequently, you will reduce downtime and maintain compliance with regulatory standards by monitoring crucial parameters remotely. Additionally, our reliable remote monitoring solution helps sewage treatment plants optimize maintenance schedules, enhance operational efficiencies, and safeguard environmental health.",
    image: "/images/CoustimizeSol/R2.png",
  },
  {
    title: "Water treatment and lifting scheme",
    description:
      "Customized Automation Solutions in India is to our water treatment and lifting scheme avail all solutions for clean and efficient water management. Advanced filtration and purification technologies ensure the quantity and quality of water for various purposes. With an integrated lifting system, there is enhanced access to water delivery while keeping the pressure and flow at an optimal level. Suitable for residential, commercial, or industrial establishments, our scheme provides water treatment and efficient water-lifting to assure consistent water quality and availability. Improve your infrastructure of water management with our latest lifting and treatment solutions.",
    image: "/images/CoustimizeSol/R3.png",
  },
];

const gridData = [
  {
    src: "/images/Sensors/S1.webp",
    title: "Data monitoring and controlling of a machine/process.",
    desc: "Data monitoring and control are critical components in the automation of any machine or process. At AEPL, we specialize in implementing smart monitoring and control systems that ensure real-time visibility, efficiency, and reliability of operations. Using advanced sensors, flow meters, level sensors, and analyzers, we continuously track key performance parameters such as pressure, flow, level, temperature, and quality..",
  },
  {
    src: "/images/Sensors/S2.webp",
    title: "Fully automated system with instrumentation and IOT",
    desc: "A fully automated system integrated with advanced instrumentation and IoT (Internet of Things) forms the backbone of modern, intelligent operations. At AEPL, we design and deploy such systems to eliminate manual intervention, enhance efficiency, and enable real-time decision-making across various sectors..",
  },
  {
    src: "/images/Sensors/S8.webp",
    title: "Dust controller system",
    desc: "A Dust Controller System is an essential solution for managing and minimizing airborne dust particles in industrial and construction environments. At AEPL, we design and implement fully automated dust suppression systems that ensure cleaner, safer, and more compliant workspaces.",
  },
  {
    src: "/images/Sensors/S4.webp",
    title: "Monitoring of DC voltage and tanks",
    desc: "Monitoring DC voltage and tank levels is crucial for ensuring the safety, reliability, and efficiency of automated systems. At AEPL, we provide advanced solutions that enable real-time tracking and control of both electrical and fluid parameters using precision instrumentation and IoT integration.",
  },
];

const Page = () => {
  return (
    <div className="bg-white">
      <HeroSection data={heroData} />
      <ProductsCard data={productCardData} />
      <Grid data={gridData} />
    </div>
  );
};

export default Page;
