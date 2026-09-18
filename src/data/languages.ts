export interface Language {
  name: string;
  level: string;
  percent: number; // langauge percentage bar
}

export const languages: Language[] = [
  { name: "English", level: "C1 — IELTS 7.5", percent: 85 },
  { name: "Arabic", level: "Native", percent: 100 },
  { name: "French", level: "A2 — Basic", percent: 35 },
];
