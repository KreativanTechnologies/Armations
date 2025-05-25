import Image from 'next/image'
import React from 'react'
import HeroImage from "../../../public/images/blog/blogimg.png";

const BlogHero = () => {
  return (

       <div
              className='flex relative flex-col bg-black/50 text-white justify-end mb-16'
              style={{
                minHeight: "calc(100svh - 125px)",
              }}
            >
              <Image
                src={HeroImage}
                className='h-full mix-blend-multiply w-full absolute inset-0 object-cover'
                alt='hero'
              />
              <div className='px-[8%] mb-10'>
              <p className=' text-lg md:text-xl lg:text-2xl mix-blend-lighten text-left justify-start text-white font-medium font-poppins mb-4'>
              Featured
              </p>
              <h2 className=' text-2xl md:text-3xl lg:text-4xl mix-blend-lighten text-left justify-start text-white font-semibold font-poppins mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
              <p className=' text-lg md:text-xl lg:text-xl mix-blend-lighten text-left justify-start text-white font-light font-poppins mb-4'>In the realm of industrial automation, logic controllers play a pivotal role in managing and controlling various processes. These intelligent devices, often referred to as Programmable Logic Controllers (PLCs), have revolutionized the way industries operate [...]</p>
              </div>

            </div>
             )
}

export default BlogHero
