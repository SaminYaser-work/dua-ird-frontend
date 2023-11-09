"use client";
export default function Error() {
    return (
        <div className="col-span-2 grid grid-cols-[350px,auto] gap-10 mt-10 ml-8">
            {/* Categories section */}
            <div className="w-[350px] fixed bg-white h-[85vh] rounded-2xl">
                <div className="fixed w-[350px] bg-primary justify-center rounded-t-2xl items-center h-14 flex flex-row px-5 bg-green-600">
                    <p className="text-base text-white mx-auto">Categories</p>
                </div>
                <p className="mt-20 text-center text-red-500 text-xl">Error</p>
            </div>

            <div className="w-full h-screen delay-1000 transition duration-1000 ease-linear col-start-2 overflow-y-scroll">
                <p className="text-center text-red-500 text-2xl">Error</p>
            </div>
        </div>
    );
}
