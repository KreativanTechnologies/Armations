"use client" 

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100) 

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <section className="relative h-[300px] w-full overflow-hidden md:h-[300px] lg:h-[350px] group">
        <Image
          src="/images/home/Earth.png"
          alt="Earth at night with city lights"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0 transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to power your plant with SCADA?
          </h1>
          <p className="mt-4 text-base font-bold sm:text-lg md:text-xl">Let{"'"}s transform your operations today.</p>
          <Link href="/ContactUs">
            <button className="mt-8 rounded-full border-2 cursor-pointer border-white bg-transparent px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg">
              Discover Now
            </button>
          </Link>
        </div>
      </section>
      <footer className="bg-[#1c1c1c] text-white">
        <div
          className={`mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-8 md:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className={`space-y-3 transition-all duration-700 ease-out ${isVisible ? "delay-100" : ""}`}>
            <Image
              src="/images/logo.png"
              width={200}
              height={60}
              alt="logo"
              className="transition-transform duration-300 hover:scale-105"
            />
            <p className="font-poppins text-lg font-normal leading-[26px] text-white transition-all duration-200 hover:brightness-125">
              Aarmation Electric started its operation in 2018 to provide solutions to Indian industry for all its
              automation control and coding requirements.
            </p>
          </div>
          <div className={`transition-all duration-700 ease-out ${isVisible ? "delay-200" : ""}`}>
            <h3 className="mb-3 font-raleway text-xl font-bold leading-snug text-white transition-all duration-200 hover:scale-105 hover:text-blue-300">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <Mail className="h-5 w-5 text-white transition-transform duration-200 group-hover:animate-spin" />
                <a
                  href="mailto:info@aarmationelectric.com"
                  className="font-poppins text-lg font-normal leading-[26px] text-white transition-all duration-200 hover:text-blue-300 hover:scale-[1.02] hover:underline hover:underline-offset-4 hover:decoration-2"
                >
                  info@aarmationelectric.com
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <Phone className="h-5 w-5 text-white transition-transform duration-200 group-hover:animate-spin" />
                <a
                  href="tel:+91 78140 00888"
                  className="font-poppins text-lg font-normal leading-[26px] text-white transition-all duration-200 hover:text-blue-300 hover:scale-[1.02] hover:underline hover:underline-offset-4 hover:decoration-2"
                >
                  +91 78140 00888
                </a>
              </div>
            </div>
          </div>
          <div className={`transition-all duration-700 ease-out ${isVisible ? "delay-300" : ""}`}>
            <h3 className="mb-3 font-raleway text-xl font-bold leading-snug text-white transition-all duration-200 hover:scale-105 hover:text-blue-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/About"
                  className="font-poppins text-lg font-normal leading-[26px] text-white transition-all duration-200 hover:text-blue-300 hover:translate-x-1 hover:scale-[1.02] hover:underline hover:underline-offset-4 hover:decoration-2"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="font-poppins text-lg font-normal leading-[26px] text-white transition-all duration-200 hover:text-blue-300 hover:translate-x-1 hover:scale-[1.02] hover:underline hover:underline-offset-4 hover:decoration-2"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/trainings"
                  className="font-poppins text-lg font-normal leading-[26px] text-white transition-all duration-200 hover:text-blue-300 hover:translate-x-1 hover:scale-[1.02] hover:underline hover:underline-offset-4 hover:decoration-2"
                >
                  Trainings
                </a>
              </li>
            </ul>
          </div>
          <div className={`transition-all duration-700 ease-out ${isVisible ? "delay-400" : ""}`}>
            <h3 className="mb-3 font-raleway text-xl font-bold leading-snug text-white transition-all duration-200 hover:scale-105 hover:text-blue-300">
              Corporate Office
            </h3>
            <div className="space-y-3">
              
               <div className="flex items-start space-x-3  group ">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-white  transition-transform duration-200 group-hover:animate-spin" />
                <p className="font-poppins text-lg font-normal leading-[26px] text-white transition-all duration-200 hover:text-blue-300 hover:scale-[1.02] hover:underline hover:underline-offset-4 hover:decoration-2">
                  SCO - 69b, City Of Dreams - 1, High Ground Road, Zirakpur, Punjab (140603)
                </p>
              </div>
              <div className="flex items-start space-x-3  group ">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-white  transition-transform duration-200 group-hover:animate-spin" />
                <p className="font-poppins text-lg font-normal leading-[26px] text-white transition-all duration-200 hover:text-blue-300 hover:scale-[1.02] hover:underline hover:underline-offset-4 hover:decoration-2">
                  Mohal Saliana,Khasra No 346, Palampur, Kangra,HP ( 176103 )
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 bg-[#101010]">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-6 md:flex-row">
            <div className="text-center md:text-left">
              <span className="font-poppins text-lg font-normal leading-[26px] text-white">
                All Rights Are Reserved @2024{" "}
              </span>
              <span className="font-poppins text-lg font-normal leading-[26px] text-white underline transition-all duration-200 hover:text-blue-300 hover:scale-[1.02] hover:underline-offset-4 hover:decoration-2">
                aarmationelectric
              </span>
            </div>
            <div className="mt-3 flex space-x-4 md:mt-0">
              <a
                href="#"
                className="text-white transition-all duration-200 hover:scale-150 hover:rotate-6 hover:text-blue-400"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white transition-all duration-200 hover:scale-150 hover:rotate-6 hover:text-blue-400"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white transition-all duration-200 hover:scale-150 hover:rotate-6 hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white transition-all duration-200 hover:scale-150 hover:rotate-6 hover:text-blue-400"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
