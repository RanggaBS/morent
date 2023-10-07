import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import HeroCards from "@/components/HeroCards";
import Link from "next/link";
import data from "@/data.json";
import { CardPropsWithoutDirection } from "@/components/Card";
import CarList from "@/components/CarList";
import { shuffleArray } from "@/utils";
// import useDeviceType from "@/hooks/useDeviceType";
import RecomendationCar from "./RecomendationCar";
import Footer from "@/components/Footer";
import { ArrangeVertical, ArrowDown2 } from "iconsax-react";
import PickUpDropOff from "@/components/PickUpDropOff";

// Hero section
const Hero = () => {
	return (
		<section id="hero">
			{/* Cards */}
			<HeroCards />

			{/* Pick-Up & Drop-Off */}
			<div className="flex flex-col pb-8 mx-mobile md:mx-tablet md:flex-row md:gap-4 md:justify-between md:items-center">
				<PickUpDropOff name="Pick - Up" />

				{/* Switch button */}
				<Button
					intent="primary"
					className="shadow-2xl shadow-primary w-[60px] h-[60px] !rounded-[10px] mx-auto -my-4 z-10 md:m-0"
				>
					<ArrangeVertical className="mx-auto" />
				</Button>

				<PickUpDropOff name="Drop - Off" />
			</div>
		</section>
	);
};

const PopularCar = () => {
	const shuffledData = shuffleArray(
		data.category.popular
	) as CardPropsWithoutDirection[];

	return (
		<section>
			<div className="pb-8 ml-mobile md:mx-tablet">
				<div className="flex items-center justify-between pb-4 mr-6 text-sm">
					<h2 className="text-sm font-semibold">Popular Car</h2>

					<Link
						href="/cars"
						className="text-xs font-semibold text-primary"
					>
						View All
					</Link>
				</div>

				<CarList data={shuffledData} />
			</div>
		</section>
	);
};

// Homepage
export const HomePage = () => {
	return (
		<main>
			<div className="mx-auto max-w-app-max-content-margin">
				<Hero />

				<PopularCar />

				<RecomendationCar
					data={
						shuffleArray(
							data.category.recomendation
						) as CardPropsWithoutDirection[]
					}
				/>
			</div>
		</main>
	);
};

export default HomePage;
