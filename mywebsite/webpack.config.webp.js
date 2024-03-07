const imagemin = require("imagemin");
const webp = require("imagemin-webp");
imagemin(["src/img/.{jpeg,png}"], {
  destination: "dist/images",
  plugins: [
    webp({
      quality: 60,
      resize: { width: 150, height: 150 },
    }),
  ],
});
