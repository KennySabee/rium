import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { olive: "#565902", brown: "#594118", cream: "#F1EFDE", sand: "#C9B8AB", line: "#D0D0D0", moss: "#B0BB81", mute: "#6B6E6F" },
    fontFamily: { sans: ["var(--font-montserrat)", "Calibri", "system-ui", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
