"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion" 

const Counter = ({ target, start }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    const cleanTarget = Number.parseInt(target.replace("+", ""))
    const duration = 2000 // ms
    const steps = 100
    const increment = cleanTarget / steps
    const stepTime = duration / steps

    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= cleanTarget) {
        clearInterval(interval)
        setCount(cleanTarget)
      } else {
        setCount(Math.ceil(current))
      }
    }, stepTime)

    return () => clearInterval(interval)
  }, [start, target])

  return <>{count}+</>
}

const OurAchievements = () => {
  const achievements = [
    { number: "100+", text: "Happy Customers" },
    { number: "2000+", text: "Projects Done" },
    { number: "100+", text: "Achievements" },
    { number: "1000+", text: "Clients Served" },
  ]

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, 
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120, 
        damping: 12,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2, 
      },
    },
  }

  const dividerVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "6rem", 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.4, 
      },
    },
  }

  return (
    <div className="w-full h-full px-6 md:px-0">
      <section
        ref={ref}
        className="w-full relative py-8 md:py-[4vw] px-4 rounded-3xl md:rounded-none overflow-hidden"
        style={{
          backgroundImage: "url('/images/ourAchiv/achiv.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        

        <div className="relative   flex flex-col gap-8 md:gap-[4vw]">
          {/* Title */}
          <div className="text-center">
            <motion.h2
              className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg"
              variants={titleVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Our Achievements
            </motion.h2>
            <motion.div
              className="w-24 h-1.5 bg-red-800 mx-auto mt-3 rounded-full"
              variants={dividerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 "
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.4)" }} 
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className=" backdrop-blur-sm border border-white/20 text-white shadow-lg transition-all duration-300 ease-in-out rounded-lg"
              >
                <div className="flex flex-col items-center justify-center p-6 md:p-4">
                  <span className="text-5xl md:text-6xl font-bold text-red-500 drop-shadow-md">
                    <Counter target={item.number} start={inView} />
                  </span>
                  <span className="text-lg md:text-2xl text-white text-center mt-2 font-medium">{item.text}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default OurAchievements
