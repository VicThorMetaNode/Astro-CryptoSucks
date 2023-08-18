/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		screens: {
		  sm: '480px',
		  md: '768px',
		  lg: '1024px',
		  xl: '1280px',
		},
		fontSize: {
		  sm: '0.8rem',
		  md: '0.9rem',
		  base: '1rem',
		  lg: '1.15rem',
		  xl: '1.25rem',
		},
		colors: {
		  transparent: 'transparent',
		  main: {
			DEFAULT: '#454856',
			light: '#b8b6ab',
		  },
		  'primary': '#474954',
		  'sub': '#A9B3CE',
		  'sub-alt': '#7284A8',
		  'aqua': '#7CDEDC',
		  'aqua-alt': '#00ffff',
		  'aqua-light': '#ebfaf9',
		  'white': '#fefefd',
		  'white-alt': '#fefdfa',
		  'vamp':'#080808',
		  'vamp-alt':'#010203',
		  'charcoal':'#36454f',
		  'radical-red': '#ff355e',
		  'laser-lemon':'#ffff66',
		  'lavender': '#a6a7dc',
		  'lavender-alt': '#a199dd',

		  
		},
		fontFamily: {
		  main: ['Titillium Web ', 'sans-serif'],
		  tek: ['Teko', 'sans-serif'],
		  sun: ['Sunflower', 'sans-serif'],
		  right: ['Righteous', 'cursive'],
		  mont: ['Montserrat Subrayada', 'sans-serif'],
		  fat: ['Abril Fatface', 'cursive'],
		},
	  },
	 
	  
	},
	plugins: [require("daisyui")],
}