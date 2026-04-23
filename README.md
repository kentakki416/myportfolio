# My Portfolio

Next.js + TypeScript で構築したポートフォリオサイトです。
3Dグラフィックス・スクロールアニメーション・WebGLシェーダーなど、リッチなインタラクションを取り入れています。

## デモ
https://myportfolio-eight-woad-35.vercel.app/



## 技術スタック

### フレームワーク / ランタイム

| 技術 | バージョン | 用途 |
|---|---|---|
| [Next.js](https://nextjs.org/) | 14.1.4 | React フレームワーク (App Router) |
| [React](https://react.dev/) | 18 | UI ライブラリ |
| [TypeScript](https://www.typescriptlang.org/) | 5 | 型安全な開発 |

### スタイリング

| 技術 | バージョン | 用途 |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com/) | 3.3 | ユーティリティファースト CSS |
| [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) | 1.0.7 | Tailwind 用アニメーションプラグイン |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 2.2 | クラス名の競合解決 |
| [clsx](https://github.com/lukeed/clsx) | 2.1 | 条件付きクラス名結合 |
| [class-variance-authority](https://cva.style/docs) | 0.7 | コンポーネントバリアント管理 |

### 3D / WebGL

| 技術 | バージョン | 用途 |
|---|---|---|
| [Three.js](https://threejs.org/) | 0.163 | 3D グラフィックスエンジン |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | 8.16 | Three.js の React レンダラー |
| [@react-three/drei](https://github.com/pmndrs/drei) | 9.105 | R3F 用ヘルパー (OrbitControls, Decal, Float, Preload 等) |
| [three-globe](https://github.com/vasturiano/three-globe) | 2.31 | 3D 地球儀 (自己紹介セクション) |
| WebGL Shader (カスタム) | - | CanvasRevealEffect のドットマトリクスアニメーション |

### アニメーション

| 技術 | バージョン | 用途 |
|---|---|---|
| [Framer Motion](https://www.framer.com/motion/) | 11.0 | React アニメーション (ページ遷移, フェード, スライド) |
| [GSAP](https://gsap.com/) | 3.14 | スクロールトリガーアニメーション (経歴セクション) |
| [@gsap/react](https://gsap.com/docs/v3/GSAP/gsap.utils/) | 2.1 | GSAP の React 統合 (`useGSAP` hook) |
| [react-lottie](https://github.com/chenqingspring/react-lottie) | 1.2 | Lottie アニメーション (紙吹雪エフェクト) |
| CSS Keyframes | - | Spotlight, シマー, グラデーション背景アニメーション |

### アイコン

| 技術 | バージョン | 用途 |
|---|---|---|
| [react-icons](https://react-icons.github.io/react-icons/) | 5.0 | Font Awesome 等のアイコン |
| [lucide-react](https://lucide.dev/) | 0.365 | Lucide アイコン |
| [@tabler/icons-react](https://tabler.io/icons) | 3.1 | Tabler アイコン |
| [mini-svg-data-uri](https://github.com/tigt/mini-svg-data-uri) | 1.4 | SVG → Data URI 変換 (Tailwind 背景パターン) |

### ビルド / 開発ツール

| 技術 | バージョン | 用途 |
|---|---|---|
| [pnpm](https://pnpm.io/) | 9.15 | パッケージマネージャー |
| [Turbo](https://turbo.build/) | 2.3 | ビルドオーケストレーション |
| [dotenvx](https://dotenvx.com/) | 1.34 | 環境変数管理 |
| [PostCSS](https://postcss.org/) | 8 | CSS トランスフォーム |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | 10 | ベンダープレフィックス自動付与 |

### リンター

| 技術 | バージョン | 用途 |
|---|---|---|
| [ESLint](https://eslint.org/) | 9 | コード品質チェック (flat config) |
| [eslint-config-next](https://nextjs.org/docs/app/api-reference/config/eslint) | 16.2 | Next.js 推奨ルール |
| [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) | 2.32 | import 順序・重複チェック |
| [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss) | 4.0.0-beta | Tailwind クラス名チェック |
| [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript) | 4.4 | TypeScript パスエイリアス解決 |

## コマンド

```bash
pnpm install      # 依存関係のインストール
pnpm dev          # 開発サーバー起動 (dotenvx で .env を読み込み)
pnpm build        # プロダクションビルド (turbo 経由)
pnpm start        # プロダクションサーバー起動
pnpm lint         # ESLint チェック
pnpm lint:fix     # ESLint 自動修正
```

