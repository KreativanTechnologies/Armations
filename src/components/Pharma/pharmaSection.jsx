import Image from 'next/image';

const PharmaSection = () => {
  return (
    <>
      {/* Background Image */}
      <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-screen overflow-hidden mt-12">
        <img
          src="/images/about/Pharma/Rectangle 115.png"
          alt="Pharma Background"
          className="absolute inset-0 w-[90%] h-full object-cover opacity-90 mx-auto"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-60 xl:-mt-72 overflow-x-hidden">
        <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-none mx-auto">
          <div className="relative flex flex-col md:flex-row items-start w-full">

            {/* Left Image */}
            <div className="relative w-full md:w-1/2 h-[500px] sm:h-[600px] md:h-[600px] mb-0">
              <Image
                src="/images/about/Pharma/Rectangle 31 (1).png"
                alt="Pharma Industry"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Text Block */}
            <div
              className="
                bg-white  p-6 md:p-8
                w-[90%] sm:w-[80%] md:w-[55%] 
                -mt-10 sm:-mt-12 md:mt-0
                mx-auto md:mx-0
                relative md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2
                z-20
              "
            >
              <div className="space-y-3 h-full flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-semibold font-Poppins text-black">
                  Pharmaceutical Industry
                </h2>
                <div className="w-20 h-1 bg-red-500 rounded-lg"></div>
                <p className="text-[#606062] text-base md:text-lg font-Poppins leading-relaxed">
                  The Pharmaceutical Industry plays a pivotal role in global healthcare, driving advancements in medical science and improving patient outcomes. It focuses on research, development, and production of drugs to treat a wide range of conditions—leveraging technology and scientific research to deliver safe medications.
                </p>
                <div className="pt-2 md:pt-4">
                  <button className="mt-2 px-4 py-2.5 rounded-full border-2 border-red-500 text-black text-sm md:text-base hover:bg-red-500 hover:text-white transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default PharmaSection;
