const plastic = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden mt-12">
            {/* Background Image */}
            <img
                src="/images/about/Textile/Rectangle 113.png" 
                alt="Plastic Industry Background"
                className="absolute inset-0 w-[calc(100%-90px)] object-cover opacity-90 mx-auto"
                width={200}
                height={300}
            />

            {/* Overlay */}
            <div className="absolute bg-opacity-30"></div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                    Plastic Industry <span className="text-red-500">Solutions</span>
                </h1>
                <div className="w-32 h-1 bg-red-500 mt-4"></div>
            </div>
        </div>
    );
}
export default plastic;
