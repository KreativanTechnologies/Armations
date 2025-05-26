import Image from "next/image";
import I1 from "../../assets/distributed/1.png";

const DCSContent = () => {
  return (
    <section className="absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-full px-4 py-16 bg-white text-[#606062]">
      {/* Image Section */}
      <div className="w-full max-w-6xl flex justify-center mb-12">
        <Image
          src={I1}
          alt="DCS System Diagram"
          className="w-full h-auto rounded-xl shadow-lg object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-4xl text-center space-y-6 text-lg font-poppins">
        <p>
          The DC employs multiple autonomous controllers, each housing its own processor, which distribute across the system to automate processes effectively. If a processor fails, it impacts only one section of the plant process, unlike a central computer failure that could disrupt the entire process.
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
    </section>
  );
};

export default DCSContent;
