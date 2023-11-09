"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { ICategoryCard } from "./CategoryCard";
import { ISubCategory } from "./SubCategory";
import { SubCategory } from "./SubCategory";
import { CategoryCard } from "./CategoryCard";
import { IDua } from "./Dua";

interface ICategoryPanel {
    searchedCat: string;
    setSearchedCat: (value: string) => void;
    cats: ICategoryCard[];
    selectedCat: number;
    setSelectedCat: (value: number) => void;
    subCats: ISubCategory[];
    duas: IDua[];
}

export default function CategoryPanel({
    searchedCat,
    setSearchedCat,
    cats,
    selectedCat,
    setSelectedCat,
    subCats,
    duas,
}: ICategoryPanel) {
    return (
        <div className="w-[350px] mt-14">
            <div className="mx-3 pt-4">
                <label className="relative block w-full">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-xl">
                        <AiOutlineSearch />
                    </span>
                    <input
                        className="h-12 placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md pl-12 shadow-sm focus:outline-green-500  sm:text-sm"
                        placeholder="Search Categories"
                        type="text"
                        name="search"
                        onChange={(e) => setSearchedCat(e.target.value)}
                    />
                </label>
            </div>

            <div className="h-[calc(100vh-32vh)] pb-8 mb-4 overflow-y-scroll">
                {cats
                    .filter(
                        (cat) =>
                            searchedCat === "" ||
                            cat.cat_name_en
                                .toLowerCase()
                                .includes(searchedCat.toLowerCase())
                    )
                    .map((cat) => (
                        <div
                            key={"cat_id_" + cat.cat_id}
                            onClick={(e) => {
                                setSelectedCat(cat.cat_id);
                                e.currentTarget.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            <CategoryCard
                                categories={cat}
                                isSelected={selectedCat === cat.cat_id}
                            />
                            {subCats
                                .filter(
                                    (subCat) =>
                                        subCat.cat_id === cat.cat_id &&
                                        selectedCat === cat.cat_id
                                )
                                .map((subCat) => (
                                    <div
                                        key={"sub_cat_id" + subCat.subcat_id}
                                        className="ml-12 border-l-2 border-dotted border-green-500"
                                    >
                                        <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3">
                                            <SubCategory
                                                subCat={subCat}
                                                duas={duas}
                                            />
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ))}
            </div>
        </div>
    );
}
