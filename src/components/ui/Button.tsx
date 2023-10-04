import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

/* const Button = (
	props: React.ButtonHTMLAttributes<HTMLButtonElement>,
	children: React.ReactNode
) => {
	return <button {...props}>{children}</button>;
}; */

const buttonClass = cva("rounded font-semibold transition-all outline-none", {
	variants: {
		intent: {
			primary:
				"bg-primary active:bg-primary-700 text-white focus-visible:ring-[#cebefe] focus-visible:ring-1 focus-visible:ring-inset disabled:opacity-40",
			secondary:
				"bg-white active:bg-primary-100 text-secondary-400 hover:text-secondary active:text-secondary focus-visible:text-secondary-400 disabled:text-secondary-400 ring-1 ring-inset ring-secondary-300 hover:ring-secondary-400 active:ring-secondary-300 focus-visible:ring-secondary-300 disabled:ring-primary-100",
			minimal:
				"hover:bg-white active:bg-primary-100 focus-visible:bg-secondary-200 text-secondary-200 hover:text-secondary active:text-secondary focus-visible:text-secondary disabled:text-secondary-400 focus-visible:ring-1 focus-visible:ring-secondary-200 focus-visible:ring-inset disabled:cursor-not-allowed",
		},
		size: {
			sm: "px-4 py-[5px] leading-[1.6] text-xs",
			md: "px-4 py-[9px] leading-[1.6] text-xs",
			lg: "px-6 py-[13px] text-base leading-5",
		},
	},
	defaultVariants: {
		intent: "primary",
		size: "md",
	},
});

export interface ButtonProps
	extends React.HTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonClass> {}

const Button = ({ intent, size, className, ...props }: ButtonProps) => {
	return (
		<button
			className={buttonClass({ intent, size, class: className })}
			{...props}
		/>
	);
};

export default Button;
