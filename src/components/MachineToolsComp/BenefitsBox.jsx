import Image from "next/image";

const benefits = [
  {
    icon: "/images/Industryimg/Machineimg/hand.png",
    text: "Delivers a competitive advantage by significantly enhancing productivity.",
  },
  {
    icon: "/images/Industryimg/Machineimg/optimization.png",
    text: "Lowers human labor costs, making operations more cost-effective.",
  },
  {
    icon: "/images/Industryimg/Machineimg/profits.png",
    text: "Minimizes hazard risks in the manufacturing process, ensuring a safer work environment.",
  },
];

const BenefitsBox = () => {
  return (
    <section className="py-12 bg-white text-center px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-10">
        Machine Tools Industry Automation offers several key benefits:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-gray-700 px-4">
            <div className="w-12 h-12 mx-auto mb-4">
              <Image
                src={benefit.icon}
                alt="Benefit Icon"
                width={48}
                height={48}
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-sm md:text-base">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsBox;
