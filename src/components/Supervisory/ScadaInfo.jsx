import React from 'react';

const ScadaInfo = () => {
  return (
<div>
<div className='flex  bg-white flex-col md:flex-row border-2 '>
<div className='md:w-1/2 flex justify-center items-center'>
<div className="border     bg-white  max-w-3xl max-h-96 p-2 md:relative left-8 ">
      <p className="text-gray-700 p-2">
        <strong className="font-semibold font-poppins text-lg text-[#606062] md:text-xl">Supervisory control and data acquisition</strong> 
        <span className='font-normal font-poppins text-lg md:text-xl '>(SCADA) is a system of software
        and hardware elements that allows industrial organizations to:</span>
      </p>
      <ul className="list-disc list-inside text-[#EC3436] text-xl md:text-lg font-normal font-poppins mt-4 space-y-2">
        <li>Control industrial processes locally or at remote locations</li>
        <li>Monitor, gather, and process real-time data</li>
        <li>
          Directly interact with devices such as sensors, valves, pumps, motors, and more
          through human-machine interface (HMI) software
        </li>
        <li>Record events into a log file</li>
      </ul>
      <p className="text-[#606062] text-xl font-normal font-poppins mt-4">
        SCADA systems are crucial for industrial organizations since they help to maintain efficiency,
        process data for smarter decisions, and communicate system issues to help mitigate downtime.
      </p>
    </div>
</div>
    <div className=' border-2 flex justify-center items-center md:w-1/2'>
      <img src="/images/supervisory/ScadaInfo.png" alt="" className=' sm:w-full ' />
    </div>
 </div>

 {/* optimization */}
 <div className='bg-white'>
  <div className=' mt-3'>
    <h1 className='md:text-[40px] font-semibold font-poppins text-black text-center'>Optimizing Performance Through SCADA ​
    </h1>
    <div className='border-2 border-[#EC3436] max-w-20 rounded-full mx-auto'>

    </div>
  </div>
  {/* optimazation content */}
 <div className='flex flex-col md:flex-row'>
 <div className='   md:w-[45%] md:relative md:left-16  md:z-0'>
    <img src="/images/supervisory/scadaInfo2.png" alt="" className='w-full' />
  </div>
<div className='md:w-[65%] flex justify-center items-center md:z-50'>
<div className='text-lg sm:text-xl font-medium font-poppins text-[#606062]  bg-[#F5F5F5] p-6 '>
    <span>Improve efficiency and safety by remotely monitoring your sewage treatment plant with our advanced system. Our state-of-the-art cloud technology offers real-time oversight and control from anywhere. With its intuitive interface, you can track performance in real-time, receive instant alerts, and manage operations seamlessly. Consequently, you will reduce downtime and maintain compliance with regulatory standards by monitoring crucial parameters remotely. Additionally, our reliable remote monitoring solution helps sewage treatment plants optimize maintenance schedules, enhance operational efficiencies, and safeguard environmental health.</span>
  </div>
</div>
 </div>
 </div>

</div>
    

  );
};

export default ScadaInfo;
