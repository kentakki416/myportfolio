export type Technology = {
  name: string;
  icon: string;
  years: number;
  description: string;
};

export const technologies: Technology[] = [
  {
    name: "TypeScript",
    icon: "/tech/typescript.png",
    years: 3,
    description: "型安全な開発を重視し、大規模プロジェクトでの品質向上に活用。",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.png",
    years: 5,
    description: "フロントエンドからバックエンドまで幅広く使用。ES2024+の最新仕様にも対応。",
  },
  {
    name: "React",
    icon: "/tech/reactjs.png",
    years: 3,
    description: "SPA・SSRアプリケーションの構築。Next.jsと組み合わせた開発が得意。",
  },
  {
    name: "Node.js",
    icon: "/tech/nodejs.png",
    years: 4,
    description: "REST API・GraphQL・リアルタイム通信など、バックエンド全般の開発に使用。",
  },
  {
    name: "MongoDB",
    icon: "/tech/mongodb.png",
    years: 3,
    description: "スキーマ設計からインデックス最適化まで、NoSQLデータベースの運用経験。",
  },
  {
    name: "Docker",
    icon: "/tech/docker.png",
    years: 3,
    description: "開発環境の統一からCI/CDパイプラインの構築、本番運用まで対応。",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.png",
    years: 2,
    description: "ユーティリティファーストで高速なUI構築。デザインシステムの構築にも活用。",
  },
  {
    name: "git",
    icon: "/tech/git.png",
    years: 5,
    description: "Git Flow・GitHub Flowの運用、コードレビュー体制の整備など。",
  },
  {
    name: "Three.js",
    icon: "/tech/threejs.svg",
    years: 1,
    description: "3DビジュアライゼーションやインタラクティブなWebGL表現の開発。",
  },
]
