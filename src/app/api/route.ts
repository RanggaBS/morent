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
	redirect("http://localhost:3000");
}
