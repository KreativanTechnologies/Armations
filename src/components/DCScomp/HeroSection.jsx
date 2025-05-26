import Image from "next/image";
import HeroImage from "../../assets/distributed/hero.png";

const HeroSection = () => {
  return (
    <div className="w-full h-[90vh] relative flex items-center justify-center bg-black/60">
      <div className="w-full h-full">
        <Image
          src={HeroImage}
          alt="Distributed Control Systems Diagram"
          className="absolute w-full h-full object-cover mix-blend-multiply rounded-lg shadow-md inset-0"
        />
      </div>
      <div className="text-center absolute">
        <h1 className="text-4xl font-bold font-poppins text-white">
          Distributed Control Systems
        </h1>
        <div className="w-[250px] h-1 mx-auto mt-2 bg-[#ff0004] rounded-full"></div>
      </div>
    </div>
  );
};

export default HeroSection;
