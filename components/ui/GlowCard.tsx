"use client"

import { useRef } from "react"

type ExpCard = {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
};

const GlowCard = ({
  card,
  index,
  children,
}: {
  card: ExpCard;
  index?: number;
  children: React.ReactNode;
}) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleMouseMove = (idx: number) => (e: React.MouseEvent) => {
    const cardEl = cardRefs.current[idx]
    if (!cardEl) return

    const rect = cardEl.getBoundingClientRect()
    const mouseX = e.clientX - rect.left - rect.width / 2
    const mouseY = e.clientY - rect.top - rect.height / 2

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI)
    angle = (angle + 360) % 360

    cardEl.style.setProperty("--start", String(angle + 60))
  }

  return (
    <div
      ref={(el) => {
        cardRefs.current[index ?? 0] = el
      }}
      onMouseMove={handleMouseMove(index ?? 0)}
      className="glow-card glow-card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow"></div>
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img
            key={i}
            src="/images/star.png"
            alt="star"
            className="size-5"
          />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-100 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  )
}

export default GlowCard
