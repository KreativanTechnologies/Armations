import Image from 'next/image';
import Link from "next/link"

const   Text = () => {
  return (
    <div className="px-6 sm:px-0">
      <div className="bg-white">
        <div className="relative flex flex-col lg:flex-row items-center mb-6">
        
          <div className="w-full lg:w-[60%] h-[300px] sm:h-[400px] md:h-[450px] relative overflow-hidden ">
            <Image
              src="/images/about/Textile/Rectangle 31.png"
              alt="Business technology meeting"
              fill
              className="object-cover rounded-lg "
              priority
            />
          </div>

          {/* Text Section */}
          <div className="
            w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] 
            lg:w-[55%] bg-white rounded-lg shadow-lg 
            p-6 md:p-8 
            lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 
            lg:-ml-[20%] mt-4 lg:mt-0 z-10 lg:left-[58%] lg:my-8
            relative
          ">
            <div className="space-y-2">
              <h2 className="text-[6vw] md:text-[2vw] font-semibold font-Poppins text-black">Textile Industry</h2>
              <div className="w-26 h-1 bg-red-500 rounded-lg"></div>
              <p className="text-[#606062] text-lg font-Poppins font-medium md:text-base leading-relaxed">
                 The Textile Industry has grown rapidly due to the advent of automation. Textile products such as cloth, yarn, cotton and other fabrics have been easier to produce due to automation. Automation has improved product quality and reduced working hours, while providing safer working conditions for employees.
              </p>
              <div className="pt-2 md:pt-4">
                 <Link href="/ContactUs">
                  <button className="mt-4 px-4 py-2.5 cursor-pointer rounded-full border-2 border-red-500 text-black text-[15px] font-normal hover:bg-red-500 hover:text-white transition-colors duration-200">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
