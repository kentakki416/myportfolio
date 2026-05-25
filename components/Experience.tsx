"use client"

import { useGSAP } from "@gsap/react"
import { AnimatePresence, motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useState } from "react"

import type { ExpCard, TaskItem } from "@/data/experience"
import {
  toMonths,
  endMonths,
  formatDate,
  mainJobs,
  sideJobs,
  timelineStartM,
  pct,
} from "@/lib/timeline"

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const [selected, setSelected] = useState<ExpCard | null>(null)

  useGSAP(() => {
    gsap.utils.toArray(".exp-fade").forEach((el) => {
      gsap.from(el as Element, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: el as Element, start: "top 85%" },
      })
    })
  }, [])

  return (
    <section
      id="experience"
      className="flex justify-center items-center md:mt-40 mt-20 py-20 xl:px-0"
    >
      <div className="size-full md:px-20 px-5">
        <div className="flex flex-col items-center gap-5 mb-20">
          <div className="exp-badge">
            <p>私のキャリア</p>
          </div>
          <h1 className="heading">
            職務<span className="text-purple">経歴</span>
          </h1>
        </div>

        <div className="relative mx-auto max-w-5xl timeline-container">
          {/* 本業の線 */}
          {mainJobs.map((card, idx) => {
            const topP = pct(toMonths(card.startDate) - timelineStartM)
            const heightP = pct(endMonths(card) - toMonths(card.startDate))
            return (
              <div
                key={`main-line-${idx}`}
                className="absolute left-1/2 -translate-x-1/2 w-[3px] rounded-full"
                style={{
                  top: `${topP}%`,
                  height: `${heightP}%`,
                  minHeight: "100px",
                  backgroundColor: card.lineColor,
                  opacity: 0.8,
                }}
              />
            )
          })}

          {/* 本業ロゴ + 説明 */}
          {mainJobs.map((card, idx) => {
            const topP = pct(toMonths(card.startDate) - timelineStartM)
            return (
              <div key={`main-${idx}`}>
                <div
                  className="absolute left-1/2 -translate-x-1/2 z-20"
                  style={{ top: `${topP}%` }}
                >
                  <div className="timeline-logo" style={{ borderColor: card.lineColor }}>
                    <img src={card.logoPath} alt="logo" />
                  </div>
                </div>

                {/* PC用 */}
                <div
                  className="exp-fade absolute z-10 hidden md:block"
                  style={{ top: `${topP}%`, left: "calc(50% + 52px)", right: 0 }}
                >
                  <div className="pl-6">
                    <h2 className="font-semibold text-2xl text-white">{card.title}</h2>
                    <p className="text-base text-white-100 mt-1">
                      {formatDate(card.startDate)} 〜 {formatDate(card.endDate)}
                    </p>
                    <button
                      onClick={() => setSelected(card)}
                      className="group relative mt-4 inline-flex items-center gap-2 overflow-hidden rounded-full border border-purple/40 bg-gradient-to-r from-purple/25 via-purple/10 to-blue-100/20 px-5 py-2 text-sm font-semibold text-white shadow-[0_0_18px_-2px_rgba(203,172,249,0.45)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.04] hover:border-purple hover:shadow-[0_0_28px_-2px_rgba(203,172,249,0.85)] cursor-pointer"
                    >
                      <span
                        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                        aria-hidden
                      />
                      <span className="relative bg-gradient-to-r from-purple to-blue-100 bg-clip-text text-transparent">
                        詳細を見る
                      </span>
                      <span className="relative text-purple transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>

                {/* スマホ用 */}
                <div
                  className="absolute z-10 md:hidden cursor-pointer"
                  style={{ top: `${topP}%`, left: "calc(50% + 30px)", right: 0 }}
                  onClick={() => setSelected(card)}
                >
                  <p className="text-xs text-white font-semibold">{card.title}</p>
                  <p className="text-[10px] text-white-100">
                    {formatDate(card.startDate)} 〜 {formatDate(card.endDate)}
                  </p>
                </div>
              </div>
            )
          })}

          {/* 副業 */}
          {sideJobs.map((card, idx) => {
            const startM = toMonths(card.startDate)
            const endM = endMonths(card)
            const topP = pct(startM - timelineStartM)
            const heightP = pct(endM - startM)
            return (
              <div
                key={`side-${idx}`}
                className="absolute z-10"
                style={{
                  top: `${topP}%`,
                  height: `${heightP}%`,
                  minHeight: "80px",
                  right: "calc(50% + 48px)",
                  left: 0,
                }}
              >
                <div className="flex h-full justify-end">
                  {/* PC用テキスト */}
                  <div className="exp-fade flex-1 text-right pr-6 hidden md:block">
                    <h2 className="font-semibold text-xl text-white">{card.title}</h2>
                    <p className="text-sm text-white-100 mt-1">
                      {formatDate(card.startDate)} 〜 {formatDate(card.endDate)}
                    </p>
                    <button
                      onClick={() => setSelected(card)}
                      className="group relative mt-3 inline-flex items-center gap-2 overflow-hidden rounded-full border border-purple/40 bg-gradient-to-r from-purple/25 via-purple/10 to-blue-100/20 px-5 py-2 text-sm font-semibold text-white shadow-[0_0_18px_-2px_rgba(203,172,249,0.45)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.04] hover:border-purple hover:shadow-[0_0_28px_-2px_rgba(203,172,249,0.85)] cursor-pointer"
                    >
                      <span
                        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                        aria-hidden
                      />
                      <span className="relative bg-gradient-to-r from-purple to-blue-100 bg-clip-text text-transparent">
                        詳細を見る
                      </span>
                      <span className="relative text-purple transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>

                  {/* 線 + ロゴ */}
                  <div className="flex flex-col items-center flex-none w-10 md:w-16">
                    <div className="timeline-logo-sm" style={{ borderColor: card.lineColor }}>
                      <img src={card.logoPath} alt="logo" />
                    </div>
                    <div
                      className="w-[3px] flex-1 mt-1 rounded-full"
                      style={{ backgroundColor: card.lineColor, opacity: 0.8 }}
                    />
                  </div>

                  {/* スマホ用テキスト */}
                  <div
                    className="md:hidden flex-1 text-right pr-2 cursor-pointer"
                    onClick={() => setSelected(card)}
                  >
                    <p className="text-xs text-white font-semibold">{card.title}</p>
                    <p className="text-[10px] text-white-100">
                      {formatDate(card.startDate)} 〜 {formatDate(card.endDate)}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* モーダル */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* オーバーレイ */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            {/* モーダル本体 */}
            <motion.div
              className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl border border-white/10 p-6 md:p-8"
              style={{ background: "rgba(14, 14, 16, 0.95)" }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* 閉じるボタン */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white-100 hover:text-white transition-colors cursor-pointer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* ヘッダー */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border flex-none"
                  style={{
                    borderColor: selected.lineColor,
                    backgroundColor: "rgba(14, 14, 16, 1)",
                  }}
                >
                  <img
                    src={selected.logoPath}
                    alt="logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    {selected.title}
                  </h2>
                  <p className="text-sm text-white-100">
                    {formatDate(selected.startDate)} 〜 {formatDate(selected.endDate)}
                  </p>
                </div>
              </div>

              {/* プロジェクト詳細 */}
              {selected.details?.map((detail, dIdx) => (
                <div key={dIdx} className="mb-6 last:mb-0">
                  <div
                    className="flex items-center gap-2 mb-3 pb-2 border-b"
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-none"
                      style={{ backgroundColor: selected.lineColor }}
                    />
                    <h3 className="text-base md:text-lg font-semibold text-white">
                      {detail.project}
                    </h3>
                  </div>
                  <ul className="list-disc ms-5 flex flex-col gap-2 text-white-100">
                    {detail.tasks.map((task, tIdx) =>
                      typeof task === "string" ? (
                        <li key={tIdx} className="text-sm">{task}</li>
                      ) : (
                        <li key={tIdx} className="text-sm">
                          {task.title}
                          <ul className="list-disc ms-5 flex flex-col gap-1 mt-1">
                            {task.children.map((child, cIdx) => (
                              <li key={cIdx} className="text-sm">{child}</li>
                            ))}
                          </ul>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Experience
