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
	/* images: {
		domains: ["morent-vert.vercel.app"],
	}, */
	/* headers: async () => {
		return [
			{
				source: "/api/(.*)",
				headers: [
					{
						key: "Access-Control-Allow-Origin",
						value: "https://morent-vert.vercel.app",
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
	}, */

	//avoiding CORS error, more here: https://vercel.com/support/articles/how-to-enable-cors
	async headers() {
		return [
			{
				// matching all API routes
				source: "/api/:path*",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "true" },
					{ key: "Access-Control-Allow-Origin", value: "*" },
					{
						key: "Access-Control-Allow-Methods",
						value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
					},
					{
						key: "Access-Control-Allow-Headers",
						value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
