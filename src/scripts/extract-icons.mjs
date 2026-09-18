// a script to write icon images from `simple-icons` repo to the public dir


import { siGithub, siX, siMedium, siHackerone, siHackthebox } from "simple-icons";
import { writeFileSync } from "node:fs";

const icons = { github: siGithub, x: siX, medium: siMedium, hackerone: siHackerone, hackthebox: siHackthebox };
for (const [name, icon] of Object.entries(icons)) {
  writeFileSync(`../../public/icons/${name}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${icon.path}"/></svg>`);
}
