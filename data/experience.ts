export type YearMonth = { year: number; month: number };

export type TaskItem = string | { title: string; children: string[] };

export type ExpDetail = {
  project: string;
  tasks: TaskItem[];
};

export type ExpCard = {
  logoPath: string;
  title: string;
  startDate: YearMonth;
  endDate: YearMonth | null;
  responsibilities: string[];
  details: ExpDetail[];
  type: "main" | "side";
  lineColor: string;
};

export const expCards: ExpCard[] = [
  {
    logoPath: "/company/cyberagent.png",
    title: "サイバーエージェント",
    startDate: { year: 2023, month: 4 },
    endDate: { year: 2026, month: 1 },
    type: "main",
    lineColor: "#22c55e",
    responsibilities: [],
    details: [
      {
        project: "Pigg Partyのバックエンド開発",
        tasks: [
          "VIP機能の拡張（DBやアーキテクチャの設計から実装・テストまで担当）3ヶ月",
          "アバターの整形機能（要件定義から設計・実装・テストまで）6ヶ月",
          "ユーザー間のフリマ機能（要件定義からテストまで、バックエンドチームをリード）6ヶ月",
        ],
      },
      {
        project: "Pigg PartyのSRE業務",
        tasks: [
          "テストコードのリアーキテクチャ",
          "CI/CDの高速化",
          {
            title: "パフォーマンス改善",
            children: [
              "Datadogの整備＆APIのレイテンシーを5倍近く改善",
              "MemoryStoreのリードレプリカを導入",
              "コンテナの起動時間を40秒程度削減",
              "スケール戦略の再設定（HPAの調整）",
            ],
          },
          {
            title: "Web課金の構築",
            children: [
              "HelmによるWeb課金環境の構築",
              "Cloud Armorの導入",
              "決済基盤の構築",
              "APIの追加実装",
            ],
          },
          {
            title: "オブザビリティの強化",
            children: [
              "Loggerの整備（AsyncLocalStorageによる付加情報）",
            ],
          },
          "画像配信サーバーの社内クラウドへの移行",
          "TerraformによるIaC導入",
          "年間3000万以上のコスト削減",
        ],
      },
    ],
  },
  {
    logoPath: "/company/wevnal.png",
    title: "wevnal",
    startDate: { year: 2026, month: 3 },
    endDate: null,
    type: "main",
    lineColor: "#a78bfa",
    responsibilities: [],
    details: [
      {
        project: "チャットボットSaaSの機能開発",
        tasks: [
          "PostfixのVM移行",
          "MongoCのVM移行",
          {
            title: "Argo Workflowの監視導入",
            children: [
              "New Relicでの監視導入",
              "モニター・アラートの作成",
            ],
          },
        ],
      },
    ],
  },
  {
    logoPath: "/company/stract.png",
    title: "Stract（副業）",
    startDate: { year: 2025, month: 1 },
    endDate: { year: 2026, month: 1 },
    type: "side",
    lineColor: "#3b82f6",
    responsibilities: [],
    details: [
      {
        project: "plugのSRE業務",
        tasks: [
          "10億レコード以上の巨大テーブルのINTからBIGINTへの移行",
          "Cloud Formation管理からCDKによるIaCの移行",
          "Elastic BeanStalkからECSへの移行",
          "ロギングの改善（AsyncLocalStorageを用いた付加情報）",
          "CI時間の短縮",
        ],
      },
    ],
  },
  {
    logoPath: "/company/kecak.png",
    title: "Kecak（副業）",
    startDate: { year: 2026, month: 1 },
    endDate: { year: 2026, month: 5 },
    type: "side",
    lineColor: "#eab308",
    responsibilities: [],
    details: [
      {
        project: "オリパワンのSRE業務",
        tasks: [
          "ロギングの整備（AsyncLocalStorageを用いた付加情報）",
          "エラーハンドリングの整備",
          {
            title: "Datadogの導入",
            children: [
              "ダッシュボードの作成",
              "カスタムメトリクスの導入",
              "alert/warnレベルのモニター作成＆オブザビリティ文化の導入",
              "コストマネージャーの導入＆コスト削減",
            ],
          },
          {
            title: "パフォーマンス改善",
            children: [
              "リードレプリカ導入",
              "キャッシュ層の追加",
            ],
          },
          {
            title: "Sentryの整備",
            children: [
              "エラートラッキングの整備",
            ],
          },
          "AIによるインシデント調査フローの導入",
        ],
      },
    ],
  },
];
