const sharp = require("sharp");
const fg = require("fast-glob");
const fs = require("fs");
const path = require("path");

(async () => {
  const files = await fg(["src/**/*.{jpg,jpeg,png}"]);

  await Promise.all(files.map(async (file) => {
    const output = file.replace(/\.(jpg|jpeg|png)$/, ".webp");
    await sharp(file)
      .webp({ quality: 80 })
      .toFile(output);
    console.log(`✅ Converted: ${file} → ${output}`);
  }));
})();
