"use client";

import Image from "next/image";
import { useState } from "react";
import { formatCurrency } from "@/utils";
import Button from "./ui/Button";
import { GasStation, Heart, Profile2User } from "iconsax-react";
import SteeringWheel from "./ui/icons/SteeringWheel";

type CarDetailsItemType = "gasoline" | "steering" | "capacity";

export const CarDetailsItem = ({
	// direction,
	itemType,
	itemValue,
}: {
	// direction: CardProps["direction"];
	itemType: CarDetailsItemType;
	itemValue: number | string;
}) => {
	const Icon = () =>
		itemType === "gasoline" ? (
			<GasStation variant="Bold" />
		) : itemType === "steering" ? (
			<SteeringWheel />
		) : (
			<Profile2User variant="Bold" />
		);

	const postfix =
		itemType === "gasoline" ? "L" : itemType === "capacity" ? "People" : "";

	return (
		<div className="flex items-center w-max gap-1">
			<Icon />

			<p className="w-max">
				<span>{itemValue}</span> {postfix}
			</p>
		</div>
	);
};

export type CardProps = {
	direction: "row" | "column";
	name: string;
	type: "Sport" | "Sedan" | "SUV" | "Hatchback";
	img: string;
	details: {
		gasoline: number;
		steering: "Manual" | "Auto";
		capacity: number;
	};
	price: number;
	discountPrice: number | null | undefined;
};

// const CardPropsWithoutDirection: Omit<CardProps, "direction"> = {};

export type CardPropsWithoutDirection = {
	[K in keyof CardProps as Exclude<K, "direction">]: CardProps[K];
};

const Card = ({
	direction = "column",
	name,
	type,
	img,
	details,
	price,
	discountPrice,
}: CardProps) => {
	const [liked, setLiked] = useState(false);

	return (
		<div
			className={`${
				direction === "column" ? "max-w-[240px] md:max-w-[304px] " : ""
			} flex flex-col justify-between h-full rounded-lg bg-white p-4 shadow-sm text-xs md:text-sm`}
		>
			{/* Heading */}
			<div className="flex items-start justify-between">
				{/* Title */}
				<div>
					<h3 className="text-base font-semibold text-secondary md:text-xl">
						{name}
					</h3>

					<p>{type}</p>
				</div>

				{/* Like button */}
				<button
					type="button"
					onClick={() => setLiked(prevVal => !prevVal)}
					className="pt-1"
				>
					<Heart
						variant={liked ? "Bold" : "Linear"}
						color={liked ? "#FF4423" : "currentColor"}
					/>
				</button>
			</div>

			{/* Middle (car image & details) */}
			<div
				className={
					"flex " +
					(direction === "row" ? "flex-row pb-5" : "flex-col pb-7")
				}
			>
				{/* Car Image (must wrap with div, otherwise it'll overflow) */}
				<div className="w-full">
					<Image
						src={img}
						alt={name + " car"}
						width={999}
						height={999}
						className={
							direction === "column"
								? "px-[14px] pt-8 pb-11 mx-auto"
								: "w-4/5 py-6"
						}
					/>
				</div>

				{/* Car Details */}
				<ul
					className={`flex ${
						direction === "column"
							? "flex-row items-center justify-between"
							: "flex-col justify-evenly items-start"
					} `}
				>
					{Object.keys(details).map((key, index) => {
						const carDetailsKey = key as CarDetailsItemType;
						return (
							<li key={index}>
								<CarDetailsItem
									itemType={carDetailsKey}
									itemValue={details[carDetailsKey]}
								/>
							</li>
						);
					})}
				</ul>
			</div>

			{/* Price & Button */}
			<div className="flex items-center justify-between gap-4 font-bold">
				{discountPrice === null ||
				typeof discountPrice === "undefined" ? (
					// No discount
					<p>
						<span className="text-base text-secondary">
							${formatCurrency(price)}/
						</span>
						day
					</p>
				) : (
					// Discount
					<div>
						{/* Discount price */}
						<p>
							<span className="text-base text-secondary">
								${formatCurrency(discountPrice)}/
							</span>
							day
						</p>

						{/* Original price */}
						<p className="line-through ">
							${formatCurrency(price)}
						</p>
					</div>
				)}

				<Button intent="primary" size="md">
					Rental Now
				</Button>
			</div>
		</div>
	);
};

export default Card;
