import AceternityIcon from "./ui/AceternityIcon"
import ApproachCard from "./ui/ApproachCard"
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect"

const Approach = () => {
  return (
    <section id="strengths" className="w-full pt-40 md:pt-52 pb-20 px-5 md:px-10 lg:px-20">
      <h1 className="heading">
        私の <span className="text-purple">強み</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <ApproachCard
          title="ソリューションの提案"
          icon={<AceternityIcon order="強み 1" />}
          des="複数企業で培った豊富な経験をもとに、プロジェクトの課題に対して最適なソリューションを提案します。提案にとどまらず、改善案の立案から実行・遂行までを一貫して推進します。"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </ApproachCard>
        <ApproachCard
          title="SRE整備"
          icon={<AceternityIcon order="強み 2" />}
          des="DatadogやSentryを活用したオブザーバビリティの強化・ロギング整備からコスト削減、IaCによるインフラ構築、AIを用いた開発体験の向上まで幅広く対応。プロジェクト全体の可用性やSLO/SLIの強化も推進します。"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </ApproachCard>
        <ApproachCard
          title="フルスタック開発"
          icon={<AceternityIcon order="強み 3" />}
          des="フロントエンドとバックエンドの双方からキャッシュ・負荷・保守性を考慮し、最適なアプローチで実装します。変更しやすく壊れにくいアーキテクチャを設計・提案します。"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </ApproachCard>
      </div>
    </section>
  )
}

export default Approach
