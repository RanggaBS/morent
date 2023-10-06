import { SVGAttributes } from "react";

export interface CustomIconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: number | string;
}
