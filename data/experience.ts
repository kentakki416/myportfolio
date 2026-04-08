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
    endDate: { year: 2026, month: 1 },
    type: "main",
    lineColor: "#06b6d4",
    responsibilities: [
      "Webサイトのユーザー向け機能の開発・保守を担当。",
      "UI/UXデザイナーと密接に連携し、シームレスなユーザー体験を実現。",
      "Webアプリケーションの速度とスケーラビリティを最大化するための最適化。",
    ],
  },
  {
    logoPath: "/images/logo1.png",
    title: "wevnal",
    startDate: { year: 2026, month: 3 },
    endDate: null,
    type: "main",
    lineColor: "#06b6d4",
    responsibilities: [],
  },
  {
    logoPath: "/images/logo2.png",
    title: "Stract（副業）",
    startDate: { year: 2025, month: 1 },
    endDate: { year: 2026, month: 1 },
    type: "side",
    lineColor: "#a78bfa",
    responsibilities: [],
  },
  {
    logoPath: "/images/logo2.png",
    title: "Kecak（副業）",
    startDate: { year: 2026, month: 1 },
    endDate: null,
    type: "side",
    lineColor: "#a78bfa",
    responsibilities: [],
  },
];
