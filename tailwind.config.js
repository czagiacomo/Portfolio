/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        charissil: ["Charis SIL", "serif"],
        saira: ["Saira", "serif"],
        viga: ["Viga", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        autumn: {
          ...require("daisyui/src/theming/themes")["autumn"],
          "--rounded-btn": "1.9rem",
          ".bg-drop-down": {
            "background-color": "#e6e5e5",
          },
          ".about-me-text-color": {
            color: "#334155",
          },
          ".mask-paint-custom": {
            "mask-image": 'url("https://i.imgur.com/kVXTurz.png")',
            "mask-mode": "alpha",
          },
        },
        forest: {
          ...require("daisyui/src/theming/themes")["forest"],
          ".bg-drop-down": {
            "background-color": "#110D0D",
          },
          ".about-me-text-color": {
            color: "#475569",
          },
          ".mask-paint-custom": {
            "mask-image": 'url("https://i.imgur.com/kVXTurz.png")',
            "mask-mode": "alpha",
          },
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
