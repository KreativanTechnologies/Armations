import Image from "next/image";
import { useRouter } from "next/navigation";

const Parallax = ({ data }) => {
  const router = useRouter();
  return (
    <div className="bg-white md:py-[4vw]">
      <div className="relative flex flex-col lg:flex-row items-center">
        {/* Image Section - Left Side */}
        <div className="w-full lg:w-[60%] h-[300px] sm:h-[400px] md:h-[450px] relative rounded-lg md:rounded-none md:rounded-r-[2vw]  overflow-hidden">
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
          className="w-[85%] lg:w-[55%] bg-white rounded-lg md:rounded-[2vw] shadow-lg p-6 md:p-8 
                        lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 
                        lg:-ml-[20%] mt-[-40px] lg:mt-0 z-10 lg:left-[58%]
                        my-4 lg:my-8 "
        >
          <div className="space-y-2">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold font-Poppins text-black">
                {data.title}
              </h2>
              <div className="w-24 h-1 bg-red-500"></div>
            </div>

            <p className="text-[#606062] text-lg font-Poppins font-medium md:text-base leading-relaxed">
              {data.desc}
            </p>
            {data.list && (
              <div className="space-y-3 py-2">
                {data.list.map((item, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-50">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                    </div>
                    <span className="text-[#606062] font-medium text-lg md:text-base">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="">
              <button
                onClick={() => router.push(data.redirectTo)}
                className="px-4 py-2 cursor-pointer rounded-full border-2 border-red-500 text-black text-[15px] font-normal hover:bg-red-500 hover:text-white transition-colors duration-200"
              >
                {data.btn_Text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
