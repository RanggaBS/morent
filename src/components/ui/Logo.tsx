import Link from "next/link";

const Logo = ({ className }: { className?: string | undefined }) => {
	return (
		<Link
			href="/"
			className={
				"logo text-2xl md:text-[2rem] font-bold text-primary" +
				(className ? " " + className : "")
			}
		>
			MORENT
		</Link>
	);
};

export default Logo;
