/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'border-green': '#5ae718'
			},
			backgroundImage:{
				'water-fall': "url('/trending-pics/10.png')",
				'crimson':"url('/trending-pics/crimson.jpg')",
			}
		},	
	},
	plugins: [],
}
