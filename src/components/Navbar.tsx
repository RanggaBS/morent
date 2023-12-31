"use client";

import Image from "next/image";
import Logo from "@/components/ui/Logo";
import SearchBar from "@/components/ui/SearchBar";
import { HambergerMenu, Heart, Notification, Setting2 } from "iconsax-react";
import { ButtonHTMLAttributes, FormEvent } from "react";
import { useSidebar } from "@/contexts/SidebarContext";

interface RoundedButtonIconProps {
	icon: "heart" | "notification" | "setting";
	type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const RoundedButtonIcon = ({ icon, type }: RoundedButtonIconProps) => {
	const Icon =
		icon === "heart" ? (
			<Heart variant="Bold" />
		) : icon === "notification" ? (
			<>
				<Notification variant="Bold" />
				<span className="absolute top-0 right-0 p-2 rounded-full bg-error"></span>
			</>
		) : (
			<Setting2 variant="Bold" />
		);

	return (
		<button
			type={type}
			className={
				"p-2.5 rounded-full ring-1 ring-secondary-200 ring-inset hover:bg-secondary-100" +
				(icon === "notification" ? " relative" : "")
			}
		>
			{Icon}
		</button>
	);
};

const Navbar = ({
	showHamburgerMenu = false,
}: {
	showHamburgerMenu?: boolean | undefined;
}) => {
	const { toggleOpen } = useSidebar();

	const buttonIcons: RoundedButtonIconProps["icon"][] = [
		"setting",
		"notification",
		"heart",
	];

	return (
		<nav className="bg-white text-secondary-400 md:ring-1 md:ring-secondary-200 md:ring-inset md:ring-opacity-40">
			<div className="relative flex flex-col gap-8 py-8 mx-auto md:static max-w-app-max-content-margin md:block md:py-10">
				{/* Top */}
				<div className="flex items-center justify-between mx-mobile md:mx-tablet md:gap-8">
					<div className="md:flex md:items-center md:gap-16 md:flex-grow">
						{/* Logo or hamburger menu */}
						{showHamburgerMenu ? (
							<>
								<button
									type="button"
									className="md:hidden"
									onClick={toggleOpen}
								>
									<HambergerMenu />
								</button>

								<Logo className="hidden md:block" />
							</>
						) : (
							<Logo />
						)}

						{/* Hidden on mobile */}
						<SearchBar
							variant="group"
							className="hidden md:flex md:flex-grow"
						/>
					</div>

					<div className="flex flex-row-reverse items-center gap-4">
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

						{/* Icons */}
						<ul className="hidden gap-4 md:flex md:flex-row-reverse">
							{buttonIcons.map((icon, index) => {
								return (
									<li key={index}>
										<RoundedButtonIcon
											icon={icon}
											type="button"
										/>
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				{showHamburgerMenu ? (
					<Logo className="inline-block w-max md:hidden mx-mobile md:mx-tablet" />
				) : null}

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
