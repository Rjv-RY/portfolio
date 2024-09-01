/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      animation: {
        glow: "glow 2s infinite ease-in-out",
      },
      keyframes: {
        shine: {
          "0%": {
            backgroundPosition: "0% 51%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 51%",
          },
        },

        glow: {
          "0%, 100%": {
            textShadow:
              "0 0 5px rgba(127, 28, 136), 0 0 10px rgba(127, 28, 136), 0 0 15px rgba(127, 28, 136)",
          },
          "50%": {
            textShadow:
              "0 0 10px rgba(127, 28, 136), 0 0 20px rgba(127, 28, 136), 0 0 30px rgba(127, 28, 136)",
          },
        },
      },
      backgroundImage: {
        retro1:
          "linear-gradient( #2989cc 0%, #d3e5ec 50%, #592451 51%, #b3628d 55%, #592451 59%, #b3628d 65%, #ac86a6 75%, #b3628d 100%);",
        hypno:
          "repeating-radial-gradient(circle at 50% 50%, rgba(75, 75, 255,0.5) 10px, rgba(0, 0, 0,0.5) 20px)",
        bgTopGrad:
          "linear-gradient(to bottom, black, #4b0082 50%, #4b0082 80%, black)",
        griddy:
          "repeating-linear-gradient(90deg,var(--grid-color, black) 0%,transparent calc(1px + var(--grid-blur, 0px)),transparent var(--grid-size),var(--grid-color, black)calc(var(--grid-size) + 1px + var(--grid-blur, 0px))),repeating-linear-gradient(180deg,var(--grid-color, black) 0%,transparent calc(1px + var(--grid-blur, 0px)),transparent var(--grid-size),var(--grid-color, black)calc(var(--grid-size) + 1px + var(--grid-blur, 0px)));",
      },
      fontFamily: {
        retrolight: ["Retrolight", "sans-serif"],
      },
      colors: {
        "otr-cyan": "#2de2e6",
        "vprw-prpl-1": "#B768FC",
        "vprw-ylw": "#FFFB8D",
        depprpl: "#4b0082",
      },
      rotate: {
        360: "360deg",
      },
    },
    transitionProperty: {
      "text-shadow": "text-shadow",
    },
    plugins: [],
  },
};
