import Image from "next/image";

const data = [
  {
    src: "/images/Sensors/S1.webp",
    title: "Data monitoring and controlling of a machine/process."
  },
  {
    src: "/images/Sensors/S2.webp",
    title: "Fully automated system with instrumentation and IOT"
  },
  {
    src: "/images/Sensors/S8.webp",
    title: "Dust controller system"
  },
  {
    src: "/images/Sensors/S4.webp",
    title: "Monitoring of DC voltage and tanks"
  }
];

export default function GridGallery() {
  return (
    <div className="container mx-auto px-18 py-18">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <Image 
              src={item.src} 
              alt={item.title} 
              width={500} 
              height={300} 
              className="rounded-lg"
            />
            <p className="text-center text-red-500 text-sm font-semibold mt-2">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
