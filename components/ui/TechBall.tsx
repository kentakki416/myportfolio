"use client"

import { AnimatePresence, motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useState } from "react"

import { type Technology } from "@/data"

const BallCanvas = dynamic(async () => import("./BallCanvas"), { ssr: false })

const TechBall = ({ tech }: { tech: Technology }) => {
  const [active, setActive] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        className="size-20 sm:size-28 transition-transform duration-200"
        style={{ zIndex: active ? 50 : 1, position: "relative" }}
      >
        <BallCanvas icon={tech.icon} />
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden sm:block w-64 rounded-xl p-4 pointer-events-none shadow-lg shadow-purple/20"
            style={{
              zIndex: 100,
              background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
              border: "1px solid rgba(203, 172, 249, 0.3)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-bold text-sm sm:text-base">
                {tech.name}
              </h3>
              <span className="text-purple text-xs sm:text-sm font-semibold">
                {tech.years}年
              </span>
            </div>
            <p className="text-white-100 text-xs sm:text-sm leading-relaxed">
              {tech.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TechBall
