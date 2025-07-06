const fg = require("fast-glob");
const fs = require("fs");

(async () => {
  const files = await fg(["src/**/*.{js,ts,jsx,tsx}"]);

  for (const file of files) {
    let content = fs.readFileSync(file, "utf8");

    // Міняємо тільки шляхи в імпортах
    const updated = content.replace(
      /from\s+["'](.*?)(\.jpg|\.jpeg|\.png)["']/g,
      (_, pathWithoutExt) => `from "${pathWithoutExt}.webp"`
    );

    fs.writeFileSync(file, updated, "utf8");
  }

  console.log("✅ Replaced imports to .webp");
})();
