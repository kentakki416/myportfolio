"use client"

import { AnimatePresence, motion } from "framer-motion"
import React from "react"

import { Icon } from "./Icon"

const ApproachCard = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [active, setActive] = React.useState(false)
  const isTouchDevice = React.useRef(false)

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault()
    isTouchDevice.current = true
    setActive((prev) => !prev)
  }

  return (
    <div
      onMouseEnter={() => { if (!isTouchDevice.current) setActive(true) }}
      onMouseLeave={() => { if (!isTouchDevice.current) setActive(false) }}
      onTouchEnd={handleTouchEnd}
      className="border border-black/[0.2] flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-80 lg:h-[35rem] rounded-3xl cursor-pointer"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute size-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute size-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute size-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute size-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="size-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-4 md:px-10 flex flex-col items-center justify-center size-full">
        <div
          className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition duration-200 min-w-40 mx-auto flex items-center justify-center ${
            active ? "opacity-0 -translate-y-4" : "opacity-100"
          }`}
        >
          {icon}
        </div>

        <div
          className={`transition duration-200 flex flex-col items-center pt-8 md:pt-16 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-white text-center text-xl md:text-3xl font-bold whitespace-nowrap">
            {title}
          </h2>
          <p
            className="text-xs md:text-base lg:text-lg mt-4 md:mt-8 text-center"
            style={{ color: "#E4ECFF" }}
          >
            {des}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ApproachCard
