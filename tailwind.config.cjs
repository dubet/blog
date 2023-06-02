/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'sm': '320px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
		}
	},
	plugins: [],
}
