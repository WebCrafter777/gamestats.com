import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        'roboto':'var(--font-roboto)',
        'inter':'var(--font-inter)'
      },
      colors:{
        'page-background_light':"#F1F3F6",
        'primary':'#837E63',
        "primary_second":"#7F856C",
        'secondary':'#405442',
        'brown':"#4E3F25",

        "text_primary":"#F9F8F6",
        "text_gray":"#626262",
        "yellow_loud":"#DBF538",

        "gray":"#434343",
        "gray2":"#262D34",
        "gray-40":"#43434366",
        "gray-30":"#43434349",

        "light_primary":"#FED431"
      },
      screens:{
        'lg':'1440px',
        'md':'1024px',
        'sm':"768px",
        'sb':'600px',
        "xs":'420px',
      },     
      margin:{
        'components_distance':'24px 0 0 0'
      }                 
    },
  },
  plugins: [],
  darkMode:'class'
};
export default config;
