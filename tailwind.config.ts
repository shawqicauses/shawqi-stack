// REVIEWED - 01
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import colors from "tailwindcss/colors";
import { parseColor } from "tailwindcss/lib/util/color";
import plugin from "tailwindcss/plugin";

export const toRGB = function toRGB(value: string) {
  return parseColor(value).color.join(" ");
};

export default {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--popover) / <alpha-value>)",
          foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    plugin(({ addBase }) => {
      addBase({
        ":root": {
          "--shc-background": toRGB(colors.white),
          "--shc-foreground": toRGB(colors.zinc["950"]),
          "--shc-card": toRGB(colors.white),
          "--shc-card-foreground": toRGB(colors.zinc["950"]),
          "--shc-popover": toRGB(colors.white),
          "--shc-popover-foreground": toRGB(colors.zinc["950"]),
          "--shc-primary": toRGB(colors.zinc["900"]),
          "--shc-primary-foreground": toRGB(colors.zinc["50"]),
          "--shc-secondary": toRGB(colors.zinc["100"]),
          "--shc-secondary-foreground": toRGB(colors.zinc["900"]),
          "--shc-muted": toRGB(colors.zinc["100"]),
          "--shc-muted-foreground": toRGB(colors.zinc["500"]),
          "--shc-accent": toRGB(colors.zinc["100"]),
          "--shc-accent-foreground": toRGB(colors.zinc["900"]),
          "--shc-destructive": toRGB(colors.red["500"]),
          "--shc-destructive-foreground": toRGB(colors.zinc["50"]),
          "--shc-border": toRGB(colors.zinc["200"]),
          "--shc-input": toRGB(colors.zinc["200"]),
          "--shc-ring": toRGB(colors.zinc["950"]),
        },

        ".dark": {
          "--shc-background": toRGB(colors.zinc["950"]),
          "--shc-foreground": toRGB(colors.zinc["50"]),
          "--shc-card": toRGB(colors.zinc["950"]),
          "--shc-card-foreground": toRGB(colors.zinc["50"]),
          "--shc-popover": toRGB(colors.zinc["950"]),
          "--shc-popover-foreground": toRGB(colors.zinc["50"]),
          "--shc-primary": toRGB(colors.zinc["50"]),
          "--shc-primary-foreground": toRGB(colors.zinc["900"]),
          "--shc-secondary": toRGB(colors.zinc["800"]),
          "--shc-secondary-foreground": toRGB(colors.zinc["50"]),
          "--shc-muted": toRGB(colors.zinc["800"]),
          "--shc-muted-foreground": toRGB(colors.zinc["400"]),
          "--shc-accent": toRGB(colors.zinc["800"]),
          "--shc-accent-foreground": toRGB(colors.zinc["50"]),
          "--shc-destructive": toRGB(colors.red["900"]),
          "--shc-destructive-foreground": toRGB(colors.zinc["50"]),
          "--shc-border": toRGB(colors.zinc["800"]),
          "--shc-input": toRGB(colors.zinc["800"]),
          "--shc-ring": toRGB(colors.zinc["300"]),
        },
      });
    }),
  ],
} satisfies Config;
