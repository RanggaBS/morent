"use client";

import Card, { type CardPropsWithoutDirection } from "@/components/client/Card";
import { PickUpDropOffGroup } from "@/components/PickUpDropOff";
import Sidebar, {
	SidebarCheckboxItem,
	SidebarInputRangeItem,
	SidebarSection,
} from "@/components/Sidebar";
import CardList from "@/components/client/CardList";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { getURL, ICar, objToQueryParam } from "@/utils";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const fetchCars = async (encodedQueryParam: string) => {
	const apiEndpoint = getURL(`/api/cars?${encodedQueryParam}`);
	let responseObj: { ok: boolean; data: any } = { ok: false, data: null };
	try {
		const response = await fetch(apiEndpoint);
		if (response.ok) {
			const data = (await response.json()) as ICar[];
			responseObj.ok = true;
			responseObj.data = data;
			return responseObj;
		} else {
			/* return (
				<p className="text-2xl text-error-500">{response.statusText}</p>
			); */
			console.error(response.statusText);
			return responseObj;
		}
	} catch (error) {
		console.error(error);
	}
};

/*
// eslint-disable-next-line @next/next/no-async-client-component
*/
const Page = () => {
	const params = useSearchParams();
	const [cars, setCars] = useState<ICar[]>([]);

	const sections /* : Array<{
		type: "checkboxes" | "input-range";
		title: string;
		data:
			| {
					items?:
						| Array<{
								name: string;
								count: number | `${number}`;
						  }>;
			  }
			| {
					min: number | `${number}`;
					max: number | `${number}`;
			  };
	}>  */ = [
		{
			type: "checkboxes",
			title: "Type",
			data: {
				items: [
					{ name: "Sport", count: 10 },
					{ name: "SUV", count: 12 },
					{ name: "MPV", count: 16 },
					{ name: "Sedan", count: 20 },
					{ name: "Coupe", count: 14 },
					{ name: "Hatchback", count: 14 },
				],
			},
		},
		{
			type: "checkboxes",
			title: "Capacity",
			data: {
				items: [
					{ name: "2 Person", count: 10 },
					{ name: "4 Person", count: 14 },
					{ name: "6 Person", count: 12 },
					{ name: "8 or More", count: 16 },
				],
			},
		},
		{
			type: "input-range",
			title: "Price",
			data: {
				min: "0",
				max: "150",
			},
		},
	];

	const searchedCar = params?.get("search");
	console.log("searchedCar = ", searchedCar);
	const isFromSearch = searchedCar ? true : false;

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetchCars(
				isFromSearch
					? objToQueryParam({
							name: searchedCar!,
					  })
					: objToQueryParam({
							category: "all",
					  })
			);
			if (response?.ok) {
				setCars(response.data);
			}
		};

		fetchData();
	}, [isFromSearch, searchedCar]);

	return (
		<SidebarProvider>
			<div className="flex">
				{/* Sidebar */}
				<Sidebar className="w-0 bg-white overflow-x-hidden p-6 md:block md:w-full max-w-[359px] border-r-[1px] border-secondary-200 border-opacity-40">
					{/* Type */}
					<SidebarSection title="Type">
						<ul className="flex flex-col gap-4">
							{sections.at(0)!.data.items!.map((item, index) => {
								return (
									<li key={index}>
										<SidebarCheckboxItem
											name={item.name}
											count={item.count}
										/>
									</li>
								);
							})}
						</ul>
					</SidebarSection>

					{/* Capacity */}
					<SidebarSection title="Capacity">
						<ul className="flex flex-col gap-4">
							{sections.at(1)!.data.items!.map((item, index) => {
								return (
									<li key={index}>
										<SidebarCheckboxItem
											name={item.name}
											count={item.count}
										/>
									</li>
								);
							})}
						</ul>
					</SidebarSection>

					{/* Price */}
					<SidebarSection title="Price">
						<SidebarInputRangeItem
							min={sections.at(2)?.data.min as `${number}`}
							max={sections.at(2)?.data.max as `${number}`}
						/>
					</SidebarSection>
				</Sidebar>

				<div className="mx-auto max-w-app-max-content-margin">
					{/* Main content */}
					<main>
						<div className="pt-6 md:pt-8">
							<>
								<PickUpDropOffGroup />

								{/* {carsFound.length <= 0 ? ( */}
								{!isFromSearch ? (
									<ul className="mx-mobile md:mx-tablet grid gap-5 md:gap-8 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
										{/* <p>NOT FROM SEARCH</p> */}

										{cars.map((car, index) => (
											<li key={car.id}>
												<Card
													direction="column"
													id={car.id}
													name={car.name}
													type={car.type}
													img={car.img}
													details={car.details}
													discountPrice={
														car.discountPrice
													}
													price={car.price}
												/>
											</li>
										))}
									</ul>
								) : (
									<>
										<h3 className="pb-4 mx-mobile md:mx-tablet">
											Search result for &quot;
											{searchedCar}&quot;
										</h3>

										<ul className="grid gap-5 md:gap-8 mx-mobile md:mx-tablet grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
											{/* <p>FROM SEARCH</p> */}

											{cars.map((car, index) => {
												return (
													<li key={car.id}>
														<Card
															direction="column"
															id={car.id}
															name={car.name}
															type={car.type}
															img={car.img}
															details={
																car.details
															}
															discountPrice={
																car.discountPrice
															}
															price={car.price}
														/>
													</li>
												);
											})}
										</ul>
									</>
								)}
							</>
						</div>
					</main>
				</div>
			</div>
		</SidebarProvider>
	);
};

export default Page;
