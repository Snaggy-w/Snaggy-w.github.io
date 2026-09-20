export interface LinkEntry {
  label: string;
  url: string;
  icon: string; // filename under public/icons without extension, should render with the theme if not dark... I hope
}

export interface LinkGroup {
  group: string;
  entries: LinkEntry[];
}

export const linkGroups: LinkGroup[] = [
  {
    group: "Social",
    entries: [{ label: "X (@___Snaggy___)", url: "https://x.com/___Snaggy___", icon: "x" }],
  },
  {
    group: "Work",
    entries: [
      { label: "GitHub", url: "https://github.com/Snaggy-w", icon: "github" },
      { label: "Blog (Medium)", url: "https://medium.com/@ahmadshamius2", icon: "medium" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ahmad-shami-1979a7208", icon: "linkedin" },
    ],
  },
  {
    group: "CTF",
    entries: [
      { label: "CTFtime", url: "https://ctftime.org/user/152106", icon: "ctftime" },
      { label: "Hack The Box", url: "https://app.hackthebox.com/public/users/624282", icon: "hackthebox" },
      { label: "cylab (picoCTF)", url: "https://learn.cylabacademy.org/users/Snaggy", icon: "cylab" },
      { label: "TryHackMe", url: "https://tryhackme.com/r/p/Ahmadshami", icon: "tryhackme" },
    ],
  },
  {
    group: "Security research",
    entries: [
      { label: "HackerOne", url: "https://hackerone.com/snaggy", icon: "hackerone" },
      { label: "YesWeHack", url: "https://yeswehack.com/hunters/asempire", icon: "yeswehack" },
    ],
  },
];
