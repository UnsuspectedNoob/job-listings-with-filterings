/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        league: "'League Spartan'",
      },
      colors: {
        primary: {
          "dsatd-cyan": "hsl(180, 29%, 50%)",
        },

        neutral: {
          "lg-cyan": "hsl(180, 52%, 96%)",
          "lg-cyan-filter": "hsl(180, 31%, 95%)",
          "dg-cyan": "hsl(180, 8%, 52%)",
          "vdg-cyan": "hsl(180, 14%, 20%)",
        },
      },
    },
  },
  plugins: [],
};
