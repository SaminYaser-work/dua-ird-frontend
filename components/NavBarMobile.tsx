export default async function NavBarMobile() {
    return (
        <div className="fixed bottom-0 z-0 flex-col items-end flex md:hidden">
            <div className="flex flex-row p-6 bg-white w-screen h-16 rounded-t-3xl shadow-[rgba(0,0,15,0.1)_0px_-3px_10px_0px] items-center justify-between">
                <div className="p-2 flex flex-row items-center">
                    <img
                        src="https://duaruqyah.com/assets/nav/home.svg"
                        alt="path"
                        className="h-5 w-5"
                    />
                </div>
                <div className="p-2 flex flex-row items-center">
                    <img
                        src="https://duaruqyah.com/assets/nav/alldua.svg"
                        alt="path"
                        className="h-5 w-5"
                    />
                </div>
                <div className="p-2 flex flex-row items-center">
                    <img
                        src="https://duaruqyah.com/assets/nav/memorize.svg"
                        alt="path"
                        className="h-5 w-5"
                    />
                </div>
                <div className="p-2 flex flex-row items-center">
                    <img
                        src="https://duaruqyah.com/assets/nav/bookmark.svg"
                        alt="path"
                        className="h-5 w-5"
                    />
                </div>
                <div className="p-2 flex flex-row items-center">
                    <img
                        src="https://duaruqyah.com/assets/nav/profile.svg"
                        alt="path"
                        className="h-6 w-6"
                    />
                </div>
            </div>
        </div>
    );
}
