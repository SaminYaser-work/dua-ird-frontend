import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Heading from "@/components/Heading";
import RightBar from "@/components/RightBar";
import NavBarMobile from "@/components/NavBarMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dua & Ruqyah | All Duas Collection",
    description: "IRD Foundation",
    icons: "https://duaruqyah.com/assets/dua-logo.svg",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="z-0 lg:fixed lg:inset-x-0 xl:fixed xl:inset-x-0 xl:p-6 xl:pb-0 2xl:px-10 2xl:pt-6 2xl:fixed 2xl:inset-x-0 3xl:p-10 3xl:pb-0 3xl:fixed 3xl:inset-x-0">
                    <div className="relative grid sm-max:overflow-auto xs:flex xs:flex-col xs:gap-0 sm:gap-0 xl:grid-rows-[46px,1fr] 2xl:grid-rows-[46px,1fr] 3xl:grid-rows-[46px,1fr] z-0 xl:grid-cols-[105px,350px,1fr] 2xl:grid-cols-[105px,350px,1fr,370px] 3xl:grid-cols-[105px,350px,1fr,400px]">
                        <NavBar />
                        <Heading />
                        {children}
                        <RightBar />
                    </div>
                </div>
                <NavBarMobile />
            </body>
        </html>
    );
}
