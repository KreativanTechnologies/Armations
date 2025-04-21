import Image from "next/image"
import { Zap, Sun } from "lucide-react"


const Parallax = () => {
  return (
    <div className="bg-white   ">
      <div className="relative flex flex-col lg:flex-row items-center">
        {/* Image Section - Left Side */}
        <div className="w-full lg:w-[60%] h-[300px] sm:h-[400px] md:h-[450px] relative rounded-lg overflow-hidden">
          <Image
            src="/images/ourMission/mission.png"
            alt="Business technology meeting"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mission Section - Right Side with Overlap */}
        <div
          className="w-[85%] lg:w-[55%] bg-white rounded-lg shadow-lg p-6 md:p-8 
                        lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 
                        lg:-ml-[20%] mt-[-40px] lg:mt-0 z-10 lg:left-[58%]
                        my-4 lg:my-8 "
        >
          <div className="space-y-2">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold font-Poppins text-black">Our Mission</h2>
              <div className="w-16 h-1 bg-red-500"></div>
            </div>

            <p className="text-[#606062] text-lg font-Poppins font-medium md:text-base leading-relaxed">
              Our end to end smart solutions empower smart industries, smart living and smart enterprises and deliver
              connecting experiences by connecting assets, operation/ logistics and services
            </p>

            <div className="space-y-3 py-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-50">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                </div>
                <span className="text-[#606062] font-medium text-lg md:text-base">Energy Saving Solution</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-50">
                  <Sun className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                </div>
                <span className="text-gray-700 font-medium text-sm md:text-base">Distributed Control System</span>
              </div>
            </div>

            <div className="pt-2 md:pt-4">
            <button className="mt-4 px-4 py-2.5 rounded-full border-2 border-red-500 text-black text-[15px] font-normal hover:bg-red-500 hover:text-white transition-colors duration-200">
          Learn More About Us
        </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};



export default Parallax;


