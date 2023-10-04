import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMagnifyingGlass,
	faSliders,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./ui/Button";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			{/* First */}
			<div className={styles.navbar__first}>
				{/* Logo */}
				<Link href="/" className={styles.navbar__logo}>
					MORENT
				</Link>

				{/* Profile Picture */}
				<Image
					src="/images/RBS.jpg"
					alt="Profile picture"
					width="32"
					height="32"
					className={styles.navbar__profilePicture}
				/>
			</div>

			{/* Second */}
			<div className={styles.navbar__second}>
				{/* Search */}
				<form
					action=""
					method="get"
					className="flex items-center flex-1 rounded-lg ring-1 ring-secondary-200 ring-inset"
				>
					<button
						type="submit"
						className="h-full px-3 rounded-lg hover:bg-secondary-100"
					>
						<FontAwesomeIcon
							icon={faMagnifyingGlass}
							className="h-[1.25em]"
						/>
					</button>

					<input
						type="text"
						name="search"
						id="search"
						placeholder="Search something here"
						className="w-full px-4 py-2 text-sm bg-transparent"
					/>
				</form>

				{/* Setting button */}
				<button
					type="button"
					className="px-3 py-2 rounded-lg ring-1 ring-secondary-200 ring-inset hover:bg-secondary-100"
				>
					<FontAwesomeIcon icon={faSliders} className="h-[1em]" />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
