"use client"
import React from 'react'
const OurMission = () => {
  return (
    <div className="h-full flex flex-col-reverse bg-white md:flex-row items-center justify-between w-full overflow-hidden">
{/* left side */}
      <div
        className="w-full h-[45%] md:h-full md:w-1/2  flex flex-col gap-3 md:gap-7 py-[18vw]  ">
        <h1 className="text-3xl text-black md:text-4xl font-bold p-4">
          Our Mission
        </h1>
        <p className="mt-4 text-lg text-black leading-relaxed">
          At our Mobile App development agency, we specialize in creating custom websites and apps that are fast, responsive, and visually stunning. We focus on delivering seamless user experiences and scalable solutions tailored to your business needs.
        </p>
        <div className="w-full text-black md:w-1/2">
        <button className="rounded-full px-10 py-3 text-base border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors">
              Regisgter Now
            </button>
        </div>
      </div>

{/* right side  */}
      <div
        className="w-full h-[55%] relative md:w-1/2 md:h-full flex justify-center items-center overflow-hidden"
      >
          <img
            src="/om.png"
            alt="Mission"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-red-600 opacity-60 rounded-lg"></div>
        
      </div>

    </div>
  )
}
export default OurMission






