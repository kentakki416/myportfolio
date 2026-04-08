"use client"

import { AnimatePresence, motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useCallback, useRef, useState } from "react"

import { type Technology } from "@/data"

const BallCanvas = dynamic(async () => import("./BallCanvas"), { ssr: false })

const POPUP_WIDTH = 256
const MARGIN = 16

const TechBall = ({ tech }: { tech: Technology }) => {
  const [active, setActive] = useState(false)
  const [popupPos, setPopupPos] = useState({ left: 0, top: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = useCallback(() => {
    if (!containerRef.current) {
      setActive(true)
      return
    }

    const rect = containerRef.current.getBoundingClientRect()
    const containerCenter = rect.left + rect.width / 2

    let left = containerCenter - POPUP_WIDTH / 2
    if (left < MARGIN) {
      left = MARGIN
    }
    if (left + POPUP_WIDTH > window.innerWidth - MARGIN) {
      left = window.innerWidth - MARGIN - POPUP_WIDTH
    }

    setPopupPos({ left, top: rect.bottom + 8 })
    setActive(true)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
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
            className="fixed hidden sm:block w-64 rounded-xl p-4 pointer-events-none shadow-lg shadow-purple/20"
            style={{
              zIndex: 100,
              left: popupPos.left,
              top: popupPos.top,
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
