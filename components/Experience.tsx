"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

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
                    <p className="text-[#839CB5] italic mt-4 mb-3">担当業務</p>
                    <ul className="list-disc ms-5 flex flex-col gap-3 text-white-100">
                      {card.responsibilities.map((r, i) => (
                        <li key={i} className="text-base">{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* スマホ用 */}
                <div
                  className="absolute z-10 md:hidden"
                  style={{ top: `${topP}%`, left: "calc(50% + 30px)", right: 0 }}
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
                    <p className="text-[#839CB5] italic mt-3 mb-2 text-sm">担当業務</p>
                    <ul className="list-none flex flex-col gap-2 text-white-100">
                      {card.responsibilities.map((r, i) => (
                        <li key={i} className="text-sm">{r}</li>
                      ))}
                    </ul>
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
                  <div className="md:hidden flex-1 text-right pr-2">
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
    </section>
  )
}

export default Experience
