/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "840px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      Iran_Bold: "Iran_Bold",
      Iran_Light: "Iran_Light",
    },
    fontSize: {
      clamp: "clamp(0.7rem, 1vw, 1rem)",
      clamp_intro: "clamp(2rem, 3vw, 2.5rem)",
      clamp_des: "clamp(1.5rem, 2vw, 2.2rem)",
      clamp_super_des: "clamp(0.9rem, 1vw, 2rem)",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000",
      bg_orange: "#f9a61a",
      text_orange: "#ff5100",
      blue_color: "#2a3499",
      bg_btn: "#fff6e8",
      text_muted: "#cccccc",
      red_text_color: "#f14639",
      first_bg_icon_color: "#f3efec",
      sec_bg_icon_color: "#e1f3f4",
      th_bg_icon_color: "#ffebe0",
      fourth_bg_icon_color: "#f9e7e6",
      fifth_bg_icon_color: "#edf6f7",
      blue_text_color: "#007684",
      brown_text_color: "#714f00",
      purple_text_color: "#982477",
      pink_text_color: "#ff3581",
      bg_gray_box: "#f2f3fb",
    },
  },

  plugins: [require("tailwindcss"), require("autoprefixer")],
};
