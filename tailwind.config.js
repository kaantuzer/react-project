/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonYellow: "#FDC913",
        softGray: "5F5F5F",
        darkGray: "#292929",
        projectRed: "#CE2829",
        bej: "#FAF7F2",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"], // varsayılan sans yerine Inter
      },
    },
  },
  plugins: [],
};
