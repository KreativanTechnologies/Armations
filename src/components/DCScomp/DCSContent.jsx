
import Image from "next/image";
import I1 from "../../assets/distributed/1.png";

const DCSContent = () => {
  return (
    <>
      {/* Description Section */}
      <div className="relative z-10 w-full max-w-5xl px-6 py-10 -mt-[70px] sm:-mt-[200px] text-center text-[#606062] bg-transparent">
        <Image
          src={I1}
          className="w-full h-auto object-cover rounded-lg shadow-lg mb-6"
          alt="DCS Illustration"
        />
        <div className="text-xl font-medium font-poppins space-y-4">
          <p>
            The DCS employs multiple autonomous controllers, each housing its own processor, which distribute across the system to automate processes effectively. If a processor fails, it impacts only one section of the plant process, unlike a central computer failure that could disrupt the entire process.
          </p>
          <p>
            As the 'central brain' of the plant, the DCS makes automated decisions based on real-time production trends observed throughout the plant. In contrast to a PLC, which adjusts a single unit operation, the DCS can fine-tune each of a plant’s many interacting unit operations.
          </p>
          <p>
            With a centralized network of computers, the DCS coordinates adjustments across the plant, feeding instructions to individual controllers. This advanced system reduces downtime, enhances production efficiency, and maintains compliance with safety standards.
          </p>
          <p>
            Optimize your industrial operations with a Distributed Control System (DCS). Leverage its advanced technology to boost production, maintain compliance, and streamline your processes effortlessly.
          </p>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-gray-900 text-white px-6 py-12 w-full max-w-5xl rounded-xl shadow-lg mb-10">
        <p className="text-lg">
          A <span className="font-bold">Distributed Control System (DCS)</span> is an automated control system used in industrial processes where control
          elements are distributed throughout the system.{" "}
          <span className="underline text-blue-400 cursor-pointer">Instead</span> of being centralized in one location,{" "}
          <span className="underline text-blue-400 cursor-pointer">controllers</span> are located
          close to the process, increasing reliability and performance.
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Key Features of DCS:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">Distributed Architecture:</span> Control functions are spread across various subsystems.
            </li>
            <li>
              <span className="font-bold">Central Monitoring:</span> Operators can monitor and manage the entire process from a central control room.
            </li>
            <li>
              <span className="font-bold">Real-time Control:</span> Provides fast response and accurate process control.
            </li>
            <li>
              <span className="font-bold">Scalability:</span> Easy to expand or modify.
            </li>
            <li>
              <span className="font-bold">Redundancy:</span> Ensures high system availability and fault tolerance.
            </li>
            <li>
              <span className="font-bold">HMI (Human-Machine Interface):</span> Graphical interfaces for operators to interact with the process.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DCSContent;
