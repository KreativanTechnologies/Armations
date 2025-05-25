"use client";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import Image from "next/image";

const leaders = [
  {
    name: "CEO",
    image: "/images/about/a1.png",
    description:
      "Saurabh Vasudeva, our Managing Director, founded Aarmation Electric in 2018 with a vision to create local employment in rural areas. With an MBA, a B.Tech, and over a decade of experience at L&T, Fuji, and Rockwell Automation, he has driven our company’s growth and workforce expansion from the ground up.",
  },
  {
    name: "Engineering and Maintenance Head",
    image: "/images/about/a2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac massa id augue ultricies rhoncus.",
  },
  {
    name: "Technical Head",
    image: "/images/about/a3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac massa id augue ultricies rhoncus.",
  },
  {
    name: "HR & Finance",
    image: "/images/about/a4.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac massa id augue ultricies rhoncus.",
  },
];

const OurLeadership = () => {
  const [selectedLeaders, setSelectedLeaders] = useState({});

  const toggleLeader = (index) => {
    setSelectedLeaders((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="pt-[170vw] md:pt-60 lg:pt-30 px-4 md:px-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-900">
        Our <span className="text-red-600">Leadership</span>
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {leaders.map((leader, index) => (
          <div key={index} className="text-center">
            <div className="relative w-full h-56">
              <Image
                src={leader.image}
                alt={leader.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="mt-4 text-md font-semibold text-gray-900">
              {leader.name}
            </h3>
            <button
              className="mt-2 text-red-600 focus:outline-none cursor-pointer hover:scale-150 duration-1000 md:text-[1.5vw]"
              onClick={() => toggleLeader(index)}
            >
              {selectedLeaders[index] ? "▲" : "▼"}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden`}
            >
              <AnimatePresence>
                {selectedLeaders[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="my-4 bg-white p-4 shadow-lg rounded-lg text-gray-700 text-sm md:text-base overflow-hidden"
                  >
                    {leader.description}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurLeadership;
