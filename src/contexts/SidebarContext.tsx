"use client";

import { ReactNode, createContext, useContext, useState } from "react";

const initialValue = false;

const SidebarContext = createContext<any>(initialValue);

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
	const [open, setOpen] = useState(initialValue);

	const toggleOpen = () => {
		setOpen(prevVal => !prevVal);
	};

	return (
		<SidebarContext.Provider value={{ open, toggleOpen }}>
			{children}
		</SidebarContext.Provider>
	);
};
