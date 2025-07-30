import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ target, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const cleanTarget = parseInt(target.replace("+", ""));
    const duration = 2000; // ms
    const steps = 100;
    const increment = cleanTarget / steps;
    const stepTime = duration / steps;

    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= cleanTarget) {
        clearInterval(interval);
        setCount(cleanTarget);
      } else {
        setCount(Math.ceil(current));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [start, target]);

  return <>{count}+</>;
};

const OurAchievements = () => {
  const achievements = [
    { number: "100+", text: "Happy Customers" },
    { number: "2000+", text: "Projects Done" },
    { number: "100+", text: "Award Win" },
    { number: "1000+", text: "Clients Work" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // section is 30% visible
  });

  return (
    <div className=" w-full h-full px-6 md:px-0">
      <section
        ref={ref}
        className="w-full relative py-8 md:py-[5vw] px-4 rounded-3xl md:rounded-none overflow-hidden"
        style={{
          backgroundImage: "url('/images/ourAchiv/achiv.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 border-2 " />

        <div className="relative max-w-6xl mx-auto flex flex-col gap-4 md:gap-[3vw]">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Our Achievements</h2>
            <div className="w-16 h-1 bg-white mx-auto" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 mt-2">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 justify-center"
              >
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-6xl font-bold text-red-600 ">
                    <Counter target={item.number} start={inView} />
                  </span>
                  <span className="text-md md:text-xl text-white">
                    {item.text}
                  </span>
                </div>

                {/* Divider line (except for the last item) */}
                {index < achievements.length - 1 && (
                  <div
                    className="hidden lg:block absolute h-32 w-px bg-white"
                    style={{
                      right: `${(100 / achievements.length) * (index + 1)}%`,
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurAchievements;

