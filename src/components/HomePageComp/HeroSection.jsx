"use client";
import Image from "next/image";

const HeroSection = ({ data }) => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src={data.img_Src}
          alt={data.title}
          fill
          quality={100}
          className="brightness-50 object-cover"
        />
      </div>
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold">{data.title}</h1>
        <p className="mt-4 text-lg md:text-2xl max-w-6xl">{data.desc}</p>

        {data.btn_Text && (
          <button className="mt-6 px-6 py-3 border-2 border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition cursor-pointer">
            {data.btn_Text}
          </button>
        )}
      </div>
    </div>
  );
};
export default HeroSection;