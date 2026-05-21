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
    slug: "yoom-video-app",
    title: "Yoom - ビデオ会議アプリ",
    des: "Yoomでビデオ会議をシンプルに。同僚や友人とスムーズに接続できます。",
    img: "/projects/p2.svg",
    iconLists: ["/projects/next.svg", "/projects/tail.svg", "/projects/ts.svg", "/projects/stream.svg", "/projects/c.svg"],
    category: "mobile",
    detail: {
      overview: "Next.jsとStream Video SDKを組み合わせたビデオ会議アプリケーションです。ルーム作成・参加・画面共有・チャットなど、基本的なビデオ会議機能を一通り実装しています。",
      features: [
        "ワンクリックでのルーム作成・招待リンク共有",
        "最大12人同時接続のグループビデオ通話",
        "画面共有機能（全画面・ウィンドウ指定）",
        "リアルタイムテキストチャット",
        "Clerk認証によるユーザー管理",
      ],
      techDescription: "Next.js App Routerでルーティングを構築し、Stream Video SDKでWebRTC通信を抽象化。認証はClerkを採用し、ミドルウェアでルート保護を実現しました。UIはTailwind CSSとshadcn/uiで構築しています。",
      githubUrl: "https://github.com/example/yoom",
    },
  },
  {
    id: 3,
    slug: "ai-image-saas",
    title: "AI画像SaaS - Canvaアプリケーション",
    des: "AI機能と決済・クレジットシステムを備えた本格的なSaaSアプリケーションです。",
    img: "/projects/p3.svg",
    iconLists: ["/projects/re.svg", "/projects/tail.svg", "/projects/ts.svg", "/projects/three.svg", "/projects/c.svg"],
    category: "web",
    detail: {
      overview: "AI画像生成・編集機能を備えたSaaSアプリケーションです。ユーザーはクレジットを購入し、背景除去・画像拡張・オブジェクト除去などのAI機能を利用できます。",
      features: [
        "AI背景除去（Cloudinary AI）",
        "画像の高解像度化・拡張",
        "テキストプロンプトからの画像生成",
        "Stripe決済によるクレジット購入",
        "画像の保存・ダウンロード・共有",
      ],
      techDescription: "Next.js 14でフルスタック構築し、Cloudinary AIのAPIで画像処理を実現。決済はStripe Checkoutを導入し、Webhookでクレジット付与を自動化。データベースはMongoDB + Mongooseを使用しています。",
      githubUrl: "https://github.com/example/ai-image-saas",
    },
  },
  {
    id: 5,
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
  {
    id: 4,
    slug: "apple-iphone-3d",
    title: "Apple iPhone 3Dアニメーションサイト",
    des: "GSAPアニメーションとThree.jsの3Dエフェクトを組み合わせた、Apple iPhone 15 Proサイトの再現です。",
    img: "/projects/p4.svg",
    iconLists: ["/projects/next.svg", "/projects/tail.svg", "/projects/ts.svg", "/projects/three.svg", "/projects/gsap.svg"],
    category: "oss",
    detail: {
      overview: "Apple公式サイトのiPhone 15 Proページを参考に、GSAPのスクロールトリガーアニメーションとThree.jsの3Dモデル表示を組み合わせたランディングページです。",
      features: [
        "スクロール連動のGSAPアニメーション",
        "iPhone 3DモデルのインタラクティブなカラーチェンジUI",
        "ビデオカルーセルによる機能紹介セクション",
        "スムーズなページ遷移とパララックス効果",
        "完全レスポンシブ対応",
      ],
      techDescription: "GSAPのScrollTriggerでスクロール位置に応じたアニメーションを制御。Three.jsでiPhoneのGLTFモデルを読み込み、マテリアルの動的切り替えでカラーバリエーションを実現しました。ビデオ再生はIntersection Observerで制御しています。",
      githubUrl: "https://github.com/example/apple-iphone-3d",
    },
  },
]
