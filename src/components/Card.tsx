"use client";

import { BsFillFuelPumpFill } from "react-icons/bs";
import { RiSteeringLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import Heart from "react-animated-heart";
import { type URL } from "url";
import { formatCurrency } from "@/utils";
import Button from "./ui/Button";

type CarDetailsItemType = "gasoline" | "steering" | "capacity";

export const CarDetailsItem = ({
	itemType,
	itemValue,
}: {
	itemType: CarDetailsItemType;
	itemValue: number | string;
}) => {
	const Icon = () =>
		itemType === "gasoline" ? (
			<BsFillFuelPumpFill />
		) : itemType === "steering" ? (
			<RiSteeringLine />
		) : (
			<FaUserFriends />
		);

	const postfix =
		itemType === "gasoline" ? "L" : itemType === "capacity" ? "People" : "";

	return (
		<div className="flex items-center gap-2">
			<Icon />

			<p>
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
	discountPrice: number;
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
		<div className="max-w-[240px] rounded-lg bg-white p-4">
			{/* Heading */}
			<div className="flex items-start justify-between">
				{/* Title */}
				<div>
					<h3 className="font-semibold text-secondary">{name}</h3>

					<p className="text-xs">{type}</p>
				</div>

				{/* Like button */}
				<button
					type="button"
					onClick={() => setLiked(prevVal => !prevVal)}
					className="pt-1"
				>
					{liked ? (
						<AiFillHeart
							style={{
								height: "24px",
								width: "24px",
								color: "#FF4423",
							}}
						/>
					) : (
						<AiOutlineHeart
							style={{ height: "24px", width: "24px" }}
						/>
					)}
				</button>
			</div>

			{/* Car Image */}
			<div
				className={
					"flex " + (direction === "row" ? "flex-row" : "flex-col")
				}
			>
				<Image
					src={img}
					alt={name + " car"}
					width={999}
					height={999}
					className="w-full h-auto py-8"
				/>

				{/* Car Details */}
				<ul className="flex items-center justify-between pb-6 text-xs">
					{Object.keys(details).map((key, index) => {
						return (
							<li key={index}>
								<CarDetailsItem
									itemType={key}
									itemValue={details[key]}
								/>
							</li>
						);
					})}
				</ul>
			</div>

			{/* Price & Button */}
			<div className="flex gap-4 font-bold">
				{discountPrice === null ? (
					// No discount
					<p className="text-xs">
						<span className="text-base text-secondary">
							${formatCurrency(price)}/
						</span>
						day
					</p>
				) : (
					// Discount
					<div>
						{/* Discount price */}
						<p className="text-xs">
							<span className="text-base text-secondary">
								${formatCurrency(discountPrice)}/
							</span>
							day
						</p>

						{/* Original price */}
						<p className="text-xs line-through">
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
