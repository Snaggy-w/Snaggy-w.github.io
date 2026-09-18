export interface ExperienceGroup {
  heading: string;
  bullets: string[];
}

export interface ExperienceEntry {
  title: string;
  period: string;
  summary?: string;
  groups?: ExperienceGroup[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Internship at Verimag",
    period: "Jan 2026 – Jul 2026",
    summary:
      "Research internship answering 'How good are LLMs at detecting and correcting software vulnerabilities?' by building an AI agentic framework capable of exploiting C-based programs.",
  },
  {
    title: "Internship at LPSC — IN2P3/CNRS",
    period: "Mar 2024 – Jul 2024",
    groups: [
      {
        heading: "System Administration",
        bullets: [
          "Handled and analyzed server and service logs using Syslog and industry-grade SIEMs (ELK, Grafana Loki, Graylog).",
          "Worked on migrating clusters from ESXi to Proxmox.",
        ],
      },
      {
        heading: "Software Development",
        bullets: [
          "Developed an access-request web portal for physical experiments using a LAMP stack.",
          "Developed Bash & Python automation scripts for user access, user creation, and authentication on servers running physical experiments.",
        ],
      },
    ],
  },
];
