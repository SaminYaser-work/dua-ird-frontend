"use client";

import { SelectedDuaContext } from "@/app/page";
import { useContext } from "react";

export interface ICategoryCard {
    id: number;
    cat_id: number;
    cat_name_bn: string;
    cat_name_en: string;
    no_of_subcat: number;
    no_of_dua: number;
    cat_icon: string;
}

export function CategoryCard({
    categories: cat,
    isSelected,
}: {
    categories: ICategoryCard;
    isSelected: boolean;
}) {
    const { setSelectedDua } = useContext(SelectedDuaContext);

    return (
        <div
            className="group scroll-mt-4 style-Kalpurush"
            onClick={(e) => setSelectedDua("sec_top")}
        >
            <div className="cursor-pointer flex justify-between items-center mx-3 my-2">
                <div
                    className={`flex flex-row gap-x-4 items-center w-full h-18 px-3 rounded-xl group-hover:bg-slate-200 py-3 ${
                        isSelected ? "bg-slate-200" : "bg-white"
                    }`}
                >
                    <div className="flex flex-row w-70 items-center xs:w-full sm:w-full md:w-full">
                        <div className="bg-slate-100 flex rounded-lg items-center justify-center h-14 w-14 xs:w-12 xs:h-12 text-2xl">
                            <img
                                src={
                                    "https://duaruqyah.com/assets/icon/" +
                                    cat.cat_icon +
                                    ".svg"
                                }
                            />
                        </div>
                        <div className="w-40 text-left ml-2">
                            <p className="text-base text-black">
                                {cat.cat_name_en}
                            </p>
                            <p className="text-slate-400 text-xs mt-1 xs:text-[11px] ">
                                Subcategory: {cat.no_of_subcat}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row w-12 items-center">
                        <div className="bg-slate-200 w-[1px] mr-3 h-12"></div>
                        <div className="flex flex-col gap-y-1 justify-center items-center">
                            <p className="text-base xs:text-sm sm:text-mss">
                                {cat.no_of_dua}
                            </p>
                            <p className="text-slate-400 text-xs xs:text-[11px]">
                                Duas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
