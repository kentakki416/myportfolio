"use client"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { FaLocationArrow } from "react-icons/fa6"

import { projects, projectCategories, type ProjectCategory } from "@/data"

import { PinContainer } from "./ui/Pin"

const RecentProjects = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("web")

  const filtered = projects.filter((p) => p.category === activeTab)

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        最近の<span className="text-purple">プロジェクト</span>
      </h1>

      {/* タブ */}
      <div className="flex justify-center mt-10">
        <div className="flex gap-1 p-1 rounded-xl" style={{ background: "rgba(14, 14, 16, 0.8)", border: "1px solid rgba(255,255,255,0.1)" }}>
          {projectCategories.map((cat) => (
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
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: "rgba(203, 172, 249, 0.15)", border: "1px solid rgba(203, 172, 249, 0.3)" }}
                  transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* プロジェクト一覧 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-10 lg:gap-16 p-4 mt-10 max-w-7xl mx-auto"
        >
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div
                className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                key={item.id}
              >
                <PinContainer
                  title="詳細を見る"
                  href={`/projects/${item.slug}`}
                >
                  <Link href={`/projects/${item.slug}`}>
                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                      <div
                        className="relative size-full overflow-hidden lg:rounded-3xl"
                        style={{ backgroundColor: "#13162D" }}
                      >
                        <img src="/images/bg.png" alt="bgimg" />
                      </div>
                      <img
                        src={item.img}
                        alt="cover"
                        className="z-10 absolute bottom-0"
                      />
                    </div>

                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                      {item.title}
                    </h1>

                    <p
                      className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                      style={{
                        color: "#BEC1DD",
                        margin: "1vh 0",
                      }}
                    >
                      {item.des}
                    </p>

                    <div className="flex items-center justify-between mt-7 mb-3">
                      <div className="flex items-center">
                        {item.iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-black lg:size-10 size-8 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * index + 2}px)`,
                            }}
                          >
                            <img src={icon} alt="icon5" className="p-2" />
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                          詳細を見る
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                      </div>
                    </div>
                  </Link>
                </PinContainer>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center py-20">
              <p className="text-white-200 text-lg">
                準備中です。お楽しみに！
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default RecentProjects
