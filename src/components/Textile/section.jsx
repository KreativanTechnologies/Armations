import Image from "next/image"

const section = () => {
    return (
        <div className="relative bg-gray-50 py-20 md:py-2">
            <div className="absolute inset-0 overflow-hidden"></div>

            <div className="relative w-full">
                <div className="text-center mb-14 md:mb-20"></div>

                <div className="relative mt-10">
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

                    <div className="absolute left-1/2 transform -translate-x-1/2 top-[75%] w-[85vw] max-w-6xl bg-white p-10 md:p-16 mt-2">
                        <h2 className="text-3xl font-semibold text-red-600 mb-8 text-center">
                            Can’t Find What You are Looking For?
                        </h2>
                        <div className="flex justify-center">
                            <button className="px-8 py-3 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition">
                                Get in Touch with us!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default section
