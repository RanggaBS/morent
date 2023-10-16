// localhost:3000/api

import { redirect } from "next/navigation";

// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
export async function GET(request: Request) {
	// WORKS
	/* return new Response("Hello Mom!", {
		status: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		},
	}); */
	/* const path =
		process.env.NODE_ENV === "production"
			? process.env.NEXT_PUBLIC_DOMAIN_NAME
			: process.env.DOMAIN_NAME;
	redirect(path as string); */

	// Redirect ke homepage jika pengguna secara iseng pergi ke "/api" secara manual di address bar
	redirect("/");
}
