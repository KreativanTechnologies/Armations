import Image from "next/image";

const SecondParallax = () => {
  return (
    <div className="bg-white mt-10 px-6 sm:px-6 md:px-6 lg:px-0">
      <div className="relative flex flex-col lg:flex-row-reverse items-center">
        
        {/* Image Section */}
        <div className="w-full lg:w-[60%] h-[300px] sm:h-[400px] md:h-[450px] relative overflow-hidden">
          <Image
            src="/images/Industryimg/Automationimg/Rectangle 32.png"
            alt="Business technology meeting"
            layout="fill"
            className="object-cover rounded-lg"
            priority
          />
        </div>
        
        {/* Text Section */}
        <div className="
            w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] 
            lg:w-[55%] bg-white rounded-lg shadow-lg 
            p-6 md:p-8 
            lg:absolute lg:top-1/2 lg:transform lg:-translate-y-1/2 
            lg:-ml-[20%] mt-4 lg:mt-0 z-10 lg:right-[40%] lg:my-8
            relative
          ">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold font-Poppins text-black">
              Emergence of Automation in India
            </h2>
            <div className="w-24 h-1 bg-red-500 rounded-lg"></div>

            <p className="text-[#606062] text-lg font-Poppins font-medium md:text-base leading-relaxed">
              Automation adoption in India has seen a strong drive in recent years across verticals such as manufacturing, automotive, pharmaceuticals, and agriculture. It’s all about improving operations, reducing human error, and cost-effectiveness. Moreover, initiatives by the government, like ‘Make in India‘ and ‘Digital India’, further accelerate the integration of automation technologies into the Indian market.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SecondParallax;
