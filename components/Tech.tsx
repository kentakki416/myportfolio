"use client"

import { technologies } from "@/data"

import TechBall from "./ui/TechBall"

const Tech = () => {
  return (
    <section id="tech" className="py-20">
      <h1 className="heading mb-10">
        技術<span className="text-purple">スタック</span>
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-5 sm:gap-10">
        {technologies.map((tech) => (
          <TechBall key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  )
}

export default Tech
