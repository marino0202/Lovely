/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.htm"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoHev: ["Roboto", "Helvetica", "sans-serif"],
      },
      spacing: {
        "4.5": "1.125rem",
      },
      screens: {
        xs: "560px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "sm-device": { min: "560px", max: "767px" },
        tablet: { min: "768px", max: "1023px" },
        laptop: {min: "1024", max: "1279"},
        desktop: {min: "1280", max: "1536"},
        "xs-max": { max: "559px" },
        "sm-max": { max: "639px" },
        "md-max": { max: "767px" },
        "lg-max": { max: "1023px" },
        "xl-max": { max: "1279px" },
        "2xl-max": { max: "1535px" },
      },
    },
  },
  plugins: [],
};