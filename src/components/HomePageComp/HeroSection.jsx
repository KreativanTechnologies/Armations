"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src="/bg.png" 
          alt="Aarmation Electric"
          fill
          quality={100}
          className="brightness-50 object-cover"
        />
      </div>

      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Aarmation Electric</h1>
        <p className="mt-4 text-lg md:text-2xl max-w-6xl">
          Our end-to-end smart solutions empower smart industries, smart living, and smart enterprises and deliver connected experiences by connecting assets, operation/logistics, and services.
        </p>

        <button className="mt-6 px-6 py-3 border-2 border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;