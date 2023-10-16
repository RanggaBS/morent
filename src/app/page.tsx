import HeroCards from "@/app/HeroCards";
import Link from "next/link";
import data from "@/data.json";
import { CardPropsWithoutDirection } from "@/components/client/Card";
import SwiperCardList from "@/components/client/SwiperCardList";
import { getCarById, shuffleArray } from "@/utils";
import { PickUpDropOffGroup } from "@/components/PickUpDropOff";
import CardList from "@/components/client/CardList";
import Navbar from "@/components/Navbar";

// Hero section
const Hero = () => {
	return (
		<section id="hero">
			{/* Cards */}
			<HeroCards />

			{/* Pick-Up & Drop-Off */}
			<PickUpDropOffGroup />
		</section>
	);
};

const PopularCar = () => {
	const cars: CardPropsWithoutDirection[] = [];
	data.category.popular.forEach(id => {
		cars.push(getCarById(id) as CardPropsWithoutDirection);
	});

	const shuffledCarList = shuffleArray(cars) as CardPropsWithoutDirection[];

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

				<SwiperCardList data={shuffledCarList} />
			</div>
		</section>
	);
};

// Homepage
const Page = () => {
	const cars: CardPropsWithoutDirection[] = [];
	data.category.recommendation.forEach(id => {
		cars.push(getCarById(id) as CardPropsWithoutDirection);
	});

	const shuffledCarList = shuffleArray(cars) as CardPropsWithoutDirection[];

	return (
		<>
			<Navbar showHamburgerMenu={false} />

			<main>
				<div className="mx-auto max-w-app-max-content-margin">
					<Hero />

					<PopularCar />

					<section>
						<h2
							id="recomendation"
							className="pb-4 text-sm font-semibold mx-mobile md:mx-tablet"
						>
							Recomendation Car
						</h2>

						<CardList
							data={
								shuffleArray(
									shuffledCarList
								) as CardPropsWithoutDirection[]
							}
							showMore={true}
						/>
					</section>
				</div>
			</main>
		</>
	);
};

export default Page;
