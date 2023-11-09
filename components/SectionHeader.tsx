"use client";
export default function SectionHeader({
    sectionName,
    id,
}: {
    sectionName: string;
    id: string;
}) {
    return (
        <div
            id={id}
            className="flex undefined mb-5 flex-row bg-white rounded-xl px-5 py-4 justify-start items-center dark:bg-dark-bg"
        >
            <p className="text-title font-medium leading-[25px] dark:text-dark-text">
                <span className="font-medium leading-[25px] text-green-500">
                    Section:{" "}
                </span>
                {sectionName}
            </p>
        </div>
    );
}
