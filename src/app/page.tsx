import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import HeroCards from "@/components/HeroCards";
import { LuArrowUpDown, LuChevronDown } from "react-icons/lu";
import Link from "next/link";
import data from "@/data.json";
import Card, { CardProps } from "@/components/Card";
import CarList from "@/components/CarList";
import { shuffleArray } from "@/utils";

// Pick Up & Drop Off
const PickUpDropOff = ({ name }: { name: "Pick - Up" | "Drop - Off" }) => {
	let inputs = [
		{
			name: "Locations",
			dropdownPlaceholder: "Select your city",
			// options: ["City 1", "City 2", "City 3"],
		},
		{
			name: "Date",
			dropdownPlaceholder: "Select your date",
			// options: ["", "", ""],
		},
		{
			name: "Time",
			dropdownPlaceholder: "Select your time",
			// options: ["", "", ""],
		},
	];

	const Divider = () => <div className="w-[2px] bg-secondary-100 mx-4"></div>;

	const elementsWithDividers: React.ReactNode[] = [];
	inputs.forEach((input, index) => {
		elementsWithDividers.push(
			<div key={index}>
				<h4 className="font-bold text-secondary">{input.name}</h4>

				<div className="flex items-center text-xs">
					<p>{input.dropdownPlaceholder}</p>

					<LuChevronDown className="h-full" />
				</div>
			</div>
		);

		if (index < inputs.length - 1) {
			elementsWithDividers.push(<Divider key={index} />);
		}
	});

	return (
		<div className="p-4 bg-white rounded-lg">
			<div className="flex items-center pb-4">
				{/* Circle Icon Pulse */}
				<span className="relative flex w-2 h-2 mx-2">
					<span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-primary"></span>
					<span className="relative inline-flex w-2 h-2 rounded-full bg-primary"></span>
				</span>

				{/* Title */}
				<h3 className="font-semibold text-secondary">{name}</h3>
			</div>

			<div className="flex justify-between">{elementsWithDividers}</div>
		</div>
	);
};

// Hero section
export const Hero = () => {
	return (
		<section id="hero">
			{/* Cards */}
			<HeroCards />

			{/* Pick-Up & Drop-Off */}
			<div className="flex flex-col pb-8 mx-6">
				<PickUpDropOff name="Pick - Up" />

				<Button
					intent="primary"
					className="flex-grow-0 w-[60px] h-[60px] !rounded-[10px] mx-auto -my-4 z-10"
				>
					<LuArrowUpDown className="w-6 h-6 mx-auto" />
				</Button>

				<PickUpDropOff name="Drop - Off" />
			</div>
		</section>
	);
};

export const PopularCar = () => {
	return (
		<div className="pb-8 ml-6">
			<div className="flex items-center justify-between pb-4 mr-6 text-sm">
				<h2 className="text-sm font-semibold">Popular Car</h2>

				<Link
					href="/cars"
					className="text-xs font-semibold text-primary"
				>
					View All
				</Link>
			</div>

			<CarList data={shuffleArray(data.category.popular)} />
		</div>
	);
};

export const RecomendationCar = () => {
	return (
		<div className="mx-6">
			<h2 id="recomendation" className="pb-4 text-sm font-semibold">
				Recomendation Car
			</h2>

			<CarList data={shuffleArray(data.category.recomendation)} />
		</div>
	);
};

// Homepage
export default function Home() {
	return (
		<div className="overflow-x-hidden font-medium bg-app-bg text-secondary-300">
			<Navbar />
			<main>
				<Hero />

				<PopularCar />

				<RecomendationCar />
			</main>
		</div>
	);
}
