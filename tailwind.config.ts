import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			margin: {
				mobile: "1.5rem",
				tablet: "2rem",
			},
			maxWidth: {
				"app-max-content": "1312px",
				"app-max-content-margin":
					"1344px" /* 1312 + max margin (2rem) */,
			},
			backgroundImage: {
				"circular-pattern":
					"url('../../src/assets/images/pattern-circular-md.png')",
				"chevron-right-pattern":
					"url('../../src/assets/images/pattern-chevron-right-md.png')",
			},
			colors: {
				"app-bg": {
					DEFAULT: "#F6F7F9",
				},
				/* Default = 500 */
				primary: {
					DEFAULT: "#3563e9",
					"100": "#d6e4fd",
					"200": "#aec8fc",
					"300": "#85a8f8",
					"400": "#658df1",
					"500": "#3563e9",
					"600": "#264bc8",
					"700": "#1a37a7",
					"800": "#102587",
					"900": "#0a196f",
				},
				success: {
					DEFAULT: "#9cd323",
					"100": "#f5fcd2",
					"200": "#E8FAA6",
					"300": "#D3F178",
					"400": "#BCE455",
					"500": "#9CD323",
					"600": "#7FB519",
					"700": "#659711",
					"800": "#4C7A0B",
					"900": "#3B6506",
				},
				error: {
					DEFAULT: "#FF4423",
					"100": "#FFE7D3",
					"200": "#FFC8A6",
					"300": "#FFA37A",
					"400": "#FF7F59",
					"500": "#FF4423",
					"600": "#DB2719",
					"700": "#B71112",
					"800": "#930816",
					"900": "#7A0619",
				},
				warning: {
					DEFAULT: "#FFC73A",
					"100": "#FFF8D7",
					"200": "#FFEFB0",
					"300": "#FFE488",
					"400": "#FFD96B",
					"500": "#FFC73A",
					"600": "#DBA32A",
					"700": "#B7821D",
					"800": "#936312",
					"900": "#7A4D0B",
				},
				information: {
					DEFAULT: "#54a6ff",
					"100": "#dcf3ff",
					"200": "#bae5ff",
					"300": "#98d3ff",
					"400": "#7ec2ff",
					"500": "#54a6ff",
					"600": "#3d81db",
					"700": "#2a60b7",
					"800": "#1a4393",
					"900": "#102e7a",
				},
				secondary: {
					DEFAULT: "#1a202c",
					"100": "#e0e9f4",
					"200": "#c3d4e9",
					"300": "#90a3bf",
					"400": "#596780",
					"500": "#1a202c",
					"600": "#131825",
					"700": "#0d121f",
					"800": "#080c19",
					"900": "#040815",
				},
			},
		},
	},
	plugins: [],
};
export default config;
