"use client";
import { useRef, useState } from "react";

const buildTimeFormat = (time: number) => {
    const symbol = "0";
    const length = 2;
    return (new Array(length + 1).join(symbol) + time).slice(-length);
};

const getTime = (maxTime: number, currentTime: number) => {
    const diff = maxTime - currentTime;
    const minutes: number = Math.floor(diff / 60);
    const seconds = Math.floor(diff - minutes * 60);

    const remainingTime =
        buildTimeFormat(minutes) + ":" + buildTimeFormat(seconds);

    return remainingTime;
};

export default function PlayAudio({ audioLink }: { audioLink: string }) {
    const [isLoop, setIsLoop] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const audio = useRef<HTMLAudioElement>(null);
    const playButton = useRef<HTMLImageElement>(null);

    const togglePlay = () => {
        if (!audio.current || !playButton.current) return;

        setIsPlaying((prev) => !prev);
        if (isPlaying) {
            audio.current.pause();
            playButton.current.src =
                "https://duaruqyah.com/assets/others/audiobtn.svg";
        } else {
            audio.current.play();
            playButton.current.src =
                "https://duaruqyah.com/assets/others/pause.svg";
        }
    };

    return (
        <div className="flex flex-row justify-start items-center gap-3">
            <audio
                ref={audio}
                onEnded={(e) => {
                    togglePlay();
                }}
                onTimeUpdate={(e) => {
                    setCurrentTime(e.currentTarget.currentTime);
                }}
                src={audioLink}
                loop={isLoop}
            ></audio>
            <img
                ref={playButton}
                className="cursor-pointer"
                onClick={(e) => togglePlay()}
                src="https://duaruqyah.com/assets/others/audiobtn.svg"
                alt="play button"
            />
            <input
                type="range"
                hidden={!isPlaying}
                min={0}
                max={audio.current?.duration.toString() || 0}
                value={currentTime}
                onChange={(e) => {
                    if (!audio.current) return;
                    audio.current.currentTime = parseFloat(e.target.value);
                    setCurrentTime(parseFloat(e.target.value));
                }}
            />
            <p className="text-slate-400 text-sm w-8" hidden={!isPlaying}>
                {getTime(audio.current?.duration || 0, currentTime).toString()}
            </p>
            <img
                className="cursor-pointer w-8 opacity-60"
                hidden={!isPlaying}
                alt="suffle"
                src="https://duaruqyah.com/assets/memorize/suffle.svg"
                onClick={(e) => {
                    setIsLoop((prev) => !prev);
                    e.currentTarget.classList.toggle("opacity-60");
                }}
            ></img>
        </div>
    );
}
