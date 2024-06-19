module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ["inter-400"]: "Inter-Regular",
        ["inter-500"]: "Inter-Medium",
        ["inter-600"]: "Inter-SemiBold",
        ["inter-700"]: "Inter-Bold",
      },
      colors: {
        primary: {
          50: '#ECF1F7',
          100: '#DDE2F0',
          200: '#CCD2EA',
          300: '#A3ADDA',
          400: '#7381E4',
          450: '#5160ED',
          500: '#2C4EF9',
          600: '#313CBF',
          700: '#262C87',
          800: '#1E215D',
          900: '#181533'
        },
        shade: {
          0: '#FFFFFF',
          25: '#FCFCFD',
          50: '#F8FAFC',
          100: '#EEF2F6',
          200: '#E3E8EF',
          300: '#CDD5DF',
          400: '#9AA4B2',
          500: '#697586',
          600: '#4B5565',
          700: '#364152',
          800: '#202939',
          900: '#121926',
          950: '#0D121C'
        },
      },
      zIndex: {
        0: 0,
        1: 1,
        2: 2,
      },
      fontSize: {
        small: ["12px", "14px"],
        "small-x": ["14px", "14px"],
        average: ["16px", "14px"],
        big: ["18px", "14px"],
      },
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      lt: "1440px",
    },
  },
  plugins: [],
};
