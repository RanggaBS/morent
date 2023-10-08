import { ArrangeVertical, ArrowDown2 } from "iconsax-react";
import Button from "./ui/Button";

const PickUpDropOff = ({ name }: { name: "Pick - Up" | "Drop - Off" }) => {
	let inputs = [
		{
			name: "Locations",
			dropdownPlaceholder: "Select your city",
			// options: ["City 1", "City 2", "City 3"],
		},
		{
			name: "Date",
			dropdownPlaceholder: "Select your date",
			// options: ["", "", ""],
		},
		{
			name: "Time",
			dropdownPlaceholder: "Select your time",
			// options: ["", "", ""],
		},
	];

	const Divider = () => <div className="w-[2px] bg-secondary-100 mx-4"></div>;

	const elementsWithDividers: React.ReactNode[] = [];
	inputs.forEach((input, index) => {
		elementsWithDividers.push(
			<div key={index}>
				<h4 className="font-bold text-secondary">{input.name}</h4>

				<div className="flex items-center text-xs">
					<p>{input.dropdownPlaceholder}</p>

					<ArrowDown2 />
				</div>
			</div>
		);

		if (index < inputs.length - 1) {
			elementsWithDividers.push(<Divider key={index} />);
		}
	});

	const circleBg = name === "Pick - Up" ? "bg-primary" : "bg-information";

	return (
		<div className="flex-grow p-4 bg-white rounded-lg">
			<div className="flex items-center pb-4">
				{/* Circle Icon Pulse */}
				<span className="relative flex w-2 h-2 mx-2">
					<span
						className={`absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping ${circleBg}`}
					></span>
					<span
						className={`relative inline-flex w-2 h-2 rounded-full ${circleBg}`}
					></span>
				</span>

				{/* Title */}
				<h3 className="font-semibold text-secondary">{name}</h3>
			</div>

			<div className="flex justify-between">{elementsWithDividers}</div>
		</div>
	);
};

export const PickUpDropOffGroup = () => {
	return (
		<div className="flex flex-col pb-8 mx-mobile md:mx-tablet md:flex-row md:gap-4 md:justify-between md:items-center">
			<PickUpDropOff name="Pick - Up" />

			{/* Switch button */}
			<Button
				intent="primary"
				className="shadow-2xl shadow-primary w-[60px] h-[60px] !rounded-[10px] mx-auto -my-4 z-10 md:m-0"
			>
				<ArrangeVertical className="mx-auto" />
			</Button>

			<PickUpDropOff name="Drop - Off" />
		</div>
	);
};

export default PickUpDropOff;
