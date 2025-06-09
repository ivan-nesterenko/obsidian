import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        black: "#000",
      },
      fontFamily: {
        inter: "Inter Variable, sans-serif",
        roboto: "Roboto, sans-serif",
      },
      fontSize: {},
      borderRadius: {},
      boxShadow: {},
      flex: {},
      screens: {
        "3xl": "1920px",
        "2xl": "1440px",
        xl: "1200px",
        lg: "1024px",
        md: "768px",
        sm: "576px",
        xs: "0px",
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
};
export default config;
