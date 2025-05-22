import Image from "next/image"

const Section = () => {
    return (
        <div className="relative bg-white pt-20 pb-20 md:pt-20 md:pb-30">
            <div className="absolute inset-0 overflow-hidden"></div>

            <div className="relative w-full">
                <div className="text-center mb-14 md:mb-20"></div>

                <div className="relative mt-10">
                    {/* Background Image */}
                    <div className="w-full relative">
                        <Image
                            src="/images/about/Rectangle 111.png"
                            alt="Team members working with technical equipment"
                            width={1000}
                            height={500}
                            className="w-full h-[75vw] md:h-auto object-cover"
                            priority
                        />
                    </div>

                   <div className="absolute left-1/2 transform -translate-x-1/2 top-[65%] w-[85vw] max-w-6xl bg-white p-10 md:p-16 min-h-[280px] flex flex-col items-center justify-center text-center">
    <h2 className="text-3xl font-semibold text-red-600 mb-8">
        Can’t Find What You are Looking For?
    </h2>
    <button className="px-8 py-3 border border-red-500 text-black rounded-full hover:bg-red-500 hover:text-white transition">
        Get in Touch with us!
    </button>
</div>


                </div>
            </div>
        </div>
    )
}

export default Section
