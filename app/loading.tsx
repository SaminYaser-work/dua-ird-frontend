import CategorySkeleton from "@/components/CategorySkeleton";
import DuaSkeleton from "@/components/DuaSkeleton";

export default function Loading() {
    return (
        <div className="col-span-2 grid grid-cols-[350px,auto] gap-10 mt-10 ml-8 mr-8">
            {/* Categories section */}
            <div className="w-[350px] fixed bg-white h-[85vh] rounded-2xl">
                <div className="fixed w-[350px] bg-primary justify-center rounded-t-2xl items-center h-14 flex flex-row px-5 bg-green-600">
                    <p className="text-base text-white mx-auto">Categories</p>
                </div>
                <CategorySkeleton />
            </div>

            <DuaSkeleton />
        </div>
    );
}
