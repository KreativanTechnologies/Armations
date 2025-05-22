
import Image from 'next/image';

const FirstParallax = () => {
  return (
    <div className="px-6 sm:px-0">
      <div className="bg-white">
        <div className="relative flex flex-col lg:flex-row items-center mb-6">
          {/* Image Section */}
          <div className="w-full lg:w-[60%] h-[300px] sm:h-[400px] md:h-[450px] relative overflow-hidden">
            <Image
              src="/images/Industryimg/Automationimg/Rectangle 31.png"
              alt="Business technology meeting"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Section */}
          <div className="
            w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] 
            lg:w-[55%] bg-white 
            p-6 md:p-8 
            lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 
            lg:-ml-[20%] mt-[-40px] lg:mt-0 z-10 lg:left-[58%] my-4 lg:my-8
          ">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold font-Poppins text-black">The Growing Landscape of the Automation<br></br>Industry in India</h2>
              <div className="w-26 h-1 bg-red-500 rounded-lg"></div>
              <p className="text-[#606062] text-lg font-Poppins font-medium md:text-base leading-relaxed">
                 The Automation Industry in India stands before a quantum jump. The rapid industrial growth, with fast and continuous changes in technology, has driven automation to the forefront in fostering innovation and giving a competitive edge to businesses across most industries. This article explores emerging automation in India, current trends, and their future prospects.
              </p>
              <div className="pt-2 md:pt-4">
                <button className="mt-4 px-4 py-2.5 rounded-full border-2 border-red-500 text-black text-[15px] font-normal hover:bg-red-500 hover:text-white transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstParallax;

