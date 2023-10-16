import data from "@/data.json";

export const insertValueBetween = (array: Array<any>, value: any) => {
	if (array.length % 2 !== 1)
		throw new Error("Error: Array length must be odd.");

	const newArray = [];

	for (let i = 0; i < array.length; i++) {
		// newArray.push(i === Math.floor(array.length / 2) ? value : array[i]);
		if (i === Math.floor(array.length / 2)) {
			newArray.push(value);
		}
		newArray.push(array[i]);
	}

	return newArray;
};

export const formatCurrency = (price: number | string): string => {
	const amount: number =
		typeof price === "string" ? parseFloat(price) : price;

	if (isNaN(amount)) throw new Error("Input tidak valid!");

	const formattedAmount: string = amount.toFixed(2);

	return formattedAmount;
};

export const shuffleArray = <T>(array: T[]): T[] => {
	const shuffledArray = [...array];

	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledArray[i], shuffledArray[j]] = [
			shuffledArray[j],
			shuffledArray[i],
		];
	}

	return shuffledArray;
};

/* 
	Car
*/
export interface ICar {
	id: string;
	name: string;
	type: "Sport" | "Sedan" | "SUV" | "Hatchback";
	img: string;
	details: {
		gasoline: number;
		steering: "Manual" | "Auto";
		capacity: number;
	};
	price: number;
	discountPrice: number | null | undefined;
	description: string;
}

export const getCarById = (id: ICar["id"]): ICar | undefined => {
	for (let i = 0; i < data.cars.length; i++) {
		if (data.cars[i].id === id) return data.cars[i] as ICar;
	}
	return undefined;
};

export const getCarsByName = (name: string): ICar[] => {
	return data.cars.filter(car =>
		car.name.trim().toLowerCase().includes(name.toLowerCase())
	) as ICar[];
};

export const getCarsByCategory = (
	category: "all" | "popular" | "recommendation"
): ICar[] => {
	if (category === "all") data.cars as ICar[];

	return data.cars.filter(car =>
		data.category[category].includes(car.id)
	) as ICar[];
};

// etc
const IS_SERVER = typeof window === "undefined";
export const getURL = (path: string) => {
	const baseURL = IS_SERVER
		? process.env.NEXT_PUBLIC_SITE_URL
		: window.location.origin;
	return new URL(path, baseURL).toString();
};

export type TStringValuesObject = Record<string, string>;

export const objToQueryParam = (obj: TStringValuesObject): string =>
	Object.entries(obj)
		.map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
		.join("&");

// misc
export const randomRange = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;
