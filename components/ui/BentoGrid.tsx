import { useState } from "react"
import { IoCopyOutline } from "react-icons/io5"
import { HiOutlineGlobeAlt } from "react-icons/hi"
import { HiOutlineCube } from "react-icons/hi2"
import Lottie from "react-lottie"

import animationData from "@/data/confetti.json"
import { cn } from "@/lib/utils"

import MagicButton from "../MagicButton"

import { BackgroundGradientAnimation } from "./GradientBg"
import GridGlobe from "./GridGlobe"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const interests = [
    {
      icon: <HiOutlineGlobeAlt className="text-xl lg:text-2xl text-purple" />,
      label: "Network",
      desc: "TCP/IP, DNS, CDN",
    },
    {
      icon: <HiOutlineCube className="text-xl lg:text-2xl text-purple" />,
      label: "Architecture",
      desc: "Microservices, DDD",
    },
  ]

  const [copied, setCopied] = useState(false)

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  const handleCopy = () => {
    const text = "fujimorikenta@icloud.com"
    navigator.clipboard.writeText(text)
    setCopied(true)
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="size-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center size-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={"font-sans text-lg lg:text-3xl max-w-96 font-bold z-10"}
          >
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex flex-col gap-3 lg:gap-4 mt-4 w-full z-10">
              {interests.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 lg:gap-4 rounded-xl px-3 py-2.5 lg:px-4 lg:py-3"
                  style={{
                    background: "rgba(203, 172, 249, 0.06)",
                    border: "1px solid rgba(203, 172, 249, 0.15)",
                  }}
                >
                  <div className="flex items-center justify-center shrink-0 size-9 lg:size-10 rounded-lg bg-[#10132E]">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm lg:text-base font-semibold text-white">
                      {item.label}
                    </span>
                    <span className="text-xs lg:text-sm text-[#C1C2D3]">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                }`}
              >
                {copied && (
                  <Lottie options={defaultOptions} height={200} width={400} />
                )}
              </div>

              <MagicButton
                title={copied ? "メールアドレスをコピーしました！" : "メールアドレスをコピー"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
