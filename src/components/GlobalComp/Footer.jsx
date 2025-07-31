import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"
// import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <>
      {/* Banner Code */}
      <section className="relative h-[300px] w-full overflow-hidden md:h-[300px] lg:h-[400px]">
        <Image
          src="/images/home/Earth.png"
          alt="Earth at night with city lights"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to power your plant with SCADA?
          </h1>
          <p className="mt-4 text-base font-bold sm:text-lg md:text-xl">Let{"'"}s transform your operations today.</p>
          <button
            variant="outline"
            className="mt-8 rounded-full border-2 border-white bg-transparent px-8 py-3 text-lg font-medium text-white hover:bg-white hover:text-black"
          >
            Discover Now
          </button>
        </div>
      </section>
      <footer className="bg-[#232323] text-white">
        {/* Main Footer Content */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Image src="/images/logo.png" width={200} height={60} alt="logo" />
            <p className="mb-4 pt-5 font-poppins text-xl font-normal leading-[30px] text-white">
              Aarmation Electric started its operation in 2018 to provide solutions to Indian industry for all its
              automation control and coding requirements.
            </p>
          </div>
          {/* Get In Touch */}
          <div>
            <h3 className="mb-4 justify-start font-raleway text-xl font-bold leading-snug text-white">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-white" />
                <p className="font-poppins text-xl font-normal leading-[30px] text-white">
                  Mohal Saliana,Khasra No 346, Palampur, Kangra,HP ( 176103 )
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white" />
                <a
                  href="mailto:info@aarmationelectric.com"
                  className="font-poppins text-xl font-normal leading-[30px] text-white"
                >
                  info@aarmationelectric.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white" />
                <a href="tel:+91 78140 00888" className="font-poppins text-xl font-normal leading-[30px] text-white">
                  +91 78140 00888
                </a>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 justify-start font-raleway text-xl font-bold leading-snug text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/About"
                  className="font-poppins text-xl font-normal leading-[30px] text-white transition hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="font-poppins text-xl font-normal leading-[30px] text-white transition hover:text-white"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/trainings"
                  className="font-poppins text-xl font-normal leading-[30px] text-white transition hover:text-white"
                >
                  Trainings
                </a>
              </li>
            </ul>
          </div>
          {/* Corporate Office */}
          <div>
            <h3 className="mb-4 justify-start font-raleway text-xl font-bold leading-snug text-white">
              Corporate Office
            </h3>
            <p className="font-poppins text-xl font-normal leading-[30px] text-white">
              SCO - 69b, City Of Dreams - 1, High Ground Road, Zirakpur, Punjab (140603)
            </p>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 bg-[#191818]">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-6 md:flex-row">
            <div className="justify-start">
              <span className="font-poppins text-xl font-normal leading-[30px] text-white">
                All Rights Are Reserved @2024{" "}
              </span>
              <span className="font-poppins text-xl font-normal leading-[30px] text-white underline">
                aarmationelectric
              </span>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="font-poppins text-xl font-normal leading-[30px] text-white transition hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="font-poppins text-xl font-normal leading-[30px] text-white transition hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="font-poppins text-xl font-normal leading-[30px] text-white transition hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 transition hover:text-white">
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
