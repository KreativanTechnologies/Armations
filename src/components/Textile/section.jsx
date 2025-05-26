// import Image from "next/image";
// // jatin

// const Section = () => {
//     return (
//         <div className="relative bg-gray-50 py-8 md:py-16">
//         <div className="relative bg-white pt-20 pb-20 md:pt-20 md:pb-30">
//             <div className="absolute inset-0 overflow-hidden"></div>
//   return (
//     <div className="relative bg-gray-50 py-8 md:py-16">
//       <div className="absolute inset-0 overflow-hidden"></div>

//       <div className="relative w-full">
//         <div className="text-center mb-10 md:mb-20"></div>

//                 <div className="relative mt-6 md:mt-10">
//                 <div className="relative mt-10">
//                     {/* Background Image */}
//                     <div className="w-full relative">
//                         <Image
//                             src="/images/about/Rectangle 111.png"
//                             alt="Team members working with technical equipment"
//                             width={1100}
//                             height={500}
//                             className="w-full h-[50vh] sm:h-[60vh] md:h-[75vh] object-cover"
//                             priority
//                         />
//                     </div>

//                     <div className="absolute left-1/2 transform -translate-x-1/2 top-[60%] sm:top-[70%] w-[90vw] sm:w-[85vw] max-w-6xl bg-white p-6 sm:p-8 md:p-16 mt-2 shadow-lg rounded-lg">
//                         <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-600 mb-6 sm:mb-8 text-center">
//                             Can’t Find What You are Looking For?
//                         </h2>
//                         <div className="flex justify-center">
//                             <button className="px-6 sm:px-8 py-2 sm:py-3 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition">
//                                 Get in Touch with us!
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Section;
//                    <div className="absolute left-1/2 transform -translate-x-1/2 top-[65%] w-[85vw] max-w-6xl bg-white p-10 md:p-16 min-h-[280px] flex flex-col items-center justify-center text-center">
//     <h2 className="text-3xl font-semibold text-red-600 mb-8">
//         Can’t Find What You are Looking For?
//     </h2>
//     <button className="px-8 py-3 border border-red-500 text-black rounded-full hover:bg-red-500 hover:text-white transition">
//         Get in Touch with us!
//     </button>
// </div>


//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Section
//         <div className="relative mt-6 md:mt-10">
//           <div className="w-full relative">
//             <Image
//               src="/images/about/Rectangle 111.png"
//               alt="Team members working with technical equipment"
//               width={1100}
//               height={500}
//               className="w-full h-[50vh] sm:h-[60vh] md:h-[75vh] object-cover"
//               priority
//             />
//           </div>

//           <div className="absolute left-1/2 transform -translate-x-1/2 top-[60%] sm:top-[70%] w-[90vw] sm:w-[85vw] max-w-6xl bg-white p-6 sm:p-8 md:p-16 mt-2 shadow-lg rounded-lg">
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-600 mb-6 sm:mb-8 text-center">
//               Can’t Find What You are Looking For?
//             </h2>
//             <div className="flex justify-center">
//               <button className="px-6 sm:px-8 py-2 sm:py-3 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition">
//                 Get in Touch with us!
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section;

// prem

import Image from "next/image";

const Section = () => {
  return (
    <div className="relative bg-white pt-20 pb-[180px] md:pb-[200px] md:pt-20">

      <div className="relative w-full">
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

          <div
            className="
              absolute left-1/2 transform -translate-x-1/2
              top-[65%] md:top-[72%]
              w-[85vw] max-w-6xl bg-white p-10 md:p-16
              min-h-[280px] flex flex-col items-center justify-center text-center
            "
            style={{ zIndex: 10 }}
          >
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
  );
};

export default Section;
