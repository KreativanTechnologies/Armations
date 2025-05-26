import React from 'react'
import Image from 'next/image';

const sensors = [
  { name: 'Level Sensors', image: '/images/TurnkeySol/T1.png' },
  { name: 'Temperature Sensors', image: '/images/TurnkeySol/T2.png' },
  { name: 'Photoelectric Sensors', image: '/images/TurnkeySol/T3.png' },
  { name: 'Proximity Sensors', image: '/images/TurnkeySol/T4.png' },
  { name: 'Level Sensors', image: '/images/TurnkeySol/T5.png' },
  { name: 'Proximity Sensors', image: '/images/TurnkeySol/T6.png' },
  { name: 'Pressure Sensors', image: '/images/TurnkeySol/T7.png' },
];

const CompleteRange = () => {
  return (
    <section className="">
      <div className='p-8 max-w-7xl mx-auto  text-center'>
      <h2 className="text-2xl md:text-3xl text-black font-semibold mb-4">Complete range of Industrial Sensors</h2>
      <p className="text-gray-600 mb-8">
      Turnkey Solution of Automation Industry help you to explore our complete range of industrial sensors, designed to enhance accuracy and efficiency across various applications. Our sensors include temperature sensors, pressure sensors, level sensors, flow sensors, and proximity sensors, each engineered to deliver reliable performance in demanding environments. Specifically, our temperature sensors offer precise readings for critical processes, while our pressure sensors ensure safe operation in high-pressure systems. Additionally, our level sensors monitor material levels with high accuracy, and flow sensors measure fluid dynamics effectively. Furthermore, our proximity sensors detect object presence with exceptional reliability. By integrating these sensors, industries can achieve improved process control, enhanced safety, and operational efficiency. With robust construction and advanced technology, our sensors are ideal for manufacturing, automation, and other industrial applications. Choose our industrial sensors for comprehensive solutions that drive performance and reliability in your operations.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
        {sensors.map((sensor, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg bg-white transition-shadow duration-300 hover:shadow-lg"
          >
            <Image
              src={sensor.image}
              alt={sensor.name}
              width={200}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-red-500 font-semibold ">{sensor.name}</h3>
          </div>
        ))}
      </div>
      </div>
      <div>
        <Image
          src="/images/TurnkeySol/T8.png"
          alt="Turnkey Solutions"
          width={1920}
          height={1117}
          className="mx-auto mt-8"/>
      </div>
    </section>
  );
}
export default CompleteRange




