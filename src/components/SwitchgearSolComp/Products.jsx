import React from "react";

const compData = [
  {
    Heading: "Air Circuit Breaker",
    Description:
      "The Air Circuit Breaker (ACB) serves as an essential electrical device that provides overcurrent and short-circuit protection for electric circuits ranging from 800 Amps to 10,000 Amps. Typically, you will find these devices utilized in low voltage applications, specifically those below 450V. By offering robust protection, ACBs help prevent damage to electrical systems and enhance overall safety. Additionally, their design ensures reliable operation even under demanding conditions. Thus, incorporating ACBs into your electrical infrastructure ensures both protection and efficiency in managing high-current circuits.",
    Img_Src: "/images/SwitchgearSol/ACB.png",
    isReverse: false,
  },
  {
    Heading: "Miniature Circuit Breaker",
    Description:
      "A Miniature Circuit Breaker (MCB) automatically switches off the electrical circuit during abnormal network conditions. Specifically, it reacts during overload conditions as well as when faults occur. By doing so, the MCB ensures immediate disconnection, thereby protecting the circuit from damage and reducing the risk of fire. Furthermore, it enhances safety by preventing electrical hazards before they escalate. Thus, the MCB plays a crucial role in maintaining the integrity and reliability of electrical systems with our Switchgear Solutions.",
    Img_Src: "/images/SwitchgearSol/MCB.png",
    isReverse: true,
  },
  {
    Heading: "Contractor",
    Description:
      "A contactor acts as an electrically controlled switch that manages the switching of an electrical power circuit. Specifically, a contactor operates by being controlled through a circuit that has a significantly lower power level than the circuit it switches. For example, a 24-volt coil electromagnet can control a 230-volt motor switch. Therefore, while the contactor handles high-power circuits, it relies on lower-power control circuits for its operation. By doing so, it ensures efficient and reliable management of electrical power while maintaining safety and functionality.",
    Img_Src: "/images/SwitchgearSol/Contractor.png",
    isReverse: false,
  },
  {
    Heading: "Servo System",
    Description:
      "In a servo system, the servo drive or servo amplifier powers the servo motor. By doing so, the servo drive delivers numerous benefits for automatic machining systems. For instance, it provides superior positioning, speed, and motion control. Moreover, these drives enhance the overall performance and precision of the system. Thus, using servo drives significantly improves the efficiency and accuracy of automated processes, making them indispensable for advanced machining applications.",
    Img_Src: "/images/SwitchgearSol/SS.png",
    isReverse: true,
  },
  {
    Heading: "Multifunction energy meter",
    Description:
      "A multifunction energy meter actively monitors and measures all key electrical parameters. Specifically, it tracks voltage, active power, apparent power, current, power factor, reactive power, active energy, and phase angle. By doing so, this meter provides a comprehensive view of the electrical system’s performance. Moreover, it enables users to analyze and manage electrical parameters effectively. Thus, employing a multifunction energy meter enhances both monitoring capabilities and overall efficiency in managing electrical systems.",
    Img_Src: "/images/SwitchgearSol/MEM.png",
    isReverse: false,
  },
];

const Products = () => {
  return (
    <div className="w-full h-full text-black bg-white">
      {compData.map((data, index) => (
        <div
          className={`relative h-full md:h-[36vw] w-full flex flex-col ${
            data.isReverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center`}
          key={index}
        >
          <div
            className={`w-full md:w-1/2 h-full p-6 md:p-[6vw] flex flex-col justify-center`}
          >
            <h1 className=" text-xl leading-6 md:text-[2.3vw] md:leading-[3vw] font-bold">
              {data.Heading}
            </h1>
            <hr className=" w-1/5 h-1 md:w-1/6 md:h-[0.4vw] bg-red-400 rounded-full border-none" />
            <p className="md:text-[1.1vw] mt-[1vw]">{data.Description}</p>
          </div>
          <div
            className={`w-full md:w-1/2 h-full ${
              data.isReverse ? "md:left-0" : "md:right-0"
            } overflow-hidden p-[5vw]`}
            style={{
              backgroundImage: "radial-gradient(circle, #FFFFFF, #D9D9D9)",
            }}
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
export default Products;
