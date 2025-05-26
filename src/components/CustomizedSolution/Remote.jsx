import React from "react";

const compData = [
  {
    Heading: " 🤖 IoT-Based Monitoring System in Automation",
    Description:
      "A system where smart sensors, controllers, and cloud platforms work together to monitor, control, and optimize automated processes in real time.",

    Img_Src: "/images/CoustimizeSol/R1.webp",
    isReverse: false,
  },
  {
    Heading: "Remote Monitoring of Sewage Treatment Plant",
    Description:
      "Improve efficiency and safety by remotely monitoring your sewage treatment plant with our advanced system. Our state-of-the-art cloud technology offers real-time oversight and control from anywhere. With its intuitive interface, you can track performance in real-time, receive instant alerts, and manage operations seamlessly. Consequently, you will reduce downtime and maintain compliance with regulatory standards by monitoring crucial parameters remotely. Additionally, our reliable remote monitoring solution helps sewage treatment plants optimize maintenance schedules, enhance operational efficiencies, and safeguard environmental health.",
    Img_Src: "/images/CoustimizeSol/R2.png",
    isReverse: true,
  },
  {
    Heading: "Water treatment and lifting scheme",
    Description:
      "Customized Automation Solutions in India is to our water treatment and lifting scheme avail all solutions for clean and efficient water management. Advanced filtration and purification technologies ensure the quantity and quality of water for various purposes. With an integrated lifting system, there is enhanced access to water delivery while keeping the pressure and flow at an optimal level. Suitable for residential, commercial, or industrial establishments, our scheme provides water treatment and efficient water-lifting to assure consistent water quality and availability. Improve your infrastructure of water management with our latest lifting and treatment solutions.",
    Img_Src: "/images/CoustimizeSol/R3.png",
    isReverse: false,
  },
];

const Remote = () => {
  return (
    <div className="w-full h-full text-black bg-gray-100 flex flex-col gap-[4vw]">
      {compData.map((data, index) => (
        <div
          className={`relative h-full md:h-[36vw] w-full flex flex-col gap-12 md:gap-0 ${
            data.isReverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center`}
          key={index}
        >
          <div
            className={`w-full md:w-1/2 h-full ${
              data.isReverse ? " border-r-[0.6vw]" : " border-l-[0.6vw]"
            } border-red-600 bg-gray-300 p-6 md:px-[6vw] flex flex-col items-center justify-center`}
          >
            <h1 className=" text-xl leading-6 md:text-[2.3vw] md:leading-[3vw] font-bold">
              {data.Heading}
            </h1>
            <p className="md:text-[1.1vw] mt-[1vw]">{data.Description}</p>
            <p className="md:text-[1.1vw] mt-[1vw]">{data.keyDescription}</p>
          </div>
          <div
            className={`md:absolute w-full md:w-[53%] h-[80%] rounded-2xl md:rounded-none ${
              data.isReverse ? "md:left-0" : "md:right-0 md:rounded-l-[2vw]"
            } bg-white  overflow-hidden md:rounded-r-[2vw]`}
          >
            <img
              className="w-full h-full object-center object-contain"
              src={data.Img_Src}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Remote;
