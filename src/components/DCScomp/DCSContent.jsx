import Image from "next/image";
import I1 from "../../assets/distributed/1.png";

const DCSContent = () => {
  return (
    <>
      {/* Description Section */}
      <div className="relative z-10 w-full max-w-5xl px-6 py-10 -mt-[70px] sm:-mt-[200px] text-center text-[#606062] bg-transparent mr-9 flex flex-col items-center">
        <Image
          src={I1}
          className="w-full h-auto object-cover rounded-lg shadow-lg mb-6 mr-3.5 max-w-xl"
          alt="DCS Illustration"
        />
        <div className="text-xl font-medium font-poppins space-y-4 text-center max-w-2xl">
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
    </>
  );
};

export default DCSContent;
