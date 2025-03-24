import React from 'react';
import LogoIcon from "../assets/navbar/logo.png"
import Image from 'next/image';
const Logo = () => {
  return (
    <div className="flex items-center w-[298px] pl-8">
      <Image src={LogoIcon} className="w-[193.85px] h-[81px] text-red-600 object-contain" alt='logo' />
      {/* <span className="text-xl font-bold">RarMotion Electric</span> */}
    </div>
  );
};

export default Logo;