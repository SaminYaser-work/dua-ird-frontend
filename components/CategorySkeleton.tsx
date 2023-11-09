import { AiOutlineSearch } from "react-icons/ai";

export default function CategorySkeleton() {
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
                    />
                </label>
            </div>

            <div className="h-[calc(100vh-32vh)] pb-8 mb-4 overflow-y-scroll">
                {Array.from(Array(10).keys()).map((i) => (
                    <div
                        key={i}
                        className="group scroll-mt-4 style-Kalpurush animate-pulse"
                    >
                        <div className="cursor-pointer flex justify-between items-center mx-3 my-2">
                            <div
                                className={`flex flex-row gap-x-4 items-center w-full h-18 px-3 rounded-xl group-hover:bg-slate-200 py-3`}
                            >
                                <div className="flex flex-row w-70 items-center xs:w-full sm:w-full md:w-full">
                                    <div className="bg-slate-100 flex rounded-lg items-center justify-center h-14 w-14 xs:w-12 xs:h-12 text-2xl"></div>
                                    <div className="w-40 text-left ml-2">
                                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
                                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-24 mb-4"></div>
                                    </div>
                                </div>
                                <div className="flex flex-row w-12 items-center">
                                    <div className="flex flex-col gap-y-1 justify-center items-center">
                                        <p className="text-base xs:text-sm sm:text-mss"></p>
                                        <p className="text-slate-400 text-xs xs:text-[11px]"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
