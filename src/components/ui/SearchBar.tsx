import { PiMagnifyingGlass } from "@onemind-services-llc/react-icons-ng-pack/pi/PiMagnifyingGlass";
import { PiSlidersHorizontal } from "@onemind-services-llc/react-icons-ng-pack/pi/PiSlidersHorizontal";
import { useState } from "react";

type SearchBarProps = {
	variant?: "split" | "group";
	onSubmit?: () => void | undefined;
	className?: string | undefined;
};

const SearchBar = ({
	variant = "split",
	onSubmit,
	className,
}: SearchBarProps) => {
	return variant === "split" ? (
		<div className={"flex gap-4" + (className ? " " + className : "")}>
			{/* variant = "split" */}
			{/* Search input */}
			<form
				action=""
				method="get"
				className={
					"flex items-center flex-grow rounded-lg ring-1 ring-secondary-200 ring-inset"
				}
				onSubmit={onSubmit}
			>
				<button
					type="submit"
					className="h-full p-3 rounded-l-lg hover:bg-secondary-100"
				>
					<PiMagnifyingGlass className="w-6 h-6" />
				</button>

				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search something here"
					className="w-full h-full text-sm bg-transparent"
				/>
			</form>

			{/* Filter button */}
			<button
				type="button"
				className="p-3 rounded-lg ring-1 ring-secondary-200 ring-inset hover:bg-secondary-100"
			>
				<PiSlidersHorizontal className="w-6 h-6" />
			</button>
		</div>
	) : (
		/* variant = "group" */
		<div
			className={
				"max-w-[492px] rounded-full ring-1 ring-secondary-200 ring-inset flex justify-between" +
				(className ? " " + className : "")
			}
		>
			{/* Search input */}
			<form
				action=""
				method="get"
				className="flex items-center flex-1 rounded-l-full"
				onSubmit={onSubmit}
			>
				<button
					type="submit"
					className="h-full px-5 py-[10px] rounded-l-full hover:bg-secondary-100"
				>
					<PiMagnifyingGlass className="w-6 h-6" />
				</button>

				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search something here"
					className="w-full h-full text-sm bg-transparent"
				/>
			</form>

			{/* Filter button */}
			<button
				type="button"
				className="px-5 py-[10px] rounded-r-full hover:bg-secondary-100"
			>
				<PiSlidersHorizontal className="w-6 h-6" />
			</button>
		</div>
	);
};

export default SearchBar;
