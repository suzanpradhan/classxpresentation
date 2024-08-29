import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grayDark: '#1F1F1F',
        grayPrimary: '#131212'
      },
      height: {
        'vh-20': 'calc(100vh - 20%)',
      },
      fontFamily: {
        iosevka: ['var(--font-iosevka)'],
        satoshi: ['var(--font-satoshi)'],
      }
    },
  },
  plugins: [],
};
export default config;
