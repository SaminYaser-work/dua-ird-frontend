"use client";
import Content from "@/components/Content";
import { createContext, useState } from "react";

type SelectedContextType = {
    selectedDua: string;
    setSelectedDua: (value: string) => void;
    isMobileNavOpen: boolean;
    setIsMobileNavOpen: (value: boolean) => void;
};

export const SelectedDuaContext = createContext<SelectedContextType>({
    selectedDua: "",
    setSelectedDua: () => {},
    isMobileNavOpen: false,
    setIsMobileNavOpen: () => {},
});

const SelectedDuaProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedDua, setSelectedDua] = useState("");
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
        <SelectedDuaContext.Provider
            value={{
                selectedDua,
                setSelectedDua,
                isMobileNavOpen,
                setIsMobileNavOpen,
            }}
        >
            {children}
        </SelectedDuaContext.Provider>
    );
};

export default function Home() {
    return (
        <SelectedDuaProvider>
            <Content />
        </SelectedDuaProvider>
    );
}
