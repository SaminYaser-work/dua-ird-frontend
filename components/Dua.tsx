"use client";
import { IoCopyOutline } from "react-icons/io5";
import { BsBookmark, BsLightbulb, BsShare } from "react-icons/bs";
import { LuAlertOctagon } from "react-icons/lu";
import PlayAudio from "./PlayAudio";

export interface IDua {
    id: number;
    cat_id: number;
    subcat_id: number;
    dua_id: number;
    dua_name_bn: null | string;
    dua_name_en: null | string;
    top_bn: null | string;
    top_en: null | string;
    dua_arabic: null | string;
    dua_indopak: null | string;
    clean_arabic: null | string;
    transliteration_bn: null | string;
    transliteration_en: null | string;
    translation_bn: null | string;
    translation_en: null | string;
    bottom_bn: null | string;
    bottom_en: null | string;
    refference_bn: null | string;
    refference_en: null | string;
    audio: null | string;
}

export default function Dua({ dua, idx }: { dua: IDua; idx: number }) {
    return (
        <div className="bg-white rounded-xl mb-5" id={"dua_" + dua.dua_id}>
            <div className="p-6">
                <div className="flex flex-row justify-start items-center ">
                    <img
                        src="https://duaruqyah.com/assets/duacard.svg"
                        alt="dua card"
                        className="mr-5"
                    />
                    <p className="font-medium text-green-500">
                        {idx + ". " + dua.dua_name_en}
                    </p>
                </div>
                <div className="flex flex-col justify-start items-start gap-5">
                    <div className="w-full">
                        <p className="mt-5 text-justify leading-8 font-medium text-lg">
                            <span>{dua.top_en}</span>
                        </p>
                        {dua.dua_arabic && (
                            <p
                                dir="rtl"
                                className="mt-5 text-justify leading-8 font-medium text-3xl"
                            >
                                <span>{dua.dua_arabic}</span>
                            </p>
                        )}
                        {dua.transliteration_en && (
                            <p className="mt-5 text-justify leading-8 font-medium text-lg italic">
                                Transliteration:
                                <span>{" " + dua.transliteration_en}</span>
                            </p>
                        )}
                        {dua.transliteration_en && (
                            <p className="mt-5 text-justify leading-8 font-medium text-lg">
                                Translation:&nbsp;
                                <span>{dua.translation_en}</span>
                            </p>
                        )}
                    </div>
                    <div>
                        <p className="text-green-500">Reference:</p>
                        <p className="font-medium text-lg">
                            {dua.refference_en}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between px-6 py-10">
                <div>{dua.audio && <PlayAudio audioLink={dua.audio} />}</div>
                <div className="flex flex-row items-center justify-end gap-8 text-xl">
                    <div
                        onClick={(e) => {
                            navigator.clipboard.writeText(
                                `
                            ${dua.dua_name_en}

                            ${dua.top_en}

                            ${dua.dua_arabic || ""}

                            ${dua.transliteration_en || ""}

                            ${dua.translation_en || ""}

                            Reference:
                            ${dua.refference_en}
                            `
                            );
                        }}
                    >
                        <IoCopyOutline className="cursor-pointer" />
                    </div>
                    <BsBookmark className="cursor-pointer" />
                    <BsLightbulb className="cursor-pointer" />
                    <BsShare className="cursor-pointer" />
                    <LuAlertOctagon className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
}
