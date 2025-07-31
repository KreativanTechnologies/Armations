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
      "Girish Sharma, a 1987 Electrical Engineering graduate, brings 33 years of expertise in maintenance, utilities, and plant engineering. As our ISO-9001:2015 and ISO 14001 representative, he has overseen engineering and maintenance at Aarmation Electric since 2020.",
  },
  {
    name: "Technical Head",
    image: "/images/about/a3.png",
    description:
      "Jasbir Rehal, with a Bachelor’s in Electronics and Instrumentation Engineering and over a decade of experience at L&T and Delta, has been a crucial technical asset at Aarmation since 2018, supporting and advising our engineering team.",
  },
  {
    name: "HR & Finance",
    image: "/images/about/a4.png",
    description:
      "Rishab Sharma, holding a Bachelor’s in Commerce and an MBA in Finance, is our HR and Finance expert. With over 25 years of experience in finance and compliance at companies like Amtek Auto Ltd. and Castex Technologies, he has strengthened Aarmation Electric since 2022.",
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
    <section className="pt-[270vw] md:pt-90 lg:pt-42 px-4 md:px-16 bg-gray-100 text-center">
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
