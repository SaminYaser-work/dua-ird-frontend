"use client";

import { ISubCategory } from "./SubCategory";
import { IDua } from "./Dua";
import { ICategoryCard } from "./CategoryCard";
import { useEffect, useState } from "react";
import CategoryPanel from "./CategoryPanel";
import DuaPanel from "./DuaPanel";
import Loading from "@/app/loading";

async function getCategories() {
    const data = await fetch("http://127.0.0.1:8000/api/v1/categories");
    const cats: ICategoryCard[] = await data.json();
    return cats;
}

async function getDuas(cat_id: number) {
    const duaData = await fetch("http://127.0.0.1:8000/api/v1/duas/" + cat_id);
    const duas: IDua[] = await duaData.json();
    return duas;
}

async function getSubCategories(cat_id: number) {
    const subCatsData = await fetch(
        "http://127.0.0.1:8000/api/v1/subcategories/" + cat_id
    );
    const subCats: ISubCategory[] = await subCatsData.json();
    return subCats;
}

export default function Content() {
    const [searchedCat, setSearchedCat] = useState<string>("");
    const [selectedCat, setSelectedCat] = useState<number>(1);
    const [cats, setCats] = useState<ICategoryCard[]>([]);
    const [subCats, setSubCats] = useState<ISubCategory[]>([]);
    const [duas, setDuas] = useState<IDua[]>([]);

    useEffect(() => {
        (async function () {
            const c = await getCategories();
            setCats(c);
            const s = getSubCategories(selectedCat);
            const d = getDuas(selectedCat);
            const [sd, dd] = await Promise.all([s, d]);
            setSubCats(sd);
            setDuas(dd);
        })();
    }, [selectedCat]);

    if (cats.length === 0) {
        return <Loading />;
    }

    return (
        <div className="col-span-2 grid grid-cols-[auto,auto] md:grid-cols-[350px,auto] md:gap-5 md:mt-10 md:ml-8">
            {/* Categories section */}
            <div className="hidden -translate-x-[350px] md:block md:translate-x-0 w-[350px] fixed bg-white h-screen md:h-[85vh] rounded-2xl">
                <div className="fixed w-[350px] bg-primary justify-center rounded-t-2xl items-center h-14 flex flex-row px-5 bg-green-600">
                    <p className="text-base text-white mx-auto">Categories</p>
                </div>
                <CategoryPanel
                    cats={cats}
                    searchedCat={searchedCat}
                    selectedCat={selectedCat}
                    setSearchedCat={setSearchedCat}
                    setSelectedCat={setSelectedCat}
                    subCats={subCats}
                    duas={duas}
                />
            </div>

            {/* scrolling content section */}
            <DuaPanel duas={duas} subCats={subCats} />
        </div>
    );
}
