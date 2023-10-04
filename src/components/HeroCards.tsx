"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button from "@/components/ui/Button";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Cards
type HeroCardProps = {
	title: string;
	desc: string;
	colorVariant: "primary" | "information";
	bgPattern: "circular" | "chevron-right";
};

const HeroCard = ({ title, desc, colorVariant }: HeroCardProps) => {
	const bg =
		colorVariant === "information"
			? "bg-circular-pattern bg-no-repeat bg-[length:auto_100%] bg-[top_left]"
			: "bg-chevron-right-pattern bg-repeat";
	return (
		<div className={`h-full p-4 rounded-lg ${bg} !bg-${colorVariant}`}>
			<h3 className="pb-3 font-semibold">{title}</h3>

			<p className="pb-3 text-xs w-[80%]">{desc}</p>

			<Button
				/* intent={
					colorVariant === "information" ? "primary" : "secondary"
				} */
				size="lg"
				className={`mb-6 ${
					colorVariant === "information"
						? "!bg-primary"
						: "!bg-information"
				}`}
			>
				Rental Car
			</Button>

			<div className="h-full">
				<Image
					src={
						"/images/cars/car-hero-" +
						(colorVariant === "information" ? "1" : "2") +
						".png"
					}
					alt="A car"
					width={999}
					height={999}
					className="w-auto pr-5 mx-auto -mb-3 h-14"
				/>
			</div>
		</div>
	);
};

const HeroCards = () => {
	const heroCards: HeroCardProps[] = [
		{
			title: "The Best Platform for Car Rental",
			desc: "Ease of doing a car rental safely and reliably. Of course at a low price.",
			colorVariant: "information",
			bgPattern: "circular",
		},
		{
			title: "Easy way to rent a car at a lower price",
			desc: "Providing cheap car rental services and safe and comfortable facilities.",
			colorVariant: "primary",
			bgPattern: "chevron-right",
		},
	];

	return (
		<Swiper
			wrapperTag="ul"
			modules={[Autoplay]}
			// autoplay={{ delay: 3000, disableOnInteraction: false }}
			spaceBetween={24}
			speed={1000}
			className="font-medium text-white !mx-6 relative mb-6"
		>
			{/* <div className="absolute -mx-6 bg-lime-500 h-1/2"></div> */}

			{heroCards.map((card, index) => {
				return (
					<SwiperSlide key={index} tag="li" className="!h-auto">
						<HeroCard
							/* title={card.title}
								desc={card.desc}
								colorVariant={card.colorVariant} */
							{...card}
						/>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default HeroCards;
