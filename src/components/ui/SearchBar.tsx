import { SearchNormal1, Setting4 } from "iconsax-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type SearchBarProps = {
	variant?: "split" | "group";
	className?: string | undefined;
};

const SearchBar = ({ variant = "split", className }: SearchBarProps) => {
	const router = useRouter();

	const [inputSearch, setInputSearch] = useState("");

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (inputSearch || inputSearch.length >= 1) {
			// redirect
			// if (inputSearch.length >= 3) {
			router.push(`/cars?search=${inputSearch}`);
			// } else {
			// alert("Minimal 3 huruf!");
			// }
		} else if (inputSearch.length <= 0) {
			router.push("/cars");
		}
	};

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
				onSubmit={handleSubmit}
			>
				<button
					type="submit"
					className="h-full p-3 rounded-l-lg hover:bg-secondary-100"
				>
					<SearchNormal1 />
				</button>

				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search something here"
					className="w-full h-full text-sm bg-transparent"
					onChange={event => setInputSearch(event.target.value)}
					value={inputSearch}
				/>
			</form>

			{/* Filter button */}
			<button
				type="button"
				className="p-3 rounded-lg ring-1 ring-secondary-200 ring-inset hover:bg-secondary-100"
			>
				<Setting4 />
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
				onSubmit={handleSubmit}
			>
				<button
					type="submit"
					className="h-full px-5 py-[10px] rounded-l-full hover:bg-secondary-100"
				>
					<SearchNormal1 />
				</button>

				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search something here"
					className="w-full h-full text-sm bg-transparent"
					onChange={event => setInputSearch(event.target.value)}
					value={inputSearch}
				/>
			</form>

			{/* Filter button */}
			<button
				type="button"
				className="px-5 py-[10px] rounded-r-full hover:bg-secondary-100"
			>
				<Setting4 />
			</button>
		</div>
	);
};

export default SearchBar;
