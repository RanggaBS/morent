/** @type {import('next').NextConfig} */
const nextConfig = {
	/* modularizeImports: {
		"iconsax-react": {
			transform: ""
		}
	} */
	/* async redirects() {
		return [
			{
				// redirect user jika pergi ke "/api"
				source: "/api",
				destination: "/",
				permanent: true,
			},
		];
	}, */
	images: {
		domains: ["morent-vert.vercell.app"],
	},
	headers: async () => {
		return [
			{
				source: "/api/(.*)",
				headers: [
					{
						key: "Access-Control-Allow-Origin",
						value: "*",
					},
					{
						key: "Access-Control-Allow-Methods",
						value: "GET, POST, PUT, DELETE, OPTIONS",
					},
					{
						key: "Access-Control-Allow-Headers",
						value: "Content-Type, Authorization",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
