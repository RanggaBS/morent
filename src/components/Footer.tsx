import Link from "next/link";
import Logo from "./ui/Logo";

type LinkObj = {
	text: string;
	url: string;
};

type LinksProps = {
	title: string;
	links: LinkObj[];
};

export const Resource = ({ title, links }: LinksProps) => {
	return (
		<div className="flex-grow">
			{/* Title */}
			<h3 className="pb-5 text-xl font-bold text-secondary">{title}</h3>

			{/* Links */}
			<ul className="flex flex-col gap-3 text-sm">
				{links.map((link, index) => {
					return (
						<li key={index}>
							<Link href={link.url}>{link.text}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

const Footer = () => {
	const resources: LinksProps[] = [
		{
			title: "About",
			links: [
				{
					text: "How it works",
					url: "/about/how-it-works",
				},
				{
					text: "Featured",
					url: "/about/featured",
				},
				{
					text: "Partnership",
					url: "/about/partnership",
				},
				{
					text: "Business Relation",
					url: "/about/business-relation",
				},
			],
		},
		{
			title: "Socials",
			links: [
				{
					text: "Discord",
					url: "/socials/discord",
				},
				{
					text: "Instagram",
					url: "/socials/instagram",
				},
				{
					text: "Twitter",
					url: "/socials/twitter",
				},
				{
					text: "Facebook",
					url: "/socials/facebook",
				},
			],
		},
		{
			title: "Community",
			links: [
				{
					text: "Events",
					url: "/community/events",
				},
				{
					text: "Blog",
					url: "/community/blog",
				},
				{
					text: "Podcast",
					url: "/community/podcast",
				},
				{
					text: "Invite a friend",
					url: "/community/invite-a-friend",
				},
			],
		},
	];

	return (
		<footer className="md:bg-white">
			<div className="mx-auto max-w-app-max-content-margin">
				<div className="mx-mobile md:mx-tablet flex flex-col justify-between gap-10 pb-10 md:flex-row md:pt-[4.5rem]">
					{/* Heading */}
					<div>
						<Logo className="inline-block pb-4" />

						<p className="text-xs leading-loose">
							Our vision is to provide convenience
							<br />
							and help increase your sales business.
						</p>
					</div>

					{/* Links */}
					<div className="flex flex-wrap gap-x-6 gap-y-10">
						{resources.map((resource, index) => {
							return (
								<Resource
									key={index}
									title={resource.title}
									links={resource.links}
								/>
							);
						})}
					</div>
				</div>

				<hr className="hidden md:block mx-mobile md:mx-tablet" />

				{/* Privacy policy */}
				<div className="flex flex-col justify-between gap-6 pt-0 pb-6 text-xs font-semibold mx-mobile md:mx-tablet text-secondary md:flex-row-reverse md:pt-6 md:pb-8">
					<div className="flex justify-between gap-12">
						<Link href="/privacy">Privacy & Policy</Link>

						<Link href="/terms">Terms & Condition</Link>
					</div>

					<p>&copy;2022 MORENT. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
