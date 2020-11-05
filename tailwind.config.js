module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#5ba4a4",
        "light-cyan": "#effafa",
        "light-cyan-2": "#eef6f6",
        "dark-cyan": "#7b8e8e",
        "dark-cyan-2": "#2c3a3a",
      },
      fontFamily: {
        body: ["Spartan"], // will generate class name: font-body
      },
      fontSize: {
        xxs: "0.5rem",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
