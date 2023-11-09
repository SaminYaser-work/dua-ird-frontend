"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { IDua } from "./Dua";
import { ISubCategory } from "./SubCategory";
import SectionHeader from "./SectionHeader";
import Dua from "./Dua";
import { SelectedDuaContext } from "@/app/page";
import { useContext, useRef } from "react";

interface IDuaPanel {
    subCats: ISubCategory[];
    duas: IDua[];
}

export default function DuaPanel({ subCats, duas }: IDuaPanel) {
    const { selectedDua, setIsMobileNavOpen } = useContext(SelectedDuaContext);
    const panel = useRef<HTMLDivElement>(null);

    if (selectedDua !== "" && panel.current) {
        document?.getElementById(selectedDua)?.scrollIntoView({
            behavior: "smooth",
        });
    }

    return (
        <div
            ref={panel}
            className="w-full h-screen px-3 md:px-0 delay-1000 transition duration-1000 ease-linear col-start-2 overflow-y-scroll"
        >
            <div id="sec_top"></div>
            <div className="flex flex-row justify-start items-center gap-5 md:hidden mb-5 mt-5 bg-white rounded-xl px-5 py-4">
                <div
                    onClick={(e) => {
                        setIsMobileNavOpen(true);
                        console.log("mobile nav clicked");
                    }}
                >
                    <GiHamburgerMenu />
                </div>
                <p className="text-title font-medium leading-[25px]">
                    See all Duas
                </p>
            </div>
            {subCats.map((subCat) => {
                return (
                    <div key={"sc_" + subCat.subcat_id}>
                        <SectionHeader
                            sectionName={subCat.subcat_name_en}
                            id={"sec_" + subCat.subcat_id}
                        />
                        {duas
                            .filter((dua) => dua.subcat_id === subCat.subcat_id)
                            .map((dua, idx) => (
                                <Dua key={idx} idx={idx + 1} dua={dua} />
                            ))}
                    </div>
                );
            })}
        </div>
    );
}
