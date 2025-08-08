"use client"
import Image from "next/image"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import Link from "next/link"
const HeroSection = ({ data }) => {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  const particlesLoaded = (container) => {
    // console.log(container);
  }

  const particleOptions = {
    fullScreen: {
      enable: false, // THIS IS THE CRUCIAL CHANGE
    },
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={data.img_Src || "/placeholder.svg?height=1080&width=1920"}
          alt={data.title}
          fill
          quality={100}
          className="brightness-50 object-cover"
        />
      </div>
      {/* Particles Overlay */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%" }} // Explicitly set dimensions
      />
      {/* Content Overlay */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6 pt-8 z-10">
        <h1 className="text-3xl md:text-6xl font-bold">{data.title}</h1>
        <p className="mt-4 text-sm md:text-2xl max-w-6xl">{data.desc}</p>
        {data.btn_Text && (
                <Link href="/ContactUs">

          <button className="mt-6 px-6 py-3 border-2 border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition cursor-pointer">
            {data.btn_Text}
          </button>
                </Link>
        )}
      </div>
    </div>
  )
}

export default HeroSection
