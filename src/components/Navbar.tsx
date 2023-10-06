import Image from "next/image";
import Logo from "./ui/Logo";
import SearchBar from "./ui/SearchBar";

const Navbar = () => {
	return (
		<nav className="bg-white text-secondary-400 md:ring-1 md:ring-secondary-200 md:ring-inset md:ring-opacity-40">
			<div className="relative flex flex-col gap-8 py-8 mx-auto md:static max-w-app-max-content-margin md:block md:py-10">
				{/* Background */}
				<div className="bg-white h-[116px] w-full md:hidden absolute bottom-0 translate-y-full"></div>

				{/* Top */}
				<div className="flex items-center justify-between mx-mobile md:mx-tablet md:gap-8">
					<div className="md:flex md:items-center md:gap-8 md:flex-grow">
						<Logo />

						{/* Hidden on mobile */}
						<SearchBar
							variant="group"
							className="hidden md:flex md:flex-grow"
						/>
					</div>

					{/* Profile Picture */}
					<button type="button">
						<Image
							src="/images/RBS.jpg"
							alt="Profile picture"
							width={999}
							height={999}
							className="rounded-full h-7 w-7 md:h-11 md:w-11"
						/>
					</button>
				</div>

				{/* Hidden starts on Tablet (min-width: 768px) */}
				<SearchBar
					variant="split"
					className="md:hidden mx-mobile md:mx-tablet"
				/>
			</div>
		</nav>
	);
};

export default Navbar;
