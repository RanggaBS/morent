"use client";

import Card, { CardProps } from "@/components/Card";
import { Swiper, SwiperSlide } from "swiper/react";

// const CardPropsWithoutDirection: Omit<CardProps, "direction"> = {};

type CardPropsWithoutDirection = {
	[K in keyof CardProps as Exclude<K, "direction">]: CardProps[K];
};

// type TCarDetails = CardProps["details"];

const CarList = ({ data }: { data: CardPropsWithoutDirection[] }) => {
	return (
		<Swiper
			wrapperTag="ul"
			slidesPerView={"auto"}
			spaceBetween={24}
			className="flex gap-4"
		>
			{data.map((car: CardPropsWithoutDirection, index: number) => {
				return (
					<SwiperSlide key={index} tag="li" className="!w-max">
						<Card key={index} direction="column" {...car} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default CarList;
