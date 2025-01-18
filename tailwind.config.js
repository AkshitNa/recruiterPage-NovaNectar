/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Specify the paths to all template files
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'], // Space Grotesk font
        opensans: ['"Open Sans"', 'sans-serif'],    // Open Sans font
        PlexSerif: ['"IBM Plex Serif"', 'serif'], // Set as default serif
      },
      colors: {
        'custom-blue': '#213555',
        'btn-purple' : '#605BDA',
        'img-blue':'#F0F0F8',
        'blue-text': '#4573D9',
        'gray-text' : '#646D7F',
      },
    },
  },
  plugins: [],
};
