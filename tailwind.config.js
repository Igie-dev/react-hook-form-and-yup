/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    screens:{
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    },
    
  extend: {
    colors:{
      primaryLight: "#FFFFFF",
      primaryDark: "#040303",
      secondaryDark: "#1e1e1ee3",
      btns: "#365FD3",
      textW:"#F8F9FA",
      textB: "#212529",
      textBlur: "rgba(176, 179, 182, 0.767)",
     
    },
    
    fontFamily: {
      sans: ['Poppins', "sans-serif"]
    },

    fontSize: {
      xxs: "12px",
      sm: ["clamp(1.00rem , calc(0.92rem + 0.39vw), 1.20rem)", "1.4"],
      base: ["clamp(1.13rem, calc(0.98rem + 0.73vw) , 1.50rem)", "1.5"],
      lg: ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.4"],
      xl: ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
      "2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)", "1.2"],
      "3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw),3.66rem)","1.1"],
      "4xl":["clamp(2.03rem, calc(1.03rem + 4.98vw),4.58rem)","1"],
      "5xl":["clamp(2.28rem, calc(0.94rem + 6.71vw),5.72rem)","1"],
    }

  }

  },
  plugins: [],
}
