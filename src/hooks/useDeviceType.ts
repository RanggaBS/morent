import { useState, useEffect } from "react";

export type TDeviceType = "mobile" | "tablet" | "desktop";

const useDeviceType = () => {
	const [deviceType, setDeviceType] = useState<TDeviceType | null>(null);

	useEffect(() => {
		const userAgent = window.navigator.userAgent;
		const isMobile = /Mobi|Android/i.test(userAgent);
		const isTablet = /Tablet|iPad/i.test(userAgent);

		if (isMobile) {
			setDeviceType("mobile");
		} else if (isTablet) {
			setDeviceType("tablet");
		} else {
			setDeviceType("desktop");
		}
	}, []);

	return deviceType;
};

export default useDeviceType;
