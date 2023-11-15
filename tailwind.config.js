/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-#AD1FEA": "#AD1FEA",
        "blue-#4661E6": "#4661E6",
        "sky-blue-#62BCFA": "#62BCFA",
        "navy-blue-#373F68": "#373F68",
        "light-navy-blue-#3A4374": "#3A4374",
        "gray-#F2F4FF": "#F2F4FF",
        "light-gray-#F7F8FD": "#F7F8FD",
        "dark-gray-#647196": "#647196",
        "orange-#F49F85": "#F49F85",
      },
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1440px"
      }
    },
  },
  plugins: [],
}