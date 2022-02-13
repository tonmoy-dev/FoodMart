module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        transitionProperty: {
            height: "height",
            spacing: "margin, padding",
            width: "width",
        },
    },
    minHeight: {
        "1/2": "50%",
    },
},
  plugins: [],
}
