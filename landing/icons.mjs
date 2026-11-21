// Inline SVG from lucide-react's icon data, so landing pages ship no icon JS.
import fs from "node:fs";
import path from "node:path";

const iconDir = path.resolve(import.meta.dirname, "../node_modules/lucide-react/dist/esm/icons");

export function icon(name, size = 24) {
  const src = fs.readFileSync(path.join(iconDir, `${name}.js`), "utf8");
  const body = [...src.matchAll(/\[\s*"(\w+)",\s*\{([^}]*)\}\s*\]/g)]
    .map(([, tag, attrs]) => {
      const pairs = [...attrs.matchAll(/(\w+): "([^"]*)"/g)].filter(([, k]) => k !== "key");
      return `<${tag} ${pairs.map(([, k, v]) => `${k}="${v}"`).join(" ")}/>`;
    })
    .join("");
  if (!body) throw new Error(`lucide icon "${name}" parsed empty`);
  return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
}
