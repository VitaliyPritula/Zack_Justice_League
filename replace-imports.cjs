const fs = require("fs");
const fg = require("fast-glob");

(async () => {
  const files = await fg(["src/**/*.{js,jsx,ts,tsx}"]);

  for (const file of files) {
    let content = fs.readFileSync(file, "utf8");

    // Заміна імпортів *.jpg, *.jpeg, *.png → *.webp
    const updated = content.replace(
      /from\s+['"](.+?)\.(jpg|jpeg|png)['"]/g,
      (_match, pathWithoutExt) => `from "${pathWithoutExt}.webp"`
    );

    if (updated !== content) {
      fs.writeFileSync(file, updated, "utf8");
      console.log(`📝 Updated imports in ${file}`);
    }
  }

  console.log("✅ All imports updated to .webp");
})();
