"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

import { technologies, techCategories, type TechCategory } from "@/data"

import TechBall from "./ui/TechBall"

const Tech = () => {
  const [activeTab, setActiveTab] = useState<TechCategory>("Frontend")

  const filtered = technologies.filter((t) => t.category === activeTab)

  return (
    <section id="tech" className="py-20">
      <h1 className="heading mb-10">
        技術<span className="text-purple">スタック</span>
      </h1>

      {/* タブ */}
      <div className="flex justify-center">
        <div
          className="flex gap-1 p-1 rounded-xl flex-wrap justify-center"
          style={{
            background: "rgba(14, 14, 16, 0.8)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {techCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`relative px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeTab === cat.key
                  ? "text-white"
                  : "text-white-200 hover:text-white"
              }`}
            >
              {activeTab === cat.key && (
                <motion.div
                  layoutId="techActiveTab"
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: "rgba(203, 172, 249, 0.15)",
                    border: "1px solid rgba(203, 172, 249, 0.3)",
                  }}
                  transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 技術一覧 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-row flex-wrap justify-center gap-5 sm:gap-10 mt-10"
        >
          {filtered.map((tech) => (
            <TechBall key={tech.name} tech={tech} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default Tech
