"use client"

import Image from "next/image"
import I1 from "../../assets/distributed/1.png";

export default function DCSContent() {
  return (
    <section className="flex flex-col items-center justify-center w-full px-4 py-28 text-gray-800 min-h-screen">
      {/* Image Section */}
      <div className="w-full max-w-6xl flex justify-center mb-24 transition-transform duration-300 hover:scale-[1.01]">
        <Image
          src={I1}
          alt="DCS System Diagram"
          width={1000}
          height={600}
          className="w-full h-auto rounded-xl shadow-xl object-contain border border-gray-600"
        />
      </div>

      {/* Main Text Content */}
      <div className="max-w-4xl mx-auto space-y-20 px-4 md:px-0">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-center tracking-tighter mb-20 bg-clip-text  text-gray-600">
          Autonomous Controllers in Distributed Control Systems
        </h1>

        <div className="relative bg-gray-300 shadow-2xl rounded-3xl py-12 px-10 border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:-translate-y-1">
          <p className="text-xl leading-relaxed text-gray-800">
            The Distributed Control System (DCS) employs multiple autonomous controllers, each housing its own
            processor, which are distributed across the system to automate processes effectively. This decentralized
            architecture ensures that if a processor fails, it impacts only one section of the plant process, unlike a
            central computer failure that could disrupt the entire operation.
          </p>
        </div>

        <div className="relative bg-gray-300 shadow-2xl rounded-3xl py-12 px-10 border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:-translate-y-1">
          <p className="text-xl leading-relaxed text-gray-800">
            As the ‘central brain’ of the plant, the DCS makes automated decisions based on real-time production trends
            observed throughout the plant. In contrast to a Programmable Logic Controller (PLC), which typically adjusts
            a single unit operation, the DCS can fine-tune each of a plant’s many interacting unit operations, providing
            a more holistic control.
          </p>
        </div>

        <div className="relative bg-gray-300 shadow-2xl rounded-3xl py-12 px-10 border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:-translate-y-1">
          <p className="text-xl leading-relaxed text-gray-800">
            Moreover, with the DCS, manufacturers can efficiently coordinate adjustments in a top-down manner using a
            centralized network of computers. Consequently, the DCS deploys instructions throughout the plant, feeding
            them to individual controllers. When configured appropriately, the DCS not only enhances production
            efficiency but also significantly improves safety.
          </p>
        </div>

        <div className="relative bg-gray-300 shadow-2xl rounded-3xl py-12 px-10 border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:-translate-y-1">
          <p className="text-xl leading-relaxed text-gray-800">
            Discover the power of a Distributed Control System (DCS) for optimizing industrial operations. A DCS
            enhances efficiency by distributing control across multiple autonomous controllers, each equipped with its
            own processor, throughout your plant. This setup ensures that if one processor fails, it only impacts a
            specific section, unlike a central system that could halt the entire process.
          </p>
        </div>

        <div className="relative bg-gray-300 shadow-2xl rounded-3xl py-12 px-10 border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:-translate-y-1">
          <p className="text-xl leading-relaxed text-gray-800">
            Utilizing real-time data, the DCS enables precise, automated decision-making based on production trends,
            improving both safety and operational efficiency. Unlike traditional PLCs that handle single unit
            operations, a DCS can manage and adjust multiple interacting units simultaneously, providing superior
            control and coordination.
          </p>
        </div>

        <div className="relative bg-gray-300 shadow-2xl rounded-3xl py-12 px-10 border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:-translate-y-1">
          <p className="text-xl leading-relaxed text-gray-800">
            With a centralized network of computers, the DCS coordinates adjustments across the plant, feeding
            instructions to individual controllers. This advanced system reduces downtime, enhances production
            efficiency, and maintains compliance with safety standards. Embrace a DCS to streamline your operations and
            achieve reliable, efficient performance in your industrial processes.
          </p>
        </div>

        <div className="relative bg-gray-300 shadow-2xl rounded-3xl py-12 px-10 border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:-translate-y-1">
          <p className="text-xl leading-relaxed text-gray-800">
            Optimize your industrial operations with a Distributed Control System (DCS). By distributing control across
            multiple autonomous controllers, a DCS ensures efficient, real-time management and minimizes downtime.
            Unlike central systems, a DCS handles multiple interacting units simultaneously, enhancing safety and
            operational efficiency. Leverage its advanced technology to boost production, maintain compliance, and
            streamline your processes effortlessly.
          </p>
        </div>
      </div>
    </section>
  )
}
