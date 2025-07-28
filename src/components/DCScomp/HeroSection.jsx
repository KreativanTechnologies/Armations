import Image from "next/image";

const HeroSection = ({ data }) => {
  return (
    <div className="w-full h-[70vh] relative flex items-center justify-center bg-black/60">
      <div className="w-full h-full relative">
        <Image
          src={data.img_Src}
          alt="Distributed Control Systems Diagram"
          fill
          className="object-cover mix-blend-multiply rounded-lg shadow-md"
        />
      </div>
      <div className="text-center absolute">
        <h1 className="text-xl md:text-[3vw] font-bold font-poppins text-white">
          {data.title}
        </h1>
        <div className="w-[25vw] h-1 mx-auto mt-2 bg-[#ff0004] rounded-full"></div>
      </div>
    </div>
  );
};

export default HeroSection;
