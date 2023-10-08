// belum selesai

import data from "@/data.json";

// /cars?search=...&type=...&capacity=...&price=...
interface CarSearchParams {
	search?: string | undefined;
	type?:
		| "sport"
		| "suv"
		| "mpv"
		| "sedan"
		| "coupe"
		| "hatchback"
		| undefined;
	capacity?: 2 | 4 | 6 | 8 | undefined;
	price?: number | undefined;
}

export async function GET(request: Request) {
	/*
		# Catatan
		new Response(data: string, options: object)
		param 1 adalah data
		param 2 adalah options
	*/

	const { searchParams } = new URL(request.url);

	return new Response(/* JSON.stringify(data) */ "Ngapain ke sini?", {
		status: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		},
	});
}
