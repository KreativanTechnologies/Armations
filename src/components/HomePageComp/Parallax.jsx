import React from "react";
import { Lightbulb, CircuitBoard } from "lucide-react";

const Parallax = () => {
  return (
    <div>
      <div className=" flex bg-white">
        <div className="w-[60%] "  style={{ backgroundImage: "url('/images/ourMission/mission.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',

         }}>
 
        </div>
        <div className="bg-white w-[40%] flex justify-center items-center border-2 border-black  relative">
        <div className="    ">
<div className="   ">
  <main className=" bg-white  p-4 ">
    <div className="">
      {/* Mission Section */}
      <div className="space-y-8">
        {/* Title with Red Underline */}
        <div className="space-y-2">
          <h1 className="text-[32px] font-bold text-black">
            Our Mission
          </h1>
          <div className="w-16 h-1 bg-red-500" />
        </div>

        {/* Mission Text */}
        <p className="text-[15px] leading-relaxed text-gray-600 max-w-[90%]">
          Our end to end smart solutions empower smart industries,
          smart living and smart enterprises and deliver connecting
          experiences by connecting assets, operation/ logistics and
          services
        </p>

        {/* Features List */}
        <div className="space-y-4">
          {/* Energy Saving Solution */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <Lightbulb
                className="w-full h-full text-red-500"
                strokeWidth={1.5}
              />
            </div>
            <span className="text-[15px] text-gray-700">
              Energy Saving Solution
            </span>
          </div>

          {/* Distributed Control System */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <CircuitBoard
                className="w-full h-full text-red-500"
                strokeWidth={1.5}
              />
            </div>
            <span className="text-[15px] text-gray-700">
              Distributed Control System
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-4 px-8 py-2.5 rounded-full border-2 border-red-500 text-red-500 text-[15px] font-medium hover:bg-red-500 hover:text-white transition-colors duration-200">
          Learn More About Us
        </button>
      </div>
    </div>
  </main>
</div>
</div>
        </div>
      </div>
    </div>
    
  );
};

<div className="   border-2 border-green-700 ">
<div className="   ">
  <main className=" bg-white  p-4 ">
    <div className="">
      {/* Mission Section */}
      <div className="space-y-8">
        {/* Title with Red Underline */}
        <div className="space-y-2">
          <h1 className="text-[32px] font-bold text-black">
            Our Mission
          </h1>
          <div className="w-16 h-1 bg-red-500" />
        </div>

        {/* Mission Text */}
        <p className="text-[15px] leading-relaxed text-gray-600 max-w-[90%]">
          Our end to end smart solutions empower smart industries,
          smart living and smart enterprises and deliver connecting
          experiences by connecting assets, operation/ logistics and
          services
        </p>

        {/* Features List */}
        <div className="space-y-4">
          {/* Energy Saving Solution */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <Lightbulb
                className="w-full h-full text-red-500"
                strokeWidth={1.5}
              />
            </div>
            <span className="text-[15px] text-gray-700">
              Energy Saving Solution
            </span>
          </div>

          {/* Distributed Control System */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <CircuitBoard
                className="w-full h-full text-red-500"
                strokeWidth={1.5}
              />
            </div>
            <span className="text-[15px] text-gray-700">
              Distributed Control System
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-4 px-8 py-2.5 rounded-full border-2 border-red-500 text-red-500 text-[15px] font-medium hover:bg-red-500 hover:text-white transition-colors duration-200">
          Learn More About Us
        </button>
      </div>
    </div>
  </main>
</div>
</div>

export default Parallax;
