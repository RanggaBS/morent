import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200)
		// https://github.com/vercel/next.js/discussions/47933
		.appendHeader("Access-Control-Allow-Origin", "*")
		.appendHeader(
			"Access-Control-Allow-Methods",
			"GET, POST, PUT, DELETE, OPTIONS"
		)
		.appendHeader(
			"Access-Control-Allow-Headers",
			"Content-Type, Authorization"
		)
		.json({ text: "Hello ROUTE!" });
};

export default handler;
