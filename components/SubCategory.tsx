"use client";

import { ElementRef, useContext, useRef, useState } from "react";
import { IDua } from "./Dua";
import { SelectedDuaContext } from "@/app/page";

export interface ISubCategory {
    id: number;
    cat_id: number;
    subcat_id: number;
    subcat_name_bn: string;
    subcat_name_en: string;
    no_of_dua: number;
}

export function SubCategory({
    subCat,
    duas,
}: {
    subCat: ISubCategory;
    duas: IDua[];
}) {
    const duaNames = useRef<ElementRef<"div">>(null);
    const [selected, setSelected] = useState<number>(-1);
    const { setSelectedDua } = useContext(SelectedDuaContext);

    return (
        <div className="flex flex-row my-2" key={subCat.subcat_id}>
            <div className="bg-green-500 inline-block -translate-x-4 mt-1.5 w-1.5 rounded-[50%] h-1.5"></div>
            <div className="flex flex-col justify-start items-start">
                <p
                    className="text-title cursor-pointer font-semibold text-left break-words text-sm xs:text-2xs"
                    onClick={(e) => {
                        duaNames.current?.classList.toggle("hidden");
                        e.currentTarget.classList.toggle("text-green-500");
                        setSelected(-1);
                        setSelectedDua("sec_" + subCat.subcat_id);
                    }}
                >
                    {subCat.subcat_name_en}
                </p>
                <div className="hidden" ref={duaNames}>
                    {duas
                        .filter(
                            (dua) =>
                                dua.cat_id === subCat.cat_id &&
                                dua.subcat_id === subCat.subcat_id
                        )
                        .map((dua, idx) => (
                            <div key={idx}>
                                <div className="flex flex-row">
                                    <img
                                        src="https://duaruqyah.com/assets/duaarrow.svg"
                                        alt="dua_arr"
                                        className="-translate-y-1 mr-2"
                                    ></img>
                                    <p
                                        className={`text-xs my-3 text-left w-[95%] cursor-pointer ${
                                            selected === idx && "text-green-500"
                                        }`}
                                        onClick={(e) => {
                                            setSelected(idx);
                                            setSelectedDua("dua_" + dua.dua_id);
                                        }}
                                    >
                                        {dua.dua_name_en}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
