import DATA from "@/data.json";
import { getCarsByCategory, getCarsByName, shuffleArray } from "@/utils";

interface CarSearchParams {
	category?: "all" | "popular" | "recommendation" | undefined;

	id?: string | undefined;
	name?: string | undefined;
	type?:
		| "sport"
		| "suv"
		| "mpv"
		| "sedan"
		| "coupe"
		| "hatchback"
		| undefined;
	gasoline?: `${number}-${number}` | undefined;
	steering?: "manual" | "auto" | undefined;
	capacity?: 2 | 4 | 6 | 8 | undefined;
	price?: `${number}-${number}` | undefined;
}

// /cars?name=...&search=...&type=...&capacity=...&price=...
export const GET = async (request: Request) => {
	// console.log("request adalah = ", request);

	const { searchParams } = new URL(request.url);
	const category = searchParams.get("category");
	const name = searchParams.get("name");

	let data: object | any[] | string = "Tidak ada apa-apa di sini..";

	if (
		category &&
		(category === "all" ||
			category === "popular" ||
			category === "recommendation")
	) {
		// console.log("\nAda yang ngehit API!\n\n", request);
		data = shuffleArray(getCarsByCategory(category));
	} else if (name) {
		data = getCarsByName(name);
	}

	return new Response(JSON.stringify(data), {
		status: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		},
	});

	/*
		# Catatan
		new Response(data: string, options: object)
		param 1 adalah data
		param 2 adalah options
	*/

	// return new Response(/* JSON.stringify(data) */ "Ngapain ke sini?", {
	// 	status: 200,
	// 	headers: {
	// 		"Access-Control-Allow-Origin": "*",
	// 		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
	// 		"Access-Control-Allow-Headers": "Content-Type, Authorization",
	// 	},
	// });
};
