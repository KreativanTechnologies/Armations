import Image from "next/image"

const AboutHero = () => {
  return (
    <div className=" relative bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20 pb-16 sm:pb-20 lg:pb-24 xl:pb-28">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="h-full w-full bg-[linear-gradient(135deg,#f5f5f5_25%,#eeeeee_25%,#eeeeee_50%,#f5f5f5_50%,#f5f5f5_75%,#eeeeee_75%)]"
          style={{ backgroundSize: "100px 100px" }}
        ></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black">
            About <span className="text-red-500">Us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-xl leading-relaxed px-4">
            Welcome to Aarmation Electric, where innovation meets reliability. As a trusted leader in electrical solutions, we specialize in delivering cutting-edge products and services tailored to meet the dynamic needs of modern industries.
          </p>
        </div>

        {/* Image and Content Section */}
        <div className="relative">
          {/* Main Image */}
          <div className="w-full relative">
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px]">
              <Image
                src="/images/about/about.png"
                alt="Team members working with technical equipment"
                fill
                className="object-cover rounded-lg"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              />
            </div>
          </div>

          {/* Story Card - Properly spaced without absolute positioning */}
          <div className="relative -mt-8 sm:-mt-12 lg:-mt-16 xl:-mt-20 z-10">
            <div className="w-full lg:w-[90%] xl:w-[80%] max-w-6xl bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg mx-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-black font-bold mb-3 sm:mb-4">
                Our Story
                <div className="h-1 w-12 sm:w-16 bg-red-500 mt-2"></div>
              </h3>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base space-y-3 sm:space-y-4">
                <p>
                  Aarmation Electric Private Limited (AEPL) provides comprehensive automation, instrumentation, and electrical solutions. We handle a broad range of automation projects across sectors such as Water & Waste Water, Building and Infrastructure, Industries, and Government Departments.
                </p>
                <p>
                  Since our start in 2018, we have successfully completed over 750 schemes and projects across India. We offer full automation solutions for man-less operations, including lift water supply schemes, irrigation water supply schemes, water treatment, and sewage treatment plants.
                </p>
                <p>
                  We operate a Corporate Sales Office in Chandigarh, a Head Office at our electrical panel manufacturing plant in Palampur (Himachal Pradesh), and Branch Offices in Dehradun, Mumbai, and Bhubaneshwar.
                </p>
                <p>
                  Our expertise encompasses the supply and installation of various starters, LT and HT panels, pumping machinery, automation, and SCADA systems. We also provide valves such as NRV, sluice valves, actuated valves, electromagnetic and ultrasonic flow meters, ultrasonic level sensors, water quality analyzers, and a wide array of instrumentation products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHero