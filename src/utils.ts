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
