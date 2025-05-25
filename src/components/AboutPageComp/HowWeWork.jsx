import React from "react";

const HowWeWork = () => {
  return (
    <div className="w-full h-full bg-white px-[7vw] py-[8vw] md:py-[4vw] text-black">
      <div className="w-full h-full md:h-[30vw] flex flex-col md:flex-row relative gap-4 md:gap-0">
      <div className={`h-20 w-1 md:w-[0.3vw] md:h-[8vw] absolute top-{$count} left-0 z-40 bg-orange-400 rounded-full`}></div>
        <div className="w-full md:w-[65%] h-full md:h-[80%] left-0 md:absolute bg-white flex flex-col justify-center px-[4.9vw] md:rounded-br-[2vw]">
          <h1 className="text-xl md:text-[2vw] font-bold md:leading-[2.5vw]">How We Work?</h1>
          <hr className=" w-16 h-1 md:w-[5vw] md:h-[0.2vw] bg-amber-500 border-none rounded-full" />
          <p className="text-sm md:text-[1.3vw] md:leading-[1.8vw] mt-[0.5vw] text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s,{" "}
          </p>
        </div>
        <div className="md:absolute w-full md:w-[50%] h-full md:h-[25%] bottom-0 left-0 z-10 px-[5vw]">
        <button
            className="mt-[1vw] cursor-pointer border-2 text-md md:text-[1.5vw] font-normal border-red-500 text-black px-6 py-2 md:px-8 md:py-4 rounded-full hover:bg-red-500 hover:text-white transition"
          >
            More on How we work
          </button>
        </div>

        <div className="w-full h-full flex items-end justify-end"></div>

        {/* Right Section (Image) */}
        <div className="h-full w-full rounded-2xl overflow-hidden md:rounded-[2vw]">
          <img
            src="/images/AtArmation/Enginee.png"
            alt="How We Work"
            className="h-full w-full object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default HowWeWork;