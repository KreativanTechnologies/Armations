import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
// import whiteLogo from "/../public/images/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className='bg-[#232323] text-white'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* Company Info */}
        <div>
          <Image
      src="/images/logo.png"
      width={200}
      height={60}
            // className='max-w-[229.85px] h-24  object-contain'
            alt='logo'
          />

          <p className='mb-4 pt-5 text-white text-xl font-normal font-poppins leading-[30px]'>
            Aarmation Electric started its operation in 2018 to provide
            solutions to Indian industry for all its automation control and
            coding requirements.
          </p>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className='justify-start text-white text-xl font-bold font-raleway leading-snug mb-4'>
            Get In Touch
          </h3>
          <div className='space-y-4'>
            <div className='flex items-start space-x-3'>
              <MapPin className='w-5 h-5 shrink-0 text-white mt-1' />
              <p className=' text-white text-xl font-normal font-poppins leading-[30px]'>
                Mohal Saliana,Khasra No 346, Palampur, Kangra,HP ( 176103 )
              </p>
            </div>
            <div className='flex items-center space-x-3'>
              <Mail className='w-5 h-5 text-white' />
              <a
                href='mailto:aruntulis@hello.com'
                className='text-white text-xl font-normal font-poppins leading-[30px]'
              >
                aruntulis@hello.com
              </a>
            </div>
            <div className='flex items-center space-x-3'>
              <Phone className='w-5 h-5 text-white' />
              <a
                href='tel:+1-389-688-3295'
                className='text-white text-xl font-normal font-poppins leading-[30px]'
              >
                +1 389-688-3295
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='justify-start text-white text-xl font-bold font-raleway leading-snug mb-4'>
            Quick Links
          </h3>
          <ul className='space-y-2'>
            <li>
              <a
                href='/About'
                className=' hover:text-white transition  text-white text-xl font-normal font-poppins leading-[30px]'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='/products'
                className=' hover:text-white transition  text-white text-xl font-normal font-poppins leading-[30px]'
              >
                Products
              </a>
            </li>
            <li>
              <a
                href='/trainings'
                className=' hover:text-white transition  text-white text-xl font-normal font-poppins leading-[30px]'
              >
                Trainings
              </a>
            </li>
          </ul>
        </div>

        {/* Corporate Office */}
        <div>
          <h3 className='mb-4 justify-start text-white text-xl font-bold font-raleway leading-snug'>
            Corporate Office
          </h3>
          <p className='text-white text-xl font-normal font-poppins leading-[30px]'>
            SCO – 69B, Upper Ground Block – 2, City Of Dreams -1, High Ground Road, Zirakpur,Nabha, Punjab (140603)
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800 bg-[#ec3436]'>
        <div className='max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center'>
          <div className='justify-start'>
            <span className='text-white text-xl font-normal font-poppins leading-[30px]'>
              All Rights Are Reserved @2024{" "}
            </span>
            <span className='text-white text-xl font-normal font-poppins underline leading-[30px]'>
              aarmationelectric
            </span>
          </div>
          <div className='flex space-x-4'>
            <a
              href='#'
              className=' hover:text-white transition  text-white text-xl font-normal font-poppins leading-[30px]'
            >
              <Facebook className='w-5 h-5' />
            </a>
            <a
              href='#'
              className=' hover:text-white transition  text-white text-xl font-normal font-poppins leading-[30px]'
            >
              <Instagram className='w-5 h-5' />
            </a>
            <a
              href='#'
              className=' hover:text-white transition  text-white text-xl font-normal font-poppins leading-[30px]'
            >
              <Linkedin className='w-5 h-5' />
            </a>
            <a href='#' className='text-gray-400 hover:text-white transition'>
              <Youtube className='w-5 h-5' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
