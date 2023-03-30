/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 20px 24px 4px rgba(0, 0, 0, 0.3)'
      },
    },
    fontFamily: {
      prism: ['Tilt Prism'],
      comf: ['Comfortaa'],
      bs: ['berkshire swash', 'cursive'],
      mo: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
      jos: ['Josefin Sans'],
      aso: ['Alfa Slab One'],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
