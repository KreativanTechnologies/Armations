import Image from "next/image"
import { Zap, Sun } from "lucide-react"


const Parallax2 = () => {
  return (
    <div className="bg-white  mb-10 ">
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
              <h2 className="text-2xl md:text-3xl font-semibold font-Poppins text-black">Did You Know?</h2>
              <div className="w-32 h-1 bg-red-500"></div>
            </div>

            <p className="text-[#606062] text-lg font-Poppins font-medium md:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
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
  )
};



export default Parallax2;


