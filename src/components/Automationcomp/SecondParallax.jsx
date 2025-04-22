import Image from "next/image";

const SecondParallax = () => {
  return (
    <div className="bg-white mt-10">
      <div className="relative flex flex-col lg:flex-row-reverse items-center">
        
        {/* Image Section */}
        <div className="w-full lg:w-[60%] h-[300px] sm:h-[400px] md:h-[450px] relative overflow-hidden">
          <Image
            src="/images/Industryimg/Automationimg/Rectangle 32.png"
            alt="Business technology meeting"
            layout="fill"  // Adjusted to use `layout="fill"` and fixed parent div to have relative positioning
            className="object-cover"
            priority
          />
        </div>
        
        {/* Text Section */}
        <div
          className="w-[85%] lg:w-[55%] bg-white rounded-lg shadow-lg p-6 md:p-8 
            lg:absolute lg:left-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 
            lg:-mr-[20%] mt-[-40px] lg:mt-0 z-10 lg:right-[58%]
            my-4 lg:my-8 lg:ml-[10%]"
        >
          <div className="space-y-2">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold font-Poppins text-black">
                Emergence of Automation in India
              </h2>
              <div className="w-24 h-1 bg-red-500 rounded-lg"></div>
            </div>

            <p className="text-[#606062] text-lg font-Poppins font-medium md:text-base leading-relaxed">
              Automation adoption in India has seen a strong drive in recent years across verticals such as manufacturing, automotive, pharmaceuticals, and agriculture. It’s all about improving operations, reducing human error, and cost-effectiveness. Moreover, initiatives by the government, like ‘Make in India‘ and ‘Digital India’, further accelerate the integration of automation technologies into the Indian market.
            </p>

            <div className="pt-2 md:pt-4">
              {/* <button className="mt-4 px-4 py-2.5 rounded-full border-2 border-red-500 text-black text-[15px] font-normal hover:bg-red-500 hover:text-white transition-colors duration-200">
                Learn More
              </button> */}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SecondParallax;
