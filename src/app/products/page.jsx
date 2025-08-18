'use client';
import HeroSection from "../../components/CustomizedSolution/Hero.jsx";
import Grid from "../../components/CustomizedSolution/Grid.jsx";

const heroData = {
    img_Src: '/images/products/sli.jpg',
    //   title: "Products that we use",
};


const gridData = [
    {
        src: "/images/products/p1.png",
        title: "Instrumental Products",
        desc: "Our instrumental automation solutions enhance precision and control across industrial processes. Key offerings include Variable Frequency Drives (VFDs), Programmable Logic Controllers (PLCs), Human-Machine Interfaces (HMIs), SCADA Systems, and Industrial Sensors for accurate measurement.",
    },
    {
        src: "/images/products/p2.png",
        title: "Industrial Sensors",
        desc: "Vital for monitoring and controlling various parameters, our industrial sensors include temperature, pressure, level, flow, and proximity sensors. They ensure robust performance and accuracy, optimizing industrial processes and enhancing operational efficiency.",
    },
    {
        src: "/images/products/p3.png",
        title: "Logic Controller (PLC)",
        desc: "Our PLCs automate and manage complex industrial processes with reliable performance and flexible programming. They are ideal for controlling machinery and processes, ensuring seamless operation and precision in manufacturing environments.",
    },
    {
        src: "/images/products/p4.png",
        title: "Variable Frequency Drive (VFD)",
        desc: "VFDs optimize motor performance by adjusting speed and torque, enhancing operational control and energy efficiency. They are perfect for applications in HVAC systems and industrial machinery, delivering significant cost savings and improved system performance.",
    },
];


const Page = () => {
    return (
        <div className="bg-white">
            {/* <HeroSection data={heroData} /> */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center text-center text-white">
                <div className="absolute inset-0 overflow-hidden w-full h-full">
                    <img
                        src="/images/products/sli.jpg"
                        alt="products"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-black opacity-70" />
                <div className="relative ">
                    <h1 className="relative  text-2xl md:text-4xl lg:text-5xl font-bold">
                        Products that we use        </h1>
                    <div className=" w-20 md:w-64 mt-3 h-1 bg-red-500 mx-auto" />
                </div>
            </div>
            <div className="text-black mt-4 text-sm md:text-2xl max-w-6xl mx-auto text-center">
                <h1>
                    At Aarmation Electric, we offer a comprehensive suite of products designed to meet diverse automation needs and drive industry efficiency. Our automation solutions cater to various sectors, including manufacturing, energy, and transportation, providing cutting-edge technology and reliable performance. Our end-to-end IoT solutions empower smart industries, smart living and smart enterprises and deliver connected experiences by connecting assets, operations/logistics, and services.
                </h1>
            </div>

            <Grid data={gridData} />
        </div>
    );
};

export default Page;
