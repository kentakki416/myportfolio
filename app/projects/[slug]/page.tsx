import { notFound } from "next/navigation"
import { FaGithub } from "react-icons/fa6"

import { projects } from "@/data"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return { title: "Not Found" }
  return {
    title: `${project.title} | Kentakki416's portfolio`,
    description: project.des,
  }
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const { detail } = project

  return (
    <main className="relative bg-black-100 min-h-screen">
      {/* ヘッダー背景 */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#13162D" }}
        >
          <img
            src="/images/bg.png"
            alt="bg"
            className="size-full object-cover opacity-50"
          />
        </div>
        <img
          src={project.img}
          alt={project.title}
          className="relative z-10 mx-auto max-h-[70%] object-contain drop-shadow-2xl"
        />
      </div>

      {/* コンテンツ */}
      <div className="max-w-4xl mx-auto px-5 md:px-10 py-12 md:py-16">
        {/* 戻るリンク */}
        <a
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-purple hover:underline mb-8"
        >
          ← プロジェクト一覧に戻る
        </a>

        {/* タイトル */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {project.title}
        </h1>
        <p className="text-lg text-white-100 mb-8">{project.des}</p>

        {/* 技術アイコン */}
        <div className="flex items-center gap-3 mb-10">
          {project.iconLists.map((icon, i) => (
            <div
              key={i}
              className="border border-white/[.2] rounded-full bg-black-100 lg:size-12 size-10 flex justify-center items-center"
            >
              <img src={icon} alt="" className="p-2" />
            </div>
          ))}
        </div>

        {/* デモ動画 */}
        {detail.videoPath && (
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              デモ動画
            </h2>
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video">
              <video
                src={detail.videoPath}
                controls
                className="size-full object-contain"
                poster={project.img}
              >
                <track kind="captions" />
              </video>
            </div>
          </section>
        )}

        {/* 概要 */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
            概要
          </h2>
          <p className="text-white-100 leading-relaxed">{detail.overview}</p>
        </section>

        {/* 主な機能 */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
            主な機能
          </h2>
          <ul className="list-disc ms-5 flex flex-col gap-3 text-white-100">
            {detail.features.map((f, i) => (
              <li key={i} className="text-base leading-relaxed">
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* 技術的なポイント */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
            技術的なポイント
          </h2>
          <p className="text-white-100 leading-relaxed">
            {detail.techDescription}
          </p>
        </section>

        {/* GitHub リンク */}
        {detail.githubUrl && (
          <div className="flex">
            <a
              href={detail.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 bg-black-100 text-white hover:border-purple/50 transition-colors"
            >
              <FaGithub className="text-xl" />
              <span>GitHubで見る</span>
            </a>
          </div>
        )}
      </div>
    </main>
  )
}
