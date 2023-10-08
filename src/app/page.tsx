import HeroCards from "@/app/HeroCards";
import Link from "next/link";
import data from "@/data.json";
import { CardPropsWithoutDirection } from "@/components/Card";
import SwiperCardList from "@/components/client/SwiperCardList";
import { shuffleArray } from "@/utils";
import { PickUpDropOffGroup } from "@/components/PickUpDropOff";
import CardList from "../components/client/CardList";

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

				<SwiperCardList data={shuffledData} />
			</div>
		</section>
	);
};

// Homepage
const HomePage = () => {
	return (
		<main>
			<div className="mx-auto max-w-app-max-content-margin">
				<Hero />

				<PopularCar />

				<div>
					<h2
						id="recomendation"
						className="pb-4 text-sm font-semibold"
					>
						Recomendation Car
					</h2>

					<CardList
						data={
							shuffleArray(
								data.category.recommendation
							) as CardPropsWithoutDirection[]
						}
						showMore={true}
					/>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
