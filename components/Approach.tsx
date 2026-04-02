import AceternityIcon from "./ui/AceternityIcon"
import ApproachCard from "./ui/ApproachCard"
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect"

const Approach = () => {
  return (
    <section id="strengths" className="w-full py-20 px-5 md:px-10 lg:px-20">
      <h1 className="heading">
        私の <span className="text-purple">強み</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <ApproachCard
          title="ソリューションの提案"
          icon={<AceternityIcon order="強み 1" />}
          des="複数企業で培った幅広い技術スタック（フロントエンド・バックエンド・インフラ）を武器に、CI/CD構築・監視体制の整備・保守運用の効率化・開発フローの改善など、プロジェクトの課題に最適な解決策を提案します。"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </ApproachCard>
        <ApproachCard
          title="SRE整備"
          icon={<AceternityIcon order="強み 2" />}
          des="DatadogやSentryなどを用いたオブザーバビリティの強化や、DBやキャッシュを用いたパフォーマンスチューニングはもちろん、プロジェクト全体の可用性やSLO/SLIの強化まで幅広く対応します。"
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
          des="JavaScriptを最も得意として、Backend・Web・Mobileすべてを高品質で開発できます。パフォーマンスを意識した実装や、変更に強いアーキテクチャの設計まで一貫して対応します。"
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
