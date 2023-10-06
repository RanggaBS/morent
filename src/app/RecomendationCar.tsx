"use client";

import Card, { CardPropsWithoutDirection } from "@/components/Card";
import Button from "@/components/ui/Button";
import useDeviceType from "@/hooks/useDeviceType";
import useViewportSize from "@/hooks/useViewportSize";

const RecomendationCar = ({ data }: { data: CardPropsWithoutDirection[] }) => {
	const deviceType = useDeviceType();
	const size = useViewportSize();

	const MAX_CARDS_MOBILE = 5;
	const MAX_CARDS_TABLET = 6;
	const MAX_CARDS_DESKTOP = 8;
	if (deviceType === "mobile" && data.length > MAX_CARDS_MOBILE) {
		data = data.slice(0, MAX_CARDS_MOBILE);
	} else if (deviceType === "tablet" && data.length > MAX_CARDS_TABLET) {
		data = data.slice(0, MAX_CARDS_TABLET);
	} else {
		data = data.slice(0, MAX_CARDS_DESKTOP);
	}

	return (
		<section>
			<div className="mx-mobile md:mx-tablet">
				<h2 id="recomendation" className="pb-4 text-sm font-semibold">
					Recomendation Car
				</h2>

				<ul className="flex flex-col gap-5 md:grid md:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] md:gap-8">
					{data.map((car, index) => {
						// console.log("car = ", car);
						return (
							<li key={index}>
								<Card
									direction={
										size.width >= 768 ? "column" : "row"
									}
									{...car}
								/>
							</li>
						);
					})}
				</ul>

				{/* "Show More Car" button & cars count */}
				<div className="grid grid-cols-3 py-10 place-items-center">
					<Button
						intent="primary"
						size="md"
						className="col-start-2 justify-self-center w-max"
					>
						Show More Car
					</Button>

					<p className="text-sm justify-self-end">
						<span>120</span> Cars
					</p>
				</div>
			</div>
		</section>
	);
};

export default RecomendationCar;
