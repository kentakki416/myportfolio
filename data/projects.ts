export type ProjectCategory = "web" | "mobile" | "oss";

export const projectCategories: { key: ProjectCategory; label: string }[] = [
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "oss", label: "OSS" },
]

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
};

export type ProjectDetail = {
  overview: string;
  features: string[];
  techDescription: string;
  media?: ProjectMedia[];
  githubUrl?: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  category: ProjectCategory;
  featured?: boolean;
  detail: ProjectDetail;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "money-management",
    title: "Money Management",
    des: "複数の決済サービスに対応し、支出を自動でカテゴリ分類。お金の使い道をひと目で把握できる家計管理アプリです。",
    img: "/projects/money-management.png",
    iconLists: ["/projects/re.svg", "/projects/tail.svg", "/projects/ts.svg", "/projects/next.svg", "/projects/mysql.svg"],
    category: "web",
    detail: {
      overview: "Turborepoによるモノレポ構成で、Web（Next.js）・管理画面の2つのフロントエンドを持つ家計管理アプリです。複数の決済サービスのCSVを取り込み、支出を自動でカテゴリ分類・可視化します。",
      features: [
        "銀行・決済サービス別のCSVインポート（SMBC・MUFG・PayPayなど複数フォーマット対応）",
        "キーワードマッチによる支出の自動カテゴリ分類（部分一致・完全一致・優先度付き）",
        "月別・カテゴリ別の支出グラフによるダッシュボード可視化",
        "Google OAuthによる認証・JWTベースのセッション管理",
        "管理画面によるユーザー管理・グローバル統計・カテゴリルール管理",
      ],
      techDescription: "DIパターンによるController/Repository/Serviceの責務分離で、拡張性と保守性に優れたAPI設計を実現。Zodスキーマをモノレポ内のパッケージとしてフロントエンドと共有することで、API境界の型安全性を担保しています。インフラはTerraformによるIaC管理とGitHub ActionsによるCI/CDの自動化で、安全かつ迅速なデプロイを可能にしています。",
      media: [
        { type: "video", src: "/projects/money-management.mp4", alt: "Money Management デモ動画" },
        { type: "image", src: "/projects/money-management-admin.png", alt: "Money Management 管理画面" },
      ],
      githubUrl: "https://github.com/kentakki416/money-management",
    },
  },
  {
    id: 2,
    slug: "sns-battle",
    title: "SNS Battle",
    des: "1対1ビデオマッチング + テーマトーク + リアクション共有を軸にした、リアルタイムソーシャルプラットフォームです。",
    img: "/projects/sns-battle/home.png",
    iconLists: ["/projects/redis.svg", "/projects/bullmq.svg", "/projects/livekit.svg"],
    category: "web",
    featured: true,
    detail: {
      overview: "Turborepo + pnpm モノレポで Web（Next.js 16）・Admin・Mobile（Expo）・API（Express 5）・マッチング Worker を一括管理する、1対1ビデオマッチングを軸にしたリアルタイムソーシャルプラットフォームです。LiveKit による WebRTC ビデオ通話と、BullMQ ベースのテーマ進行ワーカーで、1 万人規模のマッチング同時待機にも耐える構成を設計しています。",
      features: [
        "1対1ビデオマッチング（LiveKit）。10 ラウンド構成でトークテーマを1分ごとに自動切替し、同じ回答を選ぶと紙吹雪で盛り上がる演出",
        "リアクション・スタンプの相互反映：LiveKit Data Channel（`matching:reaction` / `matching:stamp`）で送信した選択肢回答や絵文字スタンプが、相手のビデオ画面上にバブル / フロートアニメーションで即時表示",
        "マッチング演出 SFX：カウントダウン・テーマ切替・リアクション一致など、状態遷移に効果音を同期再生し、テーマトークの間延びを防ぐ盛り上げ設計",
        "MBTI ベースの会話アシスト：MBTI 相性スコア（`target_score_min/max`）で各ペアに最適化したトークテーマを worker 側で事前スケジューリングし、相手への質問例も自動提示",
        "ダーク × パステルパープル × シアンを基調としたグラスモーフィズム UI（Tailwind v4 + Framer Motion）",
      ],
      techDescription: "apps/api（Express 5）と apps/matching-worker（BullMQ）を分離し、マッチング成立後の LiveKit Room 発行・テーマ進行・Webhook 副作用処理をキュー駆動で非同期化することで、API のレイテンシを犠牲にせずスケールできる設計にしています。リアルタイム通知は WebSocket ではなく SSE + LiveKit Data Channel に寄せ、ALB の idle timeout チューニングだけで運用可能な構成に。スキーマは packages/schema（Zod）でモノレポ全体に共有し、API 境界を完全型付け。インフラは Web のみ Vercel、API / PostgreSQL / Redis / Worker を AWS（ECS Fargate + Terraform）に置くハイブリッド構成です。ALB は Terraform module で Blue / Green の 2 つの target group を切り替える方式に統一し、ECS タスク差し替え時の無停止リリースを担保。デプロイは GitHub Actions × GitHub OIDC でキーレス化したうえで、GitHub Environments（dev / staging / production）に Required Reviewers と Environment Secrets を紐付け、本番反映前に手動承認ゲートを挟む運用にしています。",
      media: [
        { type: "image", src: "/projects/sns-battle/demo.gif", alt: "SNS Battle デモ" },
        { type: "image", src: "/projects/sns-battle/signin.png", alt: "SNS Battle サインイン画面" },
        { type: "image", src: "/projects/sns-battle/home.png", alt: "SNS Battle ホーム画面" },
        { type: "image", src: "/projects/sns-battle/matching.png", alt: "SNS Battle マッチング画面" },
      ],
    },
  },
  {
    id: 3,
    slug: "programming-practice",
    title: "Programming Practice",
    des: "ブラウザ上で JavaScript の練習問題を解きながら学習できる、自動採点機能付きの学習プラットフォームです。",
    img: "/projects/programming-practice/home.png",
    iconLists: ["/projects/re.svg", "/projects/tail.svg", "/projects/ts.svg", "/projects/next.svg"],
    category: "web",
    detail: {
      overview: "Turborepoによるモノレポ構成で、Web（Next.js 16）・モバイル（Expo）・API（Express 5）を一括管理するプログラミング学習プラットフォームです。ブラウザ上のエディタで問題を解き、自動採点で即座にフィードバックを得られます。将来的に Go / C++ などの言語追加にも対応できる構成を意識しています。",
      features: [
        "Web エディタによる JavaScript 問題演習・コード実行・テスト採点",
        "Web Worker サンドボックスによるブラウザ完結の自動採点（DoS / インジェクションリスクなし）",
        "問題コンテンツ（meta.json / description.md / initial-code.js / tests.json）を Git 管理の静的ファイルとして提供し、PR レビュー・ロールバックを Git で完結",
        "Google OAuth + JWT による認証・解答状況の蓄積",
        "Go / C++ 追加に向けたサーバー側サンドボックス（Docker / Firecracker / Vercel Sandbox）採点方式を設計",
      ],
      techDescription: "JavaScript の採点はブラウザ内の Web Worker でユーザーコードを隔離実行し、console.log を差し替えて stdout を捕捉、AsyncFunction で assertion を評価することでサーバー負荷ゼロかつ安全な採点を実現しています。問題本体は DB ではなく packages/problems 配下の静的ファイルとして管理し、DB には slug / カテゴリ / difficulty 等のメタのみを格納する設計で、教材のバージョン管理と DB スキーマを分離。インフラは AWS ECS Fargate + Terraform + GitHub Actions による IaC / CI/CD、認証は JWT + Google OAuth、データストアは PostgreSQL 16 + Redis 7 を採用しています。",
      media: [
        { type: "image", src: "/projects/programming-practice/demo.gif", alt: "Programming Practice デモ" },
        { type: "image", src: "/projects/programming-practice/problem-list.png", alt: "Programming Practice 問題一覧" },
        { type: "image", src: "/projects/programming-practice/problem-doing.png", alt: "Programming Practice エディタ画面" },
      ],
      githubUrl: "https://github.com/kentakki416/programming-practice",
    },
  },
]
