export default function DuaSkeleton() {
    return (
        <div className="w-full h-screen delay-1000 transition duration-1000 ease-linear col-start-2 overflow-y-scroll animate-pulse">
            <div>
                <div className="mb-5 bg-white rounded-xl px-5 py-4">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48"></div>
                </div>
                {Array.from(Array(5).keys()).map((i) => (
                    <div key={i} className="bg-white rounded-xl mb-5">
                        <div className="p-6">
                            <div className="flex flex-row justify-start items-center gap-5">
                                <div className="h-10 bg-gray-200 rounded-full w-10"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full w-48"></div>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-5 w-full mt-5">
                                <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full w-1/2"></div>
                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full w-48 mt-20"></div>
                            <div className="flex items-center justify-between mt-10">
                                <div className="h-10 bg-gray-200 rounded-full w-10"></div>
                                <div className="flex justify-between items-center gap-5">
                                    {Array.from(Array(3).keys()).map((i) => (
                                        <div className="h-10 bg-gray-200 rounded-xl w-10"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
