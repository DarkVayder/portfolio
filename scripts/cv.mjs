// Prints cv/cv.html to public/Rabiu_Muhammad_CV.pdf using an installed Edge or Chrome.
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "cv", "cv.html");
const output = path.join(root, "public", "Rabiu_Muhammad_CV.pdf");

const candidates = [
  process.env.BROWSER_PATH,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const browser = candidates.find((candidate) => existsSync(candidate));
if (!browser) {
  console.error("No Edge or Chrome found. Set BROWSER_PATH to a Chromium-based browser.");
  process.exit(1);
}

execFileSync(
  browser,
  ["--headless=new", "--disable-gpu", "--no-pdf-header-footer", `--print-to-pdf=${output}`, pathToFileURL(source).href],
  { stdio: "ignore" },
);

console.log(`wrote ${path.relative(root, output)}`);
