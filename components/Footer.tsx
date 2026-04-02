import { FaLocationArrow } from "react-icons/fa6"

import { socialMedia } from "@/data"

import MagicButton from "./MagicButton"

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="size-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading text-2xl md:text-4xl lg:text-5xl lg:max-w-[45vw]">
          <span className="text-purple">あなたの</span>プロジェクトをさらに高品質な次のレベルへ進化させます。
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          お気軽にご連絡ください！
        </p>
        <a href="mailto:fujimorikenta@icloud.com">
          <MagicButton
            title="お問い合わせはこちら"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; 2024 マイポートフォリオ
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="size-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
