import { AiOutlineSearch } from "react-icons/ai";
import { TbArrowBadgeDownFilled } from "react-icons/tb";

export default function Heading() {
    return (
        <>
            <div className="hidden md:block col-span-full col-start-2 pl-10">
                <div className="grid grid-cols-[82.2%,1fr] xl:w-[99%] 2xl:grid-cols-[82.2%,1fr] 3xl:grid-cols-[81%,1fr]">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl">Duas Page</h1>
                        <div className="flex flex-row items-center relative bg-white p-1 rounded-lg">
                            <form className="w-full">
                                <div className="w-82 sm-max:w-full relative md:w-72">
                                    <div className="flex justify-between items-center bg-white">
                                        <input
                                            id="search_box"
                                            className="placeholder:text-slate-700 block placeholder:text-sm bg-white w-full rounded-md py-3 px-4 shadow-sm outline-none sm:text-sm"
                                            placeholder="Search by Dua Name"
                                            type="text"
                                            name="search"
                                        />
                                        <button
                                            type="submit"
                                            className="flex items-center justify-center bg-gray-100 dark:bg-dark-bg-dark md-min:dark:hover:text-gray-400 dark:text-gray-500 cursor-pointer md-minhover:bg-gray-200 hover:text-gray-500 text-gray-400 px-4 py-[9px] rounded-md md-min:absolute right-1 top-1 sm-max:focus:bg-green-700"
                                        >
                                            <span className="flex items-center sm-max:hidden text-gray-500 text-xl">
                                                <AiOutlineSearch />
                                            </span>
                                            <p className="hidden sm-max:block sm-max:text-white">
                                                Search
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex items-center flex-row justify-end gap-3">
                        <div className="w-10 h-10 rounded-full">
                            <img
                                src="https://duaruqyah.com/assets/settings/profile.svg"
                                alt="profile pic"
                            />
                        </div>
                        <TbArrowBadgeDownFilled />
                    </div>
                </div>
            </div>
        </>
    );
}
