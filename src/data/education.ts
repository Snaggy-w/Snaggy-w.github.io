export interface EducationEntry {
  title: string;
  period: string;
  institution: string;
  description: string;
}

export const education: EducationEntry[] = [
  {
    title: "Master's (M2) in Cyber Security",
    period: "2026 – Present",
    institution: "Cysec — UGA, IM2AG / Grenoble INP Ensimag",
    description:
      "Focuses on software security, physical security, cryptography, and infrastructure security.",
  },
  {
    title: "Master's (M1) in Informatics",
    period: "2025 – 2026",
    institution: "MoSIG — UGA, IM2AG / Grenoble INP Ensimag",
    description: "Teaches various disciplines in the domain of computer science.",
  },
  {
    title: "Master's (M1) in Informatics and Information Systems Administration",
    period: "2024 – 2025",
    institution: "Lebanese University, Faculty of Technology — ranked 3rd",
    description:
      "Focuses on business and systems administration and software development.",
  },
  {
    title: "Licence professionnelle (L3) in Computer Networks and Security",
    period: "2023 – 2024",
    institution: "Lpro CNMS — UGA IUT1 — ranked 1st, 16.6/20 average",
    description:
      "Focuses on networking, telecommunications, system administration, cloud infrastructure, and network security.",
  },
  {
    title: "Bachelor in Computer Networks, Signals and IoT",
    period: "2021 – 2023",
    institution: "Lebanese University, Faculty of Technology — ranked 3rd, 71.58/100 average",
    description:
      "Focuses on telecommunications, IoT, networking, software engineering, and development.",
  },
  {
    title: "Diplôme Baccalauréat Libanais",
    period: "2020 – 2021",
    institution: "General Sciences — honors, 18/20, ranked 28th nationwide",
    description: "High school certificate with specialty in Math and Physics.",
  },
];
