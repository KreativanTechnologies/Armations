import Image from "next/image";

const ProductsCard = ({ data }) => {
  return (
    <div className="w-full h-full py-[10vw] md:py-[5vw] flex flex-col px-4 md:px-0 gap-12">
      {data.map((item, index) => (
        <div
          className={`w-full flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center`}
          key={index}
        >
          {/* Text Block */}
          <div className="w-full md:w-1/2 px-4 md:px-[3vw]">
            <div
              className={`flex w-full h-full flex-col items-center text-white justify-center gap-4 p-6 md:p-[2vw] text-center rounded-[2vw] ${
                index % 2 === 0 ? 'bg-gray-400' : 'bg-gray-900'
              }`}
            >
              <h1 className="text-xl md:text-[2vw] font-semibold">
                {item.title}
              </h1>
              <p className="text-sm md:text-[1.2vw]">{item.description}</p>
            </div>
          </div>

          {/* Image Block */}
          <div className="w-full md:w-1/2 relative aspect-[4/3] md:aspect-auto md:min-h-[60vh] rounded-[2vw] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
