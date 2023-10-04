import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
/* import {
	faMagnifyingGlass,
	faSliders,
} from "@fortawesome/free-solid-svg-icons"; */
import { BsSliders } from "@react-icons/all-files/bs/BsSliders";
// import { FaMagn } from "@react-icons/all-files/fa/FaMagn"; // No magnifying glass icon? What a stupid old library
import {} from "@onemind-services-llc/react-icons-ng-pack/";
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
						<BsSliders />
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
					<BsSliders />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
