import Image from "next/image";
import I1 from "../../assets/distributed/1.png";

const DCSContent = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-4 py-12 bg-white text-[#606062]">
      {/* Image Section */}
      <div className="w-full max-w-6xl flex justify-center mb-12">
        <Image
          src={I1}
          alt="DCS System Diagram"
          className="w-full h-auto rounded-2xl shadow-lg object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-4xl text-center space-y-6 text-lg md:text-[1.5vw] text-black">
        <h1 className="text-[2vw]">Autonomous controllers</h1>
        <p>
          The DCS employs multiple autonomous controllers, each housing its own processor, which distribute across the system to automate processes effectively. If a processor fails, it impacts only one section of the plant process, unlike a central computer failure that could disrupt the entire process.
        </p>
        <p>
          As the ‘central brain’ of the plant, the DCS makes automated decisions based on real-time production trends observed throughout the plant. In contrast to a PLC, which adjusts a single unit operation, the DCS can fine-tune each of a plant’s many interacting unit operations.
        </p>
        <p>
          Moreover, with the DCS, Distributed Control System-Aarmation Electric manufacturers can efficiently coordinate adjustments in a top-down manner using a centralized network of computers. Consequently, the DCS deploys instructions throughout the plant, feeding them to individual controllers. When configured appropriately, the DCS not only enhances production efficiency but also improves safety.
        </p>
        <p>
         Discover the power of a Distributed Control System (DCS) for optimizing industrial operations. A DCS enhances efficiency by distributing control across multiple autonomous controllers, each equipped with its own processor, throughout your plant. This setup ensures that if one processor fails, it only impacts a specific section, unlike a central system that could halt the entire process.
        </p>
        <p>
         Utilizing real-time data, the DCS enables precise, automated decision-making based on production trends, improving both safety and operational efficiency. Unlike traditional PLCs that handle single unit operations, a DCS can manage and adjust multiple interacting units simultaneously, providing superior control and coordination.
        </p>
        <p>
         With a centralized network of computers, the DCS coordinates adjustments across the plant, feeding instructions to individual controllers. This advanced system reduces downtime, enhances production efficiency, and maintains compliance with safety standards. Embrace a DCS to streamline your operations and achieve reliable, efficient performance in your industrial processes.
        </p>
        <p>
        Optimize your industrial operations with a Distributed Control System (DCS). By distributing control across multiple autonomous controllers, a DCS ensures efficient, real-time management and minimizes downtime. Unlike central systems, a DCS handles multiple interacting units simultaneously, enhancing safety and operational efficiency. Leverage its advanced technology to boost production, maintain compliance, and streamline your processes effortlessly.
        </p>

      </div>
    </section>
  );
};

export default DCSContent;
