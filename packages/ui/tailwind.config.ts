/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("./tailwind-preset.ts")],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /bg-[a-z0-9-]*/,
    },
  ],
  // Customizations specific to this project would go here
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ["selector", '[data-theme="dark"]'],
};
