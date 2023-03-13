module.exports = {
    mode: "jit",
    purge: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          amazon_blue: {
            light: "#232F3E",
            DEFAULT: "#131921",
          },
          marketplace: {
            primary: "#F86749",
            secondary: "#D16644",
            third: "#E5A88B",
            fourth: "#EEDAC2"
          }
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require("@tailwindcss/line-clamp")],
  };
  