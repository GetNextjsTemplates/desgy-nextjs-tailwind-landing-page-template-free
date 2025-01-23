import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-xl': '75rem',
        'screen-2xl': '83.75rem'
      },
      boxShadow: {
        'cause-shadow': '0px 4px 17px 0px #00000008',
        'linckedin': "0px 19px 30px 0px #00000033",
        'manage-shadow': "0px 4px 5px 1px #c1c1c159",
        'testimonial': "0px 5px 10px 0px #5968760D"
      },
      transitionDuration: {
        '150': '150ms',
      },
      spacing: {
        '6.25': '6.25rem',
        '70%': '70%',
        '40%': '40%',
        '30%': '30%',
        '80%': '80%',
        8.5: '8.5rem',
        50: '50rem',
        51: "54.375rem",
        25: '35.625rem',
        29: '28rem',
        120: '120rem',
        45: '45rem',
        94: '22.5rem',
        85: '21rem',
        3.75: '3.75rem'
      },
      inset: {
        '5%': '5%',
        '35%': '35%'
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '999': '999'
      },
      colors: {
        primary: "#0066FF",
        purple: "#1E013A",
        grey: "#F4F5F6",
        border: "#DBDBDB",
        darkmode: "#00224a",
        deepSlate: "#02398A",
      },
      fontSize: {
        80: [
          "5rem",
          {
            lineHeight: "1.4",
          }
        ],
      },
      blur: {
        220: '220px',
        400: '400px',
      },
      backgroundImage: {
        faqBg: "url('/images/faq/swirl.png')",
      }
    },
  },
  plugins: [],
};
export default config;
