module.exports = {
  plugins: {
    tailwindcss: {
      content: [
        "./src/**/*.{vue,js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [
        require('./tailwind.config.cjs'),
      ],
    },
    autoprefixer: {},
  },
}
