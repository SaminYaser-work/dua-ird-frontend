const img = [
    "https://duaruqyah.com/assets/sidebar/general.svg",
    "https://duaruqyah.com/assets/sidebar/font.svg",
    "https://duaruqyah.com/assets/sidebar/font.svg",
];

const labels = ["General Settings", "Font Settings", "Appearance Settings"];

export default function RightBar() {
    return (
        <aside className="hidden 2xl:block 3xl:block 3xl:col-start-4 3xl:-z-[17] z-[-2] bg-white rounded-3xl h-[90vh] mt-10">
            <div className="flex justify-center items-center flex-col py-20 px-5 gap-5">
                <h1>Settings</h1>
                <div className="w-full flex items-center justify-between flex-col">
                    <div className="w-full flex items-center justify-start bg-slate-100 border-l-green-500 border-l-4 px-5 py-3">
                        <div className="w-10 h-10 bg-slate-300 rounded-full grid place-items-center">
                            <img
                                src="https://duaruqyah.com/assets/sidebar/color/language.svg"
                                alt="language"
                            />
                        </div>
                        <p className="text-green-500 text-sm ml-5">
                            Language Settings
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 border-[1px] bg-slate-50 border-t-0 rounded-b-2xl border-slate-300 w-full px-2 py-5">
                        <button className="text-white rounded-md bg-green-500 px-5 py-2">
                            English
                        </button>
                        <button className="text-black border border-solid border-[#cccdcf] rounded-md px-5 py-2">
                            Bengali
                        </button>
                    </div>
                </div>

                {img.map((i, idx) => (
                    <div
                        key={idx}
                        className="w-full px-5 py-3 flex items-center justify-start bg-slate-100 rounded-2xl"
                    >
                        <div className="w-10 h-10 bg-slate-300 rounded-full grid place-items-center">
                            <img src={i} alt={"rightbar_img_" + idx} />
                        </div>
                        <p className="ml-5 text-sm">{labels[idx]}</p>
                    </div>
                ))}
            </div>
        </aside>
    );
}
