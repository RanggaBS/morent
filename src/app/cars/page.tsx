import { CardPropsWithoutDirection } from "@/components/Card";
import { PickUpDropOffGroup } from "@/components/PickUpDropOff";
import CardList from "@/components/client/CardList";
import data from "@/data.json";
import { shuffleArray } from "@/utils";

const CarsPage = () => {
	return (
		<main>
			<div className="mx-auto max-w-app-max-content-margin">
				<div className="pt-6 md:pt-8">
					<PickUpDropOffGroup />

					<CardList
						data={
							shuffleArray(
								data.category.all
							) as CardPropsWithoutDirection[]
						}
						showMore={true}
						max={{ mobile: 7, tablet: 8, desktop: 9 }}
					/>
				</div>
			</div>
		</main>
	);
};

export default CarsPage;
