import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {},
      borderRadius: {},
      boxShadow: {},
      colors: {
        black: "#000",
        white: "#18171A",
      },
      flex: {},
      fontFamily: {
        inter: "Inter Variable, sans-serif",
        roboto: "Roboto, sans-serif",
      },
      fontSize: {},
      screens: {
        "2xl": "1440px",
        "3xl": "1920px",
        lg: "1024px",
        md: "768px",
        sm: "576px",
        xl: "1200px",
        xs: "0px",
      },
    },
  },
};
export default config;
