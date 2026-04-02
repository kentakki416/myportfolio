export type ProjectCategory = "web" | "mobile" | "oss";

export const projectCategories: { key: ProjectCategory; label: string }[] = [
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "oss", label: "OSS" },
]

export const projects = [
  {
    id: 1,
    title: "3D太陽系シミュレーション",
    des: "Three.jsを使用した魅力的な3Dシミュレーションで、太陽系の惑星を探索できます。",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
    category: "web" as ProjectCategory,
  },
  {
    id: 2,
    title: "Yoom - ビデオ会議アプリ",
    des: "Yoomでビデオ会議をシンプルに。同僚や友人とスムーズに接続できます。",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
    category: "mobile" as ProjectCategory,
  },
  {
    id: 3,
    title: "AI画像SaaS - Canvaアプリケーション",
    des: "AI機能と決済・クレジットシステムを備えた本格的なSaaSアプリケーションです。",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
    category: "web" as ProjectCategory,
  },
  {
    id: 4,
    title: "Apple iPhone 3Dアニメーションサイト",
    des: "GSAPアニメーションとThree.jsの3Dエフェクトを組み合わせた、Apple iPhone 15 Proサイトの再現です。",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    category: "oss" as ProjectCategory,
  },
]
