import React from "react";

const TurnkeySolutions = () => {
  return (
    <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/TurnkeySol/T9.png')" }}>
      
      <div className="absolute inset-0 bg-black/50"></div>
      
      <h1 className="relative text-white text-2xl md:text-4xl lg:text-5xl font-bold">
        Turnkey <span className="text-red-500">Solutions</span>
        <div className="w-16 md:w-48 h-1 bg-red-500 mt-2 mx-auto"></div>
      </h1>
    </div>
  );
};

export default TurnkeySolutions;
