"use client";

import  {Fredoka} from "next/font/google";
import useSound from "use-sound";
import Draggable from "react-draggable";
import {useRef, useState, useEffect} from "react";
import Image from "next/image";

const fredoka = Fredoka({
    subsets: ["latin"],
    weight: ["400", "500", "700"], // pick the weights you want
});


export default function Home() {

    const [playClick] = useSound("/SoftClick.mp3", {volume: 0.5});
    const [playCloseClick] = useSound("/SoftCloseClick.mp3", {volume: 0.95});
    const [showWindow, setShowWindow] = useState(false);
    const [showWindow2, setShowWindow2] = useState(false);
    const [showWindow3, setShowWindow3] = useState(false);
    const [showWindow4, setShowWindow4] = useState(false);
    const [showWindow5, setShowWindow5] = useState(false);


    const handleButtonClick = () => {
        playClick();
        setShowWindow(true);
    };

    const handleButtonClick2 = () => {
        playClick();
        setShowWindow2(true);
    };

    const handleButtonClick3 = () => {
        playClick();
        setShowWindow3(true);
    };

    const handleButtonClick4 = () => {
        playClick();
        setShowWindow4(true);
    };

    const handleButtonClick5 = () => {
        playClick();
        setShowWindow5(true);
    };
    // 👇 Add this ref
    const dragRef = useRef<HTMLDivElement>(null);
    const dragRef2 = useRef<HTMLDivElement>(null);
    const dragRef3 = useRef<HTMLDivElement>(null);
    const dragRef4 = useRef<HTMLDivElement>(null);
    const dragRef5 = useRef<HTMLDivElement>(null);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Make sure the <audio> ref exists after mount
    useEffect(() => {
        audioRef.current = document.getElementById("bg-music") as HTMLAudioElement;
        if (audioRef.current) {
            audioRef.current.volume = 0.85; // set default volume to 20%
        }
    }, []);

    const toggleMusic = async () => {
        if (!audioRef.current) return;

        try {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.muted = false; // unmute after first click
                await audioRef.current.play();
                setIsPlaying(true);
            }
        } catch (err) {
            console.log("Autoplay blocked:", err);
        }
    };

    const [showAbout, setShowAbout] = useState(false);
    const [showLinks, setShowLinks] = useState(false);
    const [showWork, setShowWork] = useState(false);
    const [showFaq, setShowFaq] = useState(false);
    const [showContact, setShowContact] = useState(false);


    return (
        <div>

            <div className="hidden md:block">
                <div className={`${fredoka.className} flex items-center justify-center min-h-screen`}>

                    <audio id="bg-music" autoPlay muted loop>
                        <source src="/Background.mp3" type="audio/mpeg"/>
                    </audio>

                    {/* Music Toggle Button in Top-Right */}
                    <button onClick={toggleMusic}
                            className="fixed top-10 right-10  text-white p-2 rounded-lg hover:bg-[#A5A58D] transition">
                        <Image src={isPlaying ? "/webp/IconPlay.webp" : "/webp/IconMute.webp"}
                               alt={isPlaying ? "Stop music" : "Play music"}
                               width={400} height={400} className="w-30 h-30"/>
                    </button>

                    <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-[#B7B7A4] text-white px-4 py-2">home</div>
                        <div
                            className="flex flex-col items-center justify-center text-center py-16 px-8 border border-[#B7B7A4] shadow-lg">
                            <h1 className="text-5xl font-light text-[#6B705C]">
                                hi!{" "}
                                <span className="text-[#CB997E]">
                                    i&apos;m Maple
                                </span>
                            </h1>

                            <p className="mt-4 text-lg text-[#A5A58D]">
                                software engineer, attempt at artist and a better person
                            </p>

                            <div className="mt-10 flex gap-10 flex-wrap justify-center">

                                <div
                                    className="flex flex-col items-center cursor-pointer"
                                    onClick={handleButtonClick}
                                >
                                    {/* Circle image */}
                                    <div
                                        className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                                        <Image src="/webp/AboutIcon.webp" alt="about" className="w-full h-full object-cover"
                                               width={400} height={400}/>
                                    </div>

                                    {/* Label */}
                                    <span className="mt-3 text-base font-medium text-[#A5A58D]">about</span>
                                </div>

                                <div
                                    className="flex flex-col items-center cursor-pointer"
                                    onClick={handleButtonClick2}
                                >
                                    {/* Circle image */}
                                    <div
                                        className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                                        <Image src="/webp/LinkIcon.webp" alt="about" className="w-full h-full object-cover"
                                               width={400} height={400}/>
                                    </div>

                                    {/* Label */}
                                    <span className="mt-3 text-base font-medium text-[#A5A58D]">links</span>
                                </div>

                                <div className="flex flex-col items-center cursor-pointer" onClick={handleButtonClick3}>
                                    {/* Circle image */}
                                    <div
                                        className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                                        <Image
                                            src="/webp/WorkIcon.webp"
                                            alt="about"
                                            className="w-full h-full object-cover"
                                            width={400}
                                            height={400}
                                        />
                                    </div>

                                    {/* Label */}
                                    <span className="mt-3 text-base font-medium text-[#A5A58D]">work</span>
                                </div>

                                <div
                                    className="flex flex-col items-center cursor-pointer"
                                    onClick={handleButtonClick4}
                                >
                                    {/* Circle image */}
                                    <div
                                        className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                                        <Image
                                            src="/webp/FaqIcon.webp"
                                            alt="about"
                                            className="w-full h-full object-cover"
                                            width={400}
                                            height={400}
                                        />
                                    </div>

                                    {/* Label */}
                                    <span className="mt-3 text-base font-medium text-[#A5A58D]">faq</span>
                                </div>

                                <div
                                    className="flex flex-col items-center cursor-pointer"
                                    onClick={handleButtonClick5}
                                >
                                    {/* Circle image */}
                                    <div
                                        className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                                        <Image
                                            src="/webp/IconEmail.webp"
                                            alt="about"
                                            className="w-full h-full object-cover"
                                            width={400}
                                            height={400}
                                        />
                                    </div>

                                    {/* Label */}
                                    <span className="mt-3 text-base font-medium text-[#A5A58D]">contact</span>
                                </div>
                            </div>
                        </div>

                        {/* ✅ Fixed Draggable with nodeRef */}
                        {showWindow && (
                            <Draggable handle=".drag-handle" nodeRef={dragRef}>
                                <div
                                    ref={dragRef}
                                    className="absolute top-30 left-20 w-[640px] max-h-[70vh] bg-white rounded-xl shadow-lg border border-gray-300 flex flex-col"
                                >
                                    {/* Header */}
                                    <div
                                        className="drag-handle cursor-move bg-[#B7B7A4] px-4 py-2 rounded-t-xl flex justify-between items-center">
                                        <span>About Me & The Page</span>
                                        <button
                                            onClick={() => {
                                                playCloseClick(); // 🔊 play sound
                                                setShowWindow(false); // ❌ close window

                                            }}
                                            className="hover:bg-red-500 px-2 py-1 rounded"
                                        >
                                            [✕]
                                        </button>
                                    </div>

                                    {/* Profile Section */}
                                    <div className="flex items-center justify-center space-x-6 p-6">
                                        {/* Circle image */}
                                        <Image
                                            className="h-40 w-40 rounded-full object-cover shadow-lg"
                                            src="/MelMaincra.png"
                                            alt="Melanie en Minecraft"
                                            width={400}
                                            height={400}
                                        />

                                        {/* Text block centered */}
                                        <div className="flex flex-col items-center text-center">
                                            <strong className="text-2xl text-[#CB997E] font-medium">Juan
                                                Guerrero</strong>
                                            <span className="text-lg text-gray-500">Currently studying Software Engineer at Manuela Beltran University</span>
                                            <a></a>
                                            <span className="text-lg text-gray-500"></span>
                                        </div>
                                    </div>


                                    {/* Scrollable Content */}
                                    <div className="p-4 space-y-4 overflow-y-auto">

                                        {/* Your About Section */}
                                        <div className="space-y-2">
                                            <h2 className="text-xl text-[#6B705C]">About this webpage</h2>
                                            <p className="text-gray-700 leading-relaxed">
                                                This webpage wasn’t entirely my original idea — it’s inspired by{" "}
                                                <a
                                                    href="https://www.sharyap.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-indigo-500 underline hover:text-indigo-600"
                                                >
                                                    Shar’s website
                                                </a>
                                                . She really inspired me to make a page of my own because I felt her
                                                vibes were similar to mine. Of course, I wanted to create something
                                                that’s about me, my work, and my personality — but I owe the
                                                inspiration to her.
                                            </p>
                                        </div>

                                        {/* Responsive YouTube embed */}
                                        <div className="relative w-full" style={{paddingBottom: "56.25%"}}>
                                            <iframe
                                                src="https://www.youtube.com/embed/_tWh4cYCTv0?si=QokSeQDYPIpqXT93"
                                                title="YouTube video player"
                                                className="absolute top-0 left-0 w-full h-full rounded-md"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen
                                            ></iframe>
                                        </div>

                                        <div className="space-y-6">
                                            {/* About Me */}
                                            <div className="space-y-2">
                                                <h2 className="text-2xl text-[#6B705C] font-medium">About Me</h2>
                                                <p className="text-gray-700 leading-relaxed">
                                                    Hi! I’m <span className="font-medium text-[#CB997E]">Maple</span> —
                                                    or
                                                    at
                                                    least, that’s the name
                                                    most people know me by online. This page is my personal space to
                                                    share a
                                                    little about who I am, what I do, and the things I enjoy.
                                                </p>
                                            </div>

                                            {/* Education */}
                                            <div className="space-y-2">
                                                <h3 className="text-xl text-[#6B705C] font-medium">Education</h3>
                                                <ul className="pl-6 space-y-1 text-gray-700 leading-relaxed">
                                                    <li>
                                                        Currently studying at{" "}
                                                        <span className="font-medium">Manuela Beltrán University</span>
                                                    </li>
                                                    <li>
                                                        Collection of degrees and certifications on{" "}
                                                        <a
                                                            href="https://www.credly.com/users/juan-jose-guerrero-ramirez/badges#credly"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-indigo-500 underline hover:text-indigo-600"
                                                        >
                                                            Credly
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>


                                            {/* Hobbies */}
                                            <div className="space-y-2">
                                                <h3 className="text-xl text-[#6B705C] font-medium">Hobbies</h3>
                                                <p className="text-gray-700">Some of the things I enjoy in my free
                                                    time:</p>
                                                <ul className=" pl-6 space-y-1 text-gray-700">
                                                    <li>
                                                        Playing competitive games with friends like{" "}
                                                        <span
                                                            className="italic">CS:GO, Valorant, League of Legends</span>
                                                    </li>
                                                    <li>
                                                        Puzzle games such as <span
                                                        className="italic">Baba Is You</span> or
                                                        Escape Rooms
                                                    </li>
                                                    <li>
                                                        Co-op games in general — especially when I can play with
                                                        friends,
                                                        like{" "}
                                                        <span
                                                            className="italic"> GTFO, Terraria, Minecraft, Factorio      </span>{" "}
                                                        (and plenty more to add here)
                                                    </li>
                                                    <li>
                                                        I’m currently teaching myself how to play guitar and how to
                                                        draw.
                                                        I’m not very good at either (yet), but I always try my best.
                                                    </li>
                                                </ul>
                                            </div>


                                            {/* Languages */}
                                            <div className="space-y-2">
                                                <h3 className="text-xl text-[#6B705C] font-medium">Languages</h3>
                                                <p className="text-gray-700 leading-relaxed">
                                                    I speak <span className="font-medium">English</span> and{" "}
                                                    <span className="font-medium">Spanish</span>.
                                                    I also learned some <span className="font-medium">German</span> back
                                                    in
                                                    school, but I’ve forgotten
                                                    most of it due to lack of practice ; ^;
                                                </p>
                                            </div>
                                        </div>


                                        <p className="text-sm text-gray-500">You can click the [X] to close me, also
                                            hii,
                                            thanks
                                            for maybe reading all of that.</p>
                                    </div>

                                </div>
                            </Draggable>
                        )}

                        {showWindow2 && (
                            <Draggable handle=".drag-handle" nodeRef={dragRef2}>
                                <div
                                    ref={dragRef2}
                                    className="absolute top-70 left-100 w-[640px] max-h-[70vh] bg-white rounded-xl shadow-lg border border-gray-300 flex flex-col"
                                >
                                    {/* Header */}
                                    <div
                                        className="drag-handle cursor-move bg-[#B7B7A4] px-4 py-2 rounded-t-xl flex justify-between items-center">
                                        <span>Links (i really don&#39;t use Twitter at all)</span>
                                        <button
                                            onClick={() => {
                                                playCloseClick(); // 🔊 play sound
                                                setShowWindow2(false); // ❌ close window
                                            }}
                                            className="hover:bg-red-500 px-2 py-1 rounded"
                                        >
                                            [✕]
                                        </button>
                                    </div>

                                    {/* Profile Section */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 text-gray-700">
                                        {/* Instagram */}
                                        <a
                                            href="https://www.instagram.com/i.wnabeyours/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-300 transition"
                                        >
                                            <Image
                                                src="/webp/InstaIcon.webp"
                                                alt="Instagram"
                                                className="w-12 h-12 mb-2"
                                                width={400}
                                                height={400}
                                            />
                                            <span>Instagram</span>
                                        </a>

                                        {/* YouTube */}
                                        <a
                                            href="https://www.youtube.com/@HeyItsJustMaple"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-300 transition"
                                        >
                                            <Image
                                                src="/webp/YoutubeIcon.webp"
                                                alt="YouTube"
                                                className="w-12 h-12 mb-2"
                                                width={400}
                                                height={400}
                                            />
                                            <span>YouTube</span>
                                        </a>

                                        {/* Discord (no link, just display) */}
                                        <div
                                            className="bg-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">

                                            <span>Discord</span>
                                            <span className="text-sm text-gray-600 mt-1">MapleHugs</span>
                                        </div>

                                        {/* Twitter */}
                                        <a
                                            href="https://x.com/cozymaplehugs"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-300 transition"
                                        >
                                            <Image
                                                src="/webp/TwitterIcon.webp"
                                                alt="Twitter"
                                                className="w-12 h-12 mb-2"
                                                width={400}
                                                height={400}
                                            />
                                            <span>X</span>
                                        </a>
                                    </div>

                                </div>
                            </Draggable>
                        )}

                        {showWindow3 && (
                            <Draggable handle=".drag-handle" nodeRef={dragRef3}>
                                <div
                                    ref={dragRef3}
                                    className="absolute top-70 right-100 w-[640px] max-h-[70vh] bg-white rounded-xl shadow-lg border border-gray-300 flex flex-col"
                                >
                                    {/* Header */}
                                    <div
                                        className="drag-handle cursor-move bg-[#B7B7A4] px-4 py-2 rounded-t-xl flex justify-between items-center">
                                        <span>Work</span>
                                        <button
                                            onClick={() => {
                                                playCloseClick(); // 🔊 play sound
                                                setShowWindow3(false); // ❌ close window
                                            }}
                                            className="hover:bg-red-500 px-2 py-1 rounded"
                                        >
                                            [✕]
                                        </button>
                                    </div>

                                    <div className="overflow-y-auto">
                                        <div className=" flex gap-8 text-sm text-gray-700">
                                            {/* Left Side */}
                                            <div className="flex-1">
                                                <h2 className="text-center text-xl text-[#6B705C]">Programs I have
                                                    used</h2>
                                                <div
                                                    className="grid grid-cols-3 gap-4 justify-items-center items-center">
                                                    <div
                                                        className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> IntelliJ
                                                    </div>
                                                    <div
                                                        className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> WebStorm
                                                    </div>
                                                    <div
                                                        className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> PyCharm
                                                    </div>
                                                    <div
                                                        className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> Git
                                                        & Github
                                                    </div>
                                                    <div
                                                        className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> Datagrip
                                                    </div>
                                                    <div
                                                        className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> MySQL
                                                    </div>

                                                </div>
                                            </div>

                                            {/* Right Side */}
                                            <div className="flex-1">
                                                <h2 className="text-center text-xl text-[#6B705C]">Languages I have
                                                    used</h2>
                                                <div
                                                    className="grid grid-cols-3 gap-4 justify-items-center items-center">
                                                    <div
                                                        className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> Java
                                                    </div>
                                                    <div
                                                        className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> Python
                                                    </div>
                                                    <div
                                                        className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> JavaScript
                                                    </div>
                                                    <div
                                                        className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> HTML/CSS
                                                    </div>
                                                    <div
                                                        className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> MySQL
                                                    </div>
                                                    <div
                                                        className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> Next.Js
                                                    </div>
                                                    <div
                                                        className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> React
                                                    </div>
                                                    <div
                                                        className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> Spring
                                                        Boot
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-1 max-h-[50vh] space-y-4 p-2">
                                            {/* Development Projects */}
                                            <div
                                                className="flex flex-col items-center justify-center p-6 text-center space-y-2">
                                                <h2 className="text-xl text-[#6B705C] font-medium">Development
                                                    Projects</h2>
                                                <p className="text-gray-700 leading-relaxed">
                                                    I have made many projects for college and some personal projects.
                                                    You
                                                    can
                                                    see them on my{' '}
                                                    <a
                                                        href="https://github.com/maplehugs"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-indigo-500 underline hover:text-indigo-600"
                                                    >
                                                        GitHub
                                                    </a>. Some are private or not well organized because at the time I
                                                    didn’t
                                                    know how to use GitHub properly, so most of my projects are hidden
                                                    or
                                                    contain sensitive data.
                                                </p>
                                            </div>

                                            {/* Drawings Section */}
                                            <div
                                                className="flex flex-col items-center justify-center p-6 text-center space-y-2">
                                                <h2 className="text-xl text-[#6B705C] font-medium">My Drawings</h2>
                                                <p className="text-gray-700 leading-relaxed">
                                                    Here are some of the little drawings I’ve made. I enjoy
                                                    experimenting
                                                    with
                                                    sketching and digital art.
                                                </p>
                                                <div
                                                    className="grid grid-cols-3 gap-4 justify-items-center items-center">
                                                    {/* Replace src with your drawings */}
                                                    <Image src="/drawing1.png" alt="Drawing 1"
                                                           className="w-24 h-24 object-cover rounded-lg shadow-md"
                                                           width={400}
                                                           height={400}
                                                    />
                                                    <Image src="/drawing2.png" alt="Drawing 2"
                                                           className="w-24 h-24 object-cover rounded-lg shadow-md"
                                                           width={400}
                                                           height={400}
                                                    />
                                                    <Image src="/drawing3.png" alt="Drawing 3"
                                                           className="w-24 h-24 object-cover rounded-lg shadow-md"
                                                           width={400}
                                                           height={400}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Draggable>
                        )}

                        {showWindow4 && (
                            <Draggable handle=".drag-handle" nodeRef={dragRef4}>
                                <div
                                    ref={dragRef4}
                                    className="absolute top-30 right-20 w-[640px] max-h-[70vh] bg-white rounded-xl shadow-lg border border-gray-300 flex flex-col"
                                >
                                    {/* Header */}
                                    <div
                                        className="drag-handle cursor-move bg-[#B7B7A4] px-4 py-2 rounded-t-xl flex justify-between items-center">
                                        <span>Frequently Asked Questions</span>
                                        <button onClick={() => {
                                            playCloseClick();
                                            setShowWindow4(false);
                                        }} className="hover:bg-red-500 px-2 py-1 rounded">
                                            [✕]
                                        </button>
                                    </div>

                                    {/* Centered Content */}
                                    <div
                                        className="flex flex-col items-center justify-center p-6 text-center space-y-2">
                                        <h2 className="text-2xl text-[#6B705C] font-medium">Questions!</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            if I ever get a lot of similar questions, I’ll update this section
                                        </p>
                                    </div>

                                </div>
                            </Draggable>
                        )}

                        {showWindow5 && (
                            <Draggable handle=".drag-handle" nodeRef={dragRef5}>
                                <div ref={dragRef5}
                                     className="absolute top-[120px] left-20 w-[640px] max-h-[70vh] bg-white rounded-xl shadow-lg border border-gray-300 flex flex-col">
                                    {/* Header */}
                                    <div
                                        className="drag-handle cursor-move bg-[#B7B7A4] px-4 py-2 rounded-t-xl flex justify-between items-center">
                                        <span>Contact</span>
                                        <button
                                            onClick={() => {
                                                playCloseClick(); // 🔊 play sound
                                                setShowWindow5(false); // ❌ close window
                                            }} className="hover:bg-red-500 px-2 py-1 rounded">
                                            [✕]
                                        </button>
                                    </div>
                                    {/* Centered Text */}
                                    <div
                                        className="flex flex-col flex-1 items-center justify-center p-6 space-y-4 text-center">
                                        {/* Main title */}
                                        <span className="text-3xl font-medium text-gray-700">
                                            You got mail (actually it&#39;s me)
                                        </span>
                                        {/* Explanatory text */}
                                        <span className="text-gray-600 text-base leading-relaxed">
                                            It&#39;s better to contact me using email since I can filter messages and see the ones sent to my custom domain.
                                            You can also try contacting me via Instagram. I rarely accept or check Discord friend requests from people I don&#39;t know, and I don&#39;t use Twitter at all.
                                        </span>
                                        {/* Email */}
                                        <p className="text-gray-700"> Hey, if you want to reach out, my email is:{" "}
                                            <span
                                                className="text-[#DDBEA9] text-base font-medium cursor-pointer underline"
                                                onClick={() => navigator.clipboard.writeText("me@5maple.com")}>
                                                me@5maple.com
                                            </span>
                                        </p>
                                    </div>

                                </div>
                            </Draggable>
                        )}
                    </div>
                    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-500 opacity-70">
                        © 2025 Maple&apos;s
                    </div>
                </div>
            </div>

            {/* Mobile UI */}
            <div className="block md:hidden min-h-screen flex items-center justify-center ">

                <audio id="bg-music" autoPlay muted loop>
                    <source src="/Background.mp3" type="audio/mpeg"/>
                </audio>

                {/* Music Toggle Button in Top-Right */}
                <button onClick={toggleMusic}
                        className="fixed top-10 right-10  text-white p-2 rounded-lg hover:bg-[#A5A58D] transition">
                    <Image src={isPlaying ? "/webp/IconPlay.webp" : "/webp/IconMute.webp"}
                           alt={isPlaying ? "Stop music" : "Play music"}
                           width={400} height={400} className="w-30 h-30"/>
                </button>

                <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden content-center">
                    <div className="bg-[#B7B7A4] text-white px-4 py-2">home</div>
                    <div className="flex flex-col items-center justify-center text-center py-10 px-4">
                        <h1 className="text-3xl font-light text-[#6B705C]">
                            hi!{" "}
                            <span className="text-[#CB997E]">i&apos;m Maple</span>
                        </h1>

                        <p className="mt-4 text-base text-[#A5A58D]">
                            software engineer, attempt at artist and a better person
                        </p>

                        {/* Mobile grid for buttons */}
                        <div className="mt-8 grid grid-cols-2 gap-6 w-full max-w-md">
                            {/* About */}
                            <div
                                className="flex flex-col items-center cursor-pointer"
                                onClick={() => {
                                    playClick();       // call your click sound function
                                    setShowAbout(true); // then open About
                                }}
                            >
                                <div
                                    className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                                    <Image src="/webp/AboutIcon.webp" alt="about" width={400} height={400}/>
                                </div>
                                <span className="mt-2 text-sm font-medium text-[#A5A58D]">about</span>
                            </div>


                            {/* Links */}
                            <div className="flex flex-col items-center cursor-pointer"
                                 onClick={() => {
                                     playClick()
                                     setShowLinks(true)
                                 }}>
                                <div
                                    className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                                    <Image src="/webp/LinkIcon.webp" alt="links" width={400} height={400}/>
                                </div>
                                <span className="mt-2 text-sm font-medium text-[#A5A58D]">links</span>
                            </div>

                            {/* Work */}
                            <div className="flex flex-col items-center cursor-pointer"
                                 onClick={() => {
                                     playClick()
                                     setShowWork(true)
                                 }}
                            >
                                <div
                                    className="w-20 h-20 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                                    <Image src="/webp/WorkIcon.webp" alt="work" className="w-full h-full object-cover"
                                           width={400} height={400}/>
                                </div>
                                <span className="mt-2 text-sm font-medium text-[#A5A58D]">work</span>
                            </div>

                            {/* FAQ */}
                            <div className="flex flex-col items-center cursor-pointer" onClick={() => {
                                setShowFaq(true)
                                playClick()
                            }}>
                                <div
                                    className="w-20 h-20 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                                    <Image src="/webp/FaqIcon.webp" alt="faq" className="w-full h-full object-cover"
                                           width={400} height={400}/>
                                </div>
                                <span className="mt-2 text-sm font-medium text-[#A5A58D]">faq</span>
                            </div>

                            {/* Contact (spans full row if odd count) */}
                            <div className="flex flex-col items-center cursor-pointer col-span-2"
                                 onClick={() => {
                                     playClick()
                                     setShowContact(true)}}>
                                <div
                                    className="w-20 h-20 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                                    <Image src="/webp/IconEmail.webp" alt="contact" className="w-full h-full object-cover"
                                           width={400} height={400}/>
                                </div>
                                <span className="mt-2 text-sm font-medium text-[#A5A58D]">contact</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Sheet */}
                {/* About */}
                <div
                    className={`fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-in-out ${showAbout ? "translate-y-0" : "translate-y-full"}`}>
                    <div className="relative bg-white rounded-t-xl shadow-lg max-h-[70vh] flex flex-col">
                        {/* Header / Drag handle */}
                        <div
                            className="cursor-move bg-[#B7B7A4] px-4 py-2 rounded-t-xl flex justify-between items-center relative">
                            <span>About Me & The Page</span>
                            <button className="absolute top-2 right-4 text-gray-400 hover:text-gray-600"
                                    onClick={() => {
                                        playCloseClick()
                                        setShowAbout(false)}}>
                                [✕]
                            </button>
                        </div>

                        {/* Scrollable content */}

                        <div className="flex items-center justify-center space-x-6 p-6">
                            {/* Circle image */}
                            <Image
                                className="h-40 w-40 rounded-full object-cover shadow-lg"
                                src="/MelMaincra.png"
                                alt="Melanie en Minecraft"
                                width={400}
                                height={400}
                            />

                            {/* Text block centered */}
                            <div className="flex flex-col items-center text-center">
                                <strong className="text-2xl text-[#CB997E] font-medium">Juan
                                    Guerrero</strong>
                                <span className="text-lg text-gray-500">Currently studying Software Engineer at Manuela Beltran University</span>
                                <a></a>
                                <span className="text-lg text-gray-500"></span>
                            </div>
                        </div>


                        {/* Scrollable Content */}
                        <div className="p-4 space-y-4 overflow-y-auto">

                            {/* Your About Section */}
                            <div className="space-y-2">
                                <h2 className="text-xl text-[#6B705C]">About this webpage</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    This webpage wasn’t entirely my original idea — it’s inspired by{" "}
                                    <a
                                        href="https://www.sharyap.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-500 underline hover:text-indigo-600"
                                    >
                                        Shar’s website
                                    </a>
                                    . She really inspired me to make a page of my own because I felt her
                                    vibes were similar to mine. Of course, I wanted to create something
                                    that’s about me, my work, and my personality — but I owe the
                                    inspiration to her.
                                </p>
                            </div>

                            {/* Responsive YouTube embed */}
                            <div className="relative w-full" style={{paddingBottom: "56.25%"}}>
                                <iframe
                                    src="https://www.youtube.com/embed/_tWh4cYCTv0?si=QokSeQDYPIpqXT93"
                                    title="YouTube video player"
                                    className="absolute top-0 left-0 w-full h-full rounded-md"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className="space-y-6">
                                {/* About Me */}
                                <div className="space-y-2">
                                    <h2 className="text-2xl text-[#6B705C] font-medium">About Me</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Hi! I’m <span className="font-medium text-[#CB997E]">Maple</span> —
                                        or
                                        at
                                        least, that’s the name
                                        most people know me by online. This page is my personal space to
                                        share a
                                        little about who I am, what I do, and the things I enjoy.
                                    </p>
                                </div>

                                {/* Education */}
                                <div className="space-y-2">
                                    <h3 className="text-xl text-[#6B705C] font-medium">Education</h3>
                                    <ul className="pl-6 space-y-1 text-gray-700 leading-relaxed">
                                        <li>
                                            Currently studying at{" "}
                                            <span className="font-medium">Manuela Beltrán University</span>
                                        </li>
                                        <li>
                                            Collection of degrees and certifications on{" "}
                                            <a
                                                href="https://www.credly.com/users/juan-jose-guerrero-ramirez/badges#credly"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-indigo-500 underline hover:text-indigo-600"
                                            >
                                                Credly
                                            </a>
                                        </li>
                                    </ul>
                                </div>


                                {/* Hobbies */}
                                <div className="space-y-2">
                                    <h3 className="text-xl text-[#6B705C] font-medium">Hobbies</h3>
                                    <p className="text-gray-700">Some of the things I enjoy in my free
                                        time:</p>
                                    <ul className=" pl-6 space-y-1 text-gray-700">
                                        <li>
                                            Playing competitive games with friends like{" "}
                                            <span
                                                className="italic">CS:GO, Valorant, League of Legends</span>
                                        </li>
                                        <li>
                                            Puzzle games such as <span
                                            className="italic">Baba Is You</span> or
                                            Escape Rooms
                                        </li>
                                        <li>
                                            Co-op games in general — especially when I can play with
                                            friends,
                                            like{" "}
                                            <span
                                                className="italic"> GTFO, Terraria, Minecraft, Factorio      </span>{" "}
                                            (and plenty more to add here)
                                        </li>
                                        <li>
                                            I’m currently teaching myself how to play guitar and how to
                                            draw.
                                            I’m not very good at either (yet), but I always try my best.
                                        </li>
                                    </ul>
                                </div>


                                {/* Languages */}
                                <div className="space-y-2">
                                    <h3 className="text-xl text-[#6B705C] font-medium">Languages</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        I speak <span className="font-medium">English</span> and{" "}
                                        <span className="font-medium">Spanish</span>.
                                        I also learned some <span className="font-medium">German</span> back
                                        in
                                        school, but I’ve forgotten
                                        most of it due to lack of practice ; ^;
                                    </p>
                                </div>
                            </div>


                            <p className="text-sm text-gray-500">You can click the [X] to close me, also
                                hii,
                                thanks
                                for maybe reading all of that.</p>
                        </div>

                    </div>
                </div>

                {/* Links */}
                <div
                    className={`fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-in-out ${
                        showLinks ? "translate-y-0" : "translate-y-full"
                    }`}
                >
                    <div className="relative bg-white rounded-t-xl shadow-lg max-h-[70vh] flex flex-col">
                        {/* Header / Drag handle */}
                        <div
                            className="cursor-move bg-[#B7B7A4] px-4 py-2 rounded-t-xl flex justify-between items-center relative">
                            <span>Links</span>
                            <button
                                className="absolute top-2 right-4 text-gray-400 hover:text-gray-600"
                                onClick={() =>
                                {
                                    playCloseClick()
                                    setShowLinks(false)}}
                            >
                                [✕]
                            </button>
                        </div>

                        {/* Scrollable content */}

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 text-gray-700">
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/i.wnabeyours/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-300 transition"
                            >
                                <Image
                                    src="/webp/InstaIcon.webp"
                                    alt="Instagram"
                                    className="w-12 h-12 mb-2"
                                    width={400}
                                    height={400}
                                />
                                <span>Instagram</span>
                            </a>

                            {/* YouTube */}
                            <a
                                href="https://www.youtube.com/@HeyItsJustMaple"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-300 transition"
                            >
                                <Image
                                    src="/webp/YoutubeIcon.webp"
                                    alt="YouTube"
                                    className="w-12 h-12 mb-2"
                                    width={400}
                                    height={400}
                                />
                                <span>YouTube</span>
                            </a>

                            {/* Discord (no link, just display) */}
                            <div
                                className="bg-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">

                                <span>Discord</span>
                                <span className="text-sm text-gray-600 mt-1">MapleHugs</span>
                            </div>

                            {/* Twitter */}
                            <a
                                href="https://x.com/cozymaplehugs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-300 transition"
                            >
                                <Image
                                    src="/webp/TwitterIcon.webp"
                                    alt="Twitter"
                                    className="w-12 h-12 mb-2"
                                    width={400}
                                    height={400}
                                />
                                <span>X</span>
                            </a>
                        </div>

                    </div>
                </div>


                {/* Work */}
                <div
                    className={`fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-in-out ${
                        showWork ? "translate-y-0" : "translate-y-full"
                    }`}
                >
                    <div className="relative bg-white rounded-t-xl shadow-lg max-h-[70vh] flex flex-col">
                        {/* Header / Drag handle */}
                        <div
                            className="cursor-move bg-[#B7B7A4] px-4 py-2 rounded-t-xl flex justify-between items-center relative">
                            <span>Work</span>
                            <button
                                className="absolute top-2 right-4 text-gray-400 hover:text-gray-600"
                                onClick={() => setShowWork(false)}
                            >
                                [✕]
                            </button>
                        </div>

                        {/* Scrollable content */}

                        <div className="overflow-y-auto">
                            <div className=" flex gap-8 text-sm text-gray-700">
                                {/* Left Side */}
                                <div className="flex-1">
                                    <h2 className="text-center text-xl text-[#6B705C]">Programs I have
                                        used</h2>
                                    <div
                                        className="grid grid-cols-3 gap-4 justify-items-center items-center">
                                        <div
                                            className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> IntelliJ
                                        </div>
                                        <div
                                            className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> WebStorm
                                        </div>
                                        <div
                                            className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> PyCharm
                                        </div>
                                        <div
                                            className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> Git
                                            & Github
                                        </div>
                                        <div
                                            className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> Datagrip
                                        </div>
                                        <div
                                            className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> MySQL
                                        </div>

                                    </div>
                                </div>

                                {/* Right Side */}
                                <div className="flex-1">
                                    <h2 className="text-center text-xl text-[#6B705C]">Languages I have
                                        used</h2>
                                    <div
                                        className="grid grid-cols-3 gap-4 justify-items-center items-center">
                                        <div
                                            className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> Java
                                        </div>
                                        <div
                                            className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> Python
                                        </div>
                                        <div
                                            className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> JavaScript
                                        </div>
                                        <div
                                            className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> HTML/CSS
                                        </div>
                                        <div
                                            className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> MySQL
                                        </div>
                                        <div
                                            className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> Next.Js
                                        </div>
                                        <div
                                            className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> React
                                        </div>
                                        <div
                                            className="bg-gray-200 rounded-lg p-4 text-center w-16 h-16 flex items-center justify-center"> Spring
                                            Boot
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 max-h-[50vh] space-y-4 p-2">
                                {/* Development Projects */}
                                <div
                                    className="flex flex-col items-center justify-center p-6 text-center space-y-2">
                                    <h2 className="text-xl text-[#6B705C] font-medium">Development
                                        Projects</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        I have made many projects for college and some personal projects.
                                        You
                                        can
                                        see them on my{' '}
                                        <a
                                            href="https://github.com/maplehugs"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-indigo-500 underline hover:text-indigo-600"
                                        >
                                            GitHub
                                        </a>. Some are private or not well organized because at the time I
                                        didn’t
                                        know how to use GitHub properly, so most of my projects are hidden
                                        or
                                        contain sensitive data.
                                    </p>
                                </div>

                                {/* Drawings Section */}
                                <div
                                    className="flex flex-col items-center justify-center p-6 text-center space-y-2">
                                    <h2 className="text-xl text-[#6B705C] font-medium">My Drawings</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Here are some of the little drawings I’ve made. I enjoy
                                        experimenting
                                        with
                                        sketching and digital art.
                                    </p>
                                    <div
                                        className="grid grid-cols-3 gap-4 justify-items-center items-center">
                                        {/* Replace src with your drawings */}
                                        <Image src="/drawing1.png" alt="Drawing 1"
                                               className="w-24 h-24 object-cover rounded-lg shadow-md"
                                               width={400}
                                               height={400}
                                        />
                                        <Image src="/drawing2.png" alt="Drawing 2"
                                               className="w-24 h-24 object-cover rounded-lg shadow-md"
                                               width={400}
                                               height={400}
                                        />
                                        <Image src="/drawing3.png" alt="Drawing 3"
                                               className="w-24 h-24 object-cover rounded-lg shadow-md"
                                               width={400}
                                               height={400}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


                {/* faq */}
                <div
                    className={`fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-in-out ${
                        showFaq ? "translate-y-0" : "translate-y-full"
                    }`}
                >
                    <div className="relative bg-white rounded-t-xl shadow-lg max-h-[70vh] flex flex-col">
                        {/* Header / Drag handle */}
                        <div
                            className="cursor-move bg-[#B7B7A4] px-4 py-2 rounded-t-xl flex justify-between items-center relative">
                            <span>Faq</span>
                            <button
                                className="absolute top-2 right-4 text-gray-400 hover:text-gray-600"
                                onClick={() =>
                                {
                                    playCloseClick()
                                    setShowFaq(false)}}
                            >
                                [✕]
                            </button>
                        </div>

                        {/* Scrollable content */}

                        <div
                            className="flex flex-col items-center justify-center p-6 text-center space-y-2">
                            <span className="text-3xl font-medium text-[#6B705C]">
                                Questions!
                            </span>
                            <p className="text-gray-700 leading-relaxed">

                                if I ever get a lot of similar questions, I’ll update this section
                            </p>
                        </div>

                    </div>
                </div>


                {/* Contact */}
                <div
                    className={`fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-in-out ${
                        showContact ? "translate-y-0" : "translate-y-full"
                    }`}
                >
                    <div className="relative bg-white rounded-t-xl shadow-lg max-h-[70vh] flex flex-col">
                        {/* Header / Drag handle */}
                        <div
                            className="cursor-move bg-[#B7B7A4] px-4 py-2 rounded-t-xl flex justify-between items-center relative">
                            <span>Contact</span>
                            <button
                                className="absolute top-2 right-4 text-gray-400 hover:text-gray-600"
                                onClick={() =>
                                {
                                    playCloseClick()
                                    setShowContact(false)}}
                            >
                                [✕]
                            </button>
                        </div>

                        {/* Scrollable content */}

                        <div className="flex flex-col flex-1 items-center justify-center p-6 space-y-4 text-center">
                            {/* Main title */}
                            <span className="text-3xl font-medium text-[#6B705C]">
                                            You got mail (actually it&#39;s me)
                                        </span>
                            {/* Explanatory text */}
                            <span className="text-gray-600 text-base leading-relaxed">
                                            It&#39;s better to contact me using email since I can filter messages and see the ones sent to my custom domain.
                                            You can also try contacting me via Instagram. I rarely accept or check Discord friend requests from people I don&#39;t know, and I don&#39;t use Twitter at all.
                                        </span>
                            {/* Email */}
                            <p className="text-gray-700"> Hey, if you want to reach out, my email is:{" "}
                                <span className="text-[#DDBEA9] text-base font-medium cursor-pointer underline"
                                      onClick={() => navigator.clipboard.writeText("me@5maple.com")}>
                                                me@5maple.com
                                            </span>
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    );
}
