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
            DEFAULT: "#F86749",
            darky:"#D16644",
            light: "#E5A88B",
          }
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require("@tailwindcss/line-clamp")],
  };
  