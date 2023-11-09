"use client";
import Content from "@/components/Content";
import { createContext, useState } from "react";

type SelectedContextType = {
    selectedDua: string;
    setSelectedDua: (value: string) => void;
};

export const SelectedDuaContext = createContext<SelectedContextType>({
    selectedDua: "",
    setSelectedDua: () => {},
});

const SelectedDuaProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedDua, setSelectedDua] = useState("");

    return (
        <SelectedDuaContext.Provider value={{ selectedDua, setSelectedDua }}>
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
