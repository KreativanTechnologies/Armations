import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 overflow-hidden w-full h-full">
        <img
          src="/images/CoustimizeSol/CBg.png"
          alt="Energy Management Systems"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="relative ">
        <h1 className="relative  text-2xl md:text-4xl lg:text-5xl font-bold">
          Energy Management Systems
        </h1>
        <div className=" w-20 md:w-64 mt-3 h-1 bg-red-500 mx-auto" />
      </div>
    </div>


   
  );
}

export default Hero





