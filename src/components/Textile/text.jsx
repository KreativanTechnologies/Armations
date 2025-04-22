import Image from 'next/image';

const TextSection = () => {
  return (
    <>
      {/* <div className="relative flex items-center py-4 bg-white justify-center mt-20 mb-20">
        <div className="w-0.5 h-10 bg-white mr-4"></div>
        <div className="text-5xl font-semibold flex items-end gap-4">
          <span className="text-black">Textile Industry</span>
          <div className="relative">
            <span className="text-red-600 font-bold">Solutions</span>
            <div className="absolute left-0 right-0 h-[2px] bg-red-600 bottom-[-4px]"></div>
          </div>
        </div>
      </div> */}

      <div className="bg-white">
        <div className="relative flex flex-col lg:flex-row items-center mb-6">
          <div className="w-full lg:w-[60%] h-[300px] sm:h-[400px] md:h-[450px] relative overflow-hidden">
            <Image
              src="/images/about/Textile/Rectangle 31.png"
              alt="Business technology meeting"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="w-[85%] lg:w-[55%] bg-white rounded-lg shadow-lg p-6 md:p-8 lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:-ml-[20%] mt-[-40px] lg:mt-0 z-10 lg:left-[58%] my-4 lg:my-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold font-Poppins text-black">Textile Industry</h2>
              <div className="w-16 h-1 bg-red-500"></div>
              <p className="text-[#606062] text-lg font-Poppins font-medium md:text-base leading-relaxed">
                The Textile Industry has grown rapidly due to the advent of automation. Textile products such as cloth, yarn, cotton and other fabrics have been easier to produce due to automation. Automation has improved product quality and reduced working hours, while providing safer working conditions for employees.
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
    </>
  );
};

export default TextSection;
