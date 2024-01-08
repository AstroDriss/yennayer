import localFont from "next/font/local";
import Link from "next/link";

import { hero } from "../constants";

const meowScript = localFont({
  src: "../../../public/fonts/MeowScript-Regular.ttf",
});

const cookie = localFont({
  src: "../../../public/fonts/Cookie-Regular.ttf",
});

const Hero = () => {
  return (
    <>
      <div className="absolute w-1/2 -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 blur-[100px]">
        <div className="w-full h-[200px] bg-cyan-300"></div>
        <div className="w-full h-[200px] bg-green-300"></div>
        <div className="w-full h-[200px] bg-yellow-300"></div>
      </div>

      <span className="absolute top-[20%] left-[10%] rotate-45 z-[1] opacity-40 text-5xl text-rose-400">
        &#11619;
      </span>
      <span className="absolute bottom-[20%] right-[10%] -rotate-45 z-[1] opacity-50 text-rose-500 text-3xl">
        &#11619;
      </span>

      <section className="h-[80vh] relative backdrop-blur-[100px] ">
        <div className="h-full section flex flex-col justify-center items-center gap-5">
          <h1
            className={`text-center ${cookie.className} text-8xl leading-[1]`}
          >
            {hero.title}
          </h1>

          <Link
            href="#about"
            className="rounded-full px-5 py-2 bg-gradient-to-bl from-cyan-300 via-green-300 to-yellow-300 text-red-500 font-bold border border-red-500 hover:text-rose-400 transition-colors"
          >
            explore more
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
