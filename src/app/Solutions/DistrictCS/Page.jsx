'use client'; // (optional if you're using states later)

import React from 'react';
import Banner from '../../../components/Supervisory/Banner';
import Image from 'next/image';

const Page = () => {
  const equipmentData = [
    {
      id: 1,
      title: "Air Handling Units",
      image: "/images/energySaving/energy1.png",
      description: "Air handling units condition and distribute air throughout a building with Energy Saving Solution – Aarmation Electric. First, they draw fresh ambient air from outside and then clean it. Next, they either heat or cool the air and may add humidity as needed. Subsequently, the system forces this conditioned air through ductwork to designated areas within the building. Additionally, most units include a separate duct to remove used, dirty air from rooms, which is then returned to the AHU. A fan in the AHU discharges this air back to the atmosphere. Furthermore, some of this return air gets recirculated into the fresh air supply to conserve energy.",
    },
    {
      id: 2,
      title: "Air Compressors",
      image: "/images/energySaving/energy2.png",
      description: "An air compressor is a device that converts power (using an electric motor, diesel or gasoline engine, etc.) into potential energy stored in pressurized air (i.e., compressed air).",
    },
    {
      id: 3,
      title: "Chillers",
      image: "/images/energySaving/energy3.png",
      description: "An air compressor is a device that converts power (using an electric motor, diesel or gasoline engine, etc.) into potential energy stored in pressurized air (i.e., compressed air).",
    },
    {
      id: 4,
      title: "Centrifugal Fans",
      image: "/images/energySaving/energy4.png",
      description: "A centrifugal fan is a mechanical device for moving air or other gases in a direction at an angle to the incoming fluid. Centrifugal fans often contain a ducted housing to direct outgoing air in a specific direction or across a heat sink.",
    },
  ];

  return (
    <div className="bg-white">
      <Banner bgImage="/images/Banner/energySaving.png" title="Energy Saving Solution" />
      <div className="container mx-auto px-4 py-8 mt-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {equipmentData.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
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
