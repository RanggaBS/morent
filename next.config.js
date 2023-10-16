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
};

module.exports = nextConfig;
