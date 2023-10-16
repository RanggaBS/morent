import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const CarCategoryLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Navbar showHamburgerMenu={true} />

			{children}
		</>
	);
};

export default CarCategoryLayout;
