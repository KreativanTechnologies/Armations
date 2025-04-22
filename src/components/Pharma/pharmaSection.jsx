import React from 'react';
import Image from 'next/image';

const PharmaSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row gap-4 items-center justify-center p-8 bg-white mt-[-200px] mb-2">
      {/* Image Section - Now on the left */}
      <div className="relative w-full md:w-1/3 h-96 md:h-[400px] overflow-hidden">
        <Image
          src="/images/about/Pharma/Rectangle 31 (1).png"
          alt="Colorful Pills"
          layout="fill"
          className="object-cover"
        />
      </div>

      {/* Text Content - Now on the right */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-6 z-10">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold font-Poppins text-black">Textile Industry</h2>
          <div className="w-16 h-1 bg-red-500"></div>
          <p className="text-[#606062] text-lg font-Poppins font-medium md:text-base leading-relaxed">
            The Textile Industry has grown rapidly due to the advent of automation. Textile products such as cloth, yarn, cotton and other fabrics have been easier to produce due to automation. Automation has improved product quality and reduced working hours, while providing safer working conditions for employees.
          </p>
          <div className="pt-2 md:pt-4">
            <button className="mt-4 px-4 py-2.5 rounded-full border-2 border-red-500 text-black text-[15px] font-normal hover:bg-red-500 hover:text-white transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmaSection;
