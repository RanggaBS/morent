import Footer from "@/components/Footer";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "MORENT - Car Rental Platform",
	description: "The best platform for car rental.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={plusJakartaSans.className}>
				<div
					id="App"
					className="overflow-x-hidden font-medium bg-app-bg text-secondary-300 min-h-screen"
				>
					{children}

					<Footer />
				</div>
			</body>
		</html>
	);
}
