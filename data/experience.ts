export type YearMonth = { year: number; month: number };

export type ExpCard = {
  logoPath: string;
  title: string;
  startDate: YearMonth;
  endDate: YearMonth | null;
  responsibilities: string[];
  type: "main" | "side";
  lineColor: string;
};

export const expCards: ExpCard[] = [
  {
    logoPath: "/images/logo1.png",
    title: "サイバーエージェント",
    startDate: { year: 2023, month: 4 },
    endDate: { year: 2025, month: 4 },
    type: "main",
    lineColor: "#06b6d4",
    responsibilities: [
      "Webサイトのユーザー向け機能の開発・保守を担当。",
      "UI/UXデザイナーと密接に連携し、シームレスなユーザー体験を実現。",
      "Webアプリケーションの速度とスケーラビリティを最大化するための最適化。",
    ],
  },
  {
    logoPath: "/images/logo2.png",
    title: "フルスタック開発（副業）",
    startDate: { year: 2024, month: 5 },
    endDate: { year: 2025, month: 1 },
    type: "side",
    lineColor: "#a78bfa",
    responsibilities: [
      "スケーラビリティを重視したWebアプリケーション開発をリード。",
      "バックエンドエンジニアと連携し、APIとフロントエンドのシームレスな統合を実現。",
    ],
  },
]
