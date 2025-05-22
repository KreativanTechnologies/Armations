const Plastic = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden mt-12 mb-20">
      {/* Background Image */}
      <img
        src="/images/about/Textile/Rectangle 113.png"
        alt="Plastic Industry Background"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-90px)] h-full object-cover opacity-90"
        
      />

      
      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Plastic Industry <span className="text-red-500">Solutions</span>
        </h1>
        <div className="w-90 h-1 bg-red-500 mt-4 rounded"></div>
      </div>
    </div>
  );
};

export default Plastic;
