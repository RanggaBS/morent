"use client";

import Card, { CardPropsWithoutDirection } from "@/components/client/Card";
import Button from "@/components/ui/Button";
import useDeviceType from "@/hooks/useDeviceType";
import useViewportSize from "@/hooks/useViewportSize";

interface CardListProps {
	data: CardPropsWithoutDirection[];
	showMore?: boolean | undefined;
	max?:
		| {
				mobile: number;
				tablet: number;
				desktop: number;
		  }
		| undefined;
}

const CardList = ({
	data,
	showMore = false,
	max = {} as CardListProps["max"],
}: CardListProps) => {
	const deviceType = useDeviceType();
	const size = useViewportSize();

	max = {
		mobile: max!.mobile || 5,
		tablet: max!.tablet || 6,
		desktop: max!.desktop || 8,
	};

	if (deviceType === "mobile" && data.length > max.mobile) {
		data = data.slice(0, max.mobile);
	} else if (deviceType === "tablet" && data.length > max.tablet) {
		data = data.slice(0, max.tablet);
	} else {
		data = data.slice(0, max.desktop);
	}

	return (
		<section>
			<div className="mx-mobile md:mx-tablet">
				<ul className="flex flex-col gap-5 md:grid md:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] md:gap-8">
					{data.map((car, index) => {
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
				{showMore ? (
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
				) : null}
			</div>
		</section>
	);
};

export default CardList;
