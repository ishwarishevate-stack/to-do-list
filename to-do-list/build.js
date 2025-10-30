import { execSync } from "child_process";

try {
  console.log("📦 Installing dependencies...");
  execSync("npm ci --include=dev", { stdio: "inherit" });

  console.log("🏗️ Building the project with Vite...");
  execSync("npm run build", { stdio: "inherit" });
} catch (err) {
  console.error("❌ Build failed:", err);
  process.exit(1);
}
