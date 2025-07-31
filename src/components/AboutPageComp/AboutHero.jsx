import Image from "next/image"

const AboutHero = () => {
  return (
    <div className="relative bg-gray-50 py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="h-full w-full bg-[linear-gradient(135deg,#f5f5f5_25%,#eeeeee_25%,#eeeeee_50%,#f5f5f5_50%,#f5f5f5_75%,#eeeeee_75%)]"
          style={{ backgroundSize: "100px 100px" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl text-black md:text-5xl font-bold mb-6">
            About <span className="text-red-500">Us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-xl leading-relaxed">
          Welcome to Aarmation Electric, where innovation meets reliability. As a trusted leader in electrical solutions, we specialize in delivering cutting-edge products and services tailored to meet the dynamic needs of modern industries.
          </p>
        </div>

        <div className="relative mt-8">
          <div className="w-full relative">
            <Image
              src="/images/about/about.png"
              alt="Team members working with technical equipment"
              width={1000}
              height={500}
              className="w-full h-[70vw] md:h-auto object-cover rounded-lg"
              priority
            />
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 top-[70%] w-[80vw] max-w-6xl bg-white  p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl text-black font-bold mb-4">
              Our Story
              <div className="h-1 w-16 bg-red-500 mt-2"></div>
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
            Aarmation Electric Private Limited (AEPL) provides comprehensive automation, instrumentation, and electrical solutions. We handle a broad range of automation projects across sectors such as Water & Waste Water, Building and Infrastructure, Industries, and Government Departments.
<br />
Since our start in 2018, we have successfully completed over 750 schemes and projects across India. We offer full automation solutions for man-less operations, including lift water supply schemes, irrigation water supply schemes, water treatment, and sewage treatment plants.We operate a Corporate Sales Office in Chandigarh, a Head Office at our electrical panel manufacturing plant in Palampur (Himachal Pradesh), and Branch Offices in Dehradun, Mumbai, and Bhubaneshwar.
<br />
Our expertise encompasses the supply and installation of various starters, LT and HT panels, pumping machinery, automation, and SCADA systems. We also provide valves such as NRV, sluice valves, actuated valves, electromagnetic and ultrasonic flow meters, ultrasonic level sensors, water quality analyzers, and a wide array of instrumentation products.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutHero


