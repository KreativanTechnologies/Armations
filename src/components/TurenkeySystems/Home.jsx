import React from 'react'
import Image from 'next/image';

const sensors = [
  { name: 'Level Sensors', image: '/images/CoustimizeSol/CBg.png' },
  { name: 'Temperature Sensors', image: '/images/CoustimizeSol/CBg.png' },
  { name: 'Photoelectric Sensors', image: '/images/CoustimizeSol/CBg.png' },
  { name: 'Proximity Sensors', image: '/images/CoustimizeSol/CBg.png' },
  { name: 'Level Sensors', image: '/images/CoustimizeSol/CBg.png' },
  { name: 'Proximity Sensors', image: '/images/CoustimizeSol/CBg.png' },
  { name: 'Pressure Sensors', image: '/images/CoustimizeSol/CBg.png' },
];

const Home = () => {
  return (
    <section className="max-w-7xl mx-auto p-6 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Complete range of Industrial Sensors</h2>
      <p className="text-gray-600 mb-8">
        Turnkey solutions of automation industry help you to explore our complete range of industrial sensors, designed to
        enhance accuracy and efficiency across various applications. Choose our industrial sensors for comprehensive
        solutions that drive performance and reliability in your operations.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sensors.map((sensor, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition">
            <Image
              src={sensor.image}
              alt={sensor.name}
              width={200}
              height={150}
              className="mx-auto mb-4"
            />
            <h3 className="text-red-500 font-semibold">{sensor.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Home
