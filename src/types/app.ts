export type GradeMap = Record<string, number[]>;

export type AcademyStats = Record<string, {
  correct: number;
  total: number;
}>;

export type AppState = {
  version: number;
  xp: number;
  checked: Record<string, boolean>;
  money: Record<string, number>;
  cateDone: Record<string, boolean>;
  catePage: number;
  cateXP: number;
  cateFavorites: number[];
  academyStats: AcademyStats;
  grades: GradeMap;
  selectedSubject?: string | null;
  journeyIndex: number;
  lastBackup?: string | null;
};

export type BackupPayload = {
  app: string;
  version: number;
  exportedAt: string;
  state: AppState;
  meta?: Record<string, unknown>;
};
