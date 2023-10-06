import { useState, useEffect } from "react";

export type TViewportSize = {
	width: number;
	height: number;
};

const initialViewportSize: TViewportSize = {
	width: 0,
	height: 0,
};

const useViewportSize = (): TViewportSize => {
	const [size, setSize] = useState(initialViewportSize);

	const handleSizeChange = () => {
		setSize({ width: window.innerWidth, height: window.innerHeight });
	};

	useEffect(() => {
		window.addEventListener("resize", handleSizeChange);

		return () => window.removeEventListener("resize", handleSizeChange);
	}, []);

	return size;
};

export default useViewportSize;
