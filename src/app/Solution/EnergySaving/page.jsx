'use client';

import Image from 'next/image';
import HeroSection from "../../../components/DCScomp/HeroSection";

const equipmentData = [
  {
    id: 1,
    title: "Air Handling Units",
    image: "/images/energySaving/energy1.png",
    description: "Air handling units condition and distribute air throughout a building with Energy Saving Solution – Aarmation Electric. ...",
  },
  {
    id: 2,
    title: "Air Compressors",
    image: "/images/energySaving/energy2.png",
    description: "An air compressor is a device that converts power ...",
  },
  {
    id: 3,
    title: "Chillers",
    image: "/images/energySaving/energy3.png",
    description: "An air compressor is a device that converts power ...",
  },
  {
    id: 4,
    title: "Centrifugal Fans",
    image: "/images/energySaving/energy4.png",
    description: "A centrifugal fan is a mechanical device for moving air ...",
  },
];

const heroData = {
  img_Src: '/images/Banner/energySaving.png',
  title: "Energy Saving Solution",
};


const Page = () => {
  return (
    <div className="bg-white">
      <HeroSection data={heroData} />
      <div className="container mx-auto px-4 py-8 mt-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {equipmentData.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-shadow duration-300 cursor-pointer hover:shadow-lg"
            >
              <div className="flex flex-col items-center p-6">
                <div className="relative w-full h-48 mb-6">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h2 className="text-3xl font-semibold text-[#EC3436] text-center mb-4 font-Poppins">{item.title}</h2>
                <p className="text-[#606062] text-center text-xl font-medium font-Poppins">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
