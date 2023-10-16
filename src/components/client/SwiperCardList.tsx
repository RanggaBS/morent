"use client";

import Card, { CardPropsWithoutDirection } from "@/components/client/Card";
import { Swiper, SwiperSlide } from "swiper/react";

// type TCarDetails = CardProps["details"];

const SwiperCarList = ({ data }: { data: CardPropsWithoutDirection[] }) => {
	return (
		<Swiper
			wrapperTag="ul"
			slidesPerView={"auto"}
			spaceBetween={24}
			className="flex gap-4"
		>
			{data.map((car: CardPropsWithoutDirection, index: number) => {
				return (
					<SwiperSlide
						key={index}
						tag="li"
						className="!w-max !h-auto"
					>
						<Card key={index} direction="column" {...car} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default SwiperCarList;
