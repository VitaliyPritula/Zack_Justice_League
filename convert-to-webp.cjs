const sharp = require("sharp");
const fg = require("fast-glob");
const fs = require("fs");
const path = require("path");

(async () => {
  // Шукаємо зображення і в src/, і в public/
  const files = await fg(["src/**/*.{jpg,jpeg,png}", "public/**/*.{jpg,jpeg,png}"]);

  await Promise.all(
    files.map(async (file) => {
      const ext = path.extname(file);
      const output = file.replace(ext, ".webp");

      // Пропускаємо, якщо webp вже існує
      if (fs.existsSync(output)) return;

      await sharp(file)
        .webp({ quality: 80 })
        .toFile(output);

      console.log(`✅ Converted: ${file} → ${output}`);
    })
  );
})();
