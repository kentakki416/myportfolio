export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Infrastructure"
  | "Other";

export type Technology = {
  name: string;
  icon: string;
  years: number;
  description: string;
  category: TechCategory;
};

export const techCategories: { key: TechCategory; label: string }[] = [
  { key: "Frontend", label: "Frontend" },
  { key: "Backend", label: "Backend" },
  { key: "Database", label: "Database" },
  { key: "Infrastructure", label: "Infrastructure" },
  { key: "Other", label: "Other" },
];

export const technologies: Technology[] = [
  {
    name: "TypeScript",
    icon: "/tech/typescript.png",
    years: 3,
    description: "全プロジェクトで保守性やAIとの相性を考慮して採用。技術記事も複数執筆。",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.png",
    years: 5,
    description: "フロントエンドからバックエンドまで幅広く使用。ESLint等を活用しベストプラクティスに沿ったコーディングが得意。",
    category: "Frontend",
  },
  {
    name: "React",
    icon: "/tech/reactjs.png",
    years: 3,
    description: "カスタムHooksやコンポーネント設計を工夫し、再利用性の高いUI開発を実践。",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "/tech/nextjs.png",
    years: 3,
    description: "SSR・SSG・ISRを使い分け、キャッシュ戦略も意識したパフォーマンス重視の設計を実践。",
    category: "Frontend",
  },
  {
    name: "React Native",
    icon: "/tech/reactnative.png",
    years: 2,
    description: "iOS・Androidのクロスプラットフォーム開発でリリースまで担当。",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.png",
    years: 2,
    description: "デザインシステムの構築からレスポンシブ対応まで、一貫したUI開発に活用。",
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: "/tech/nodejs.png",
    years: 4,
    description: "REST API・GraphQL・リアルタイム通信など、複数プロジェクトでバックエンドを設計・実装。",
    category: "Backend",
  },
  {
    name: "Go",
    icon: "/tech/go.png",
    years: 2,
    description: "高パフォーマンスが求められるバックエンドサービスやCLIツールを設計・開発。",
    category: "Backend",
  },
  {
    name: "NestJS",
    icon: "/tech/nestjs.png",
    years: 2,
    description: "DIやモジュール設計を活かし、スケーラブルなAPI基盤を構築。",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: "/tech/mongodb.png",
    years: 3,
    description: "スキーマ設計からインデックス最適化まで、用途に応じたNoSQLの運用を経験。",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: "/tech/postgresql.png",
    years: 3,
    description: "複雑なクエリ最適化やマイグレーション管理を含むDB設計・運用を担当。",
    category: "Database",
  },
  {
    name: "MySQL",
    icon: "/tech/mysql.png",
    years: 3,
    description: "パフォーマンスチューニングやレプリケーション構成の設計・運用を経験。",
    category: "Database",
  },
  {
    name: "Redis",
    icon: "/tech/redis.png",
    years: 2,
    description: "キャッシュ・セッション管理・Pub/Subなど、要件に応じた活用パターンを実装。",
    category: "Database",
  },
  {
    name: "Docker",
    icon: "/tech/docker.png",
    years: 3,
    description: "マルチステージビルド等のベストプラクティスに沿った構築で、開発から本番運用まで対応。",
    category: "Infrastructure",
  },
  {
    name: "Kubernetes",
    icon: "/tech/kubernetes.png",
    years: 2,
    description: "マイクロサービスのデプロイ・スケーリング・運用をマニフェスト管理で実践。",
    category: "Infrastructure",
  },
  {
    name: "AWS",
    icon: "/tech/aws.png",
    years: 3,
    description: "EC2・ECS・Lambda・S3・RDS等を組み合わせ、要件に合わせたインフラを設計・構築。",
    category: "Infrastructure",
  },
  {
    name: "GCP",
    icon: "/tech/gcp.png",
    years: 2,
    description: "Cloud Run・GKE・BigQuery等を活用し、クラウドネイティブなインフラを構築。",
    category: "Infrastructure",
  },
  {
    name: "Terraform",
    icon: "/tech/terraform.png",
    years: 2,
    description: "IaCでクラウドリソースをコード管理し、再現性のあるインフラ構築を実践。",
    category: "Infrastructure",
  },
  {
    name: "Vercel",
    icon: "/tech/vercel.png",
    years: 2,
    description: "Next.jsプロジェクトのデプロイ・プレビュー環境の運用を担当。",
    category: "Infrastructure",
  },
  {
    name: "git",
    icon: "/tech/git.png",
    years: 5,
    description: "Git Flow・GitHub Flowの運用設計やコードレビュー体制の整備を主導。",
    category: "Other",
  },
  {
    name: "GitHub Actions",
    icon: "/tech/githubactions.png",
    years: 2,
    description: "CI/CDパイプラインを設計・構築し、テスト・デプロイの自動化を推進。",
    category: "Other",
  },
  {
    name: "Datadog",
    icon: "/tech/datadog.png",
    years: 2,
    description: "APM・ログ・メトリクスを活用した監視基盤を構築し、障害の早期検知に貢献。",
    category: "Other",
  },
  {
    name: "Sentry",
    icon: "/tech/sentry.png",
    years: 2,
    description: "エラートラッキングを導入・運用し、リリース後の品質改善サイクルを確立。",
    category: "Other",
  },
  {
    name: "Claude",
    icon: "/tech/claude.png",
    years: 1,
    description: "コード生成・レビュー・設計相談にAIを積極的に取り入れ、開発効率を向上。",
    category: "Other",
  },
];
