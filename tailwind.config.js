const plugin = require("tailwindcss/plugin");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      height: {
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
      },
      width: {
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
      },
      colors: {
        stemplicityBlue: "#4cbbd2",
        stemplicityOrange: "#FFA500",
        stemplicityGreen: "#85E712",
        stemplicityRed: "#FF6060",
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "7rem",
      "10xl": "8rem",
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".brightness-50": {
          filter: "brightness(50%)",
        },
      };

      addUtilities(newUtilities, ["active", "focus", "hover"]);
    }),
  ],
};