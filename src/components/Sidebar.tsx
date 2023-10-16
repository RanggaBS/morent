"use client";

import { useSidebar } from "@/contexts/SidebarContext";
import { formatCurrency } from "@/utils";
import { ChangeEvent, FormEvent, ReactNode, useState } from "react";

/* 
	Sidebar checkbox item
 */

type TSidebarCheckboxItem = {
	name: "Sport" | "SUV" | "MPV" | "Sedan" | "Coupe" | "Hatchback";
	count: number;
};

export const SidebarCheckboxItem = ({
	name,
	count,
}: {
	name: string;
	count: number | `${number}`;
}) => {
	return (
		<label className="inline font-bold text-secondary">
			<input type="checkbox" name={name} id={name} className="mr-1" />

			{name}

			<span className="font-medium text-secondary-300"> ({count})</span>
		</label>
	);
};

/* 
	Sidebar input range item
*/

type TSidebarInputRangeItem = {
	min: number | `${number}`;
	max: number | `${number}`;
};

export const SidebarInputRangeItem = ({ min, max }: TSidebarInputRangeItem) => {
	const [price, setPrice] = useState<`${number}` | number>("0");

	return (
		<div>
			<input
				type="range"
				name="price"
				id="price"
				min={min}
				max={max}
				step="1"
				onChange={(event: ChangeEvent<HTMLInputElement>) => {
					setPrice(event.target.value as `${number}`);
				}}
				className="block w-full mb-1"
			/>

			<p className="text-secondary">
				Max. <span>${formatCurrency(price)}</span>
			</p>
		</div>
	);
};

type TSidebarSectionContent = "checkboxes" | "range";

/* export const SidebarSectionContent = ({
	type,
}: {
	type: TSidebarSectionContent;
}) => {
	return type === "checkboxes" ? (
		<ul>
			<li>asdsd</li>
		</ul>
	) : (
		<>
			<input type="range" id="price" min="0" max="130" />

			<p>
				Max. <span></span>
			</p>
		</>
	);
}; */

export const SidebarSection = ({
	title,
	children = null,
}: {
	title: string;
	// type: TSidebarSectionContent;
	children?: ReactNode;
}) => {
	return (
		<section className="pb-10">
			<h2 id={title.toLowerCase()} className="pb-4 text-xs uppercase">
				{title}
			</h2>

			{children}
		</section>
	);
};

/* type TSection = {
	title: string;
	// type: TSidebarSectionContent;
}; */

const Sidebar = ({
	className = "",
	children = null,
}: {
	className?: string | undefined;
	children?: ReactNode;
}) => {
	const { open } = useSidebar();

	return (
		<aside
			/* className={
				(open ? "translate-x-0" : "-translate-x-full") +
				" md:translate-x-0 " +
				className
			} */
			className={
				"max-w-sidebar " + (open ? "w-full" : "w-0") + ` ${className}`
			}
		>
			{children}
		</aside>
	);
};

export default Sidebar;
