/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					blue: "#543AE8",
					lime: "#3AE8AB",
					red: "EE3C76",
					yellow: "#FFD12D",
					gray: "#B4C0D0",
					purple: "#B3A8C9",
					black: "#232323",
					bgColor: "#F3F5F8",
				},
			},
		},
	},
	plugins: [],
};
