// Writes client/<territory>/<service>/index.html for every config in landing/pages/ and returns them as Vite inputs.
// A new territory or service is a new config file (plus its route in vercel.json); no template change.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { renderPage } from "./template.mjs";

const pagesDir = path.resolve(import.meta.dirname, "pages");
const clientDir = path.resolve(import.meta.dirname, "../client");

export async function buildLandingPages() {
  const inputs = {};
  for (const file of fs.readdirSync(pagesDir).filter((f) => f.endsWith(".mjs")).sort()) {
    const config = (await import(pathToFileURL(path.join(pagesDir, file)).href)).default;
    if (process.env.VERCEL_ENV === "production" && !config.formEndpoint) {
      throw new Error(`${file}: formEndpoint is empty; the callback form would drop leads in production.`);
    }
    const out = path.join(clientDir, config.territorySlug, config.serviceSlug, "index.html");
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, renderPage(config));
    inputs[`${config.territorySlug}/${config.serviceSlug}`] = out;
  }
  return inputs;
}
