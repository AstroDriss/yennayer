"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navLinks } from "../constants";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="sticky top-0 bg-white/50 border-b border-white py-3 backdrop-blur-sm z-20">
        <header className="section flex justify-between items-center">
          <Link className="text-3xl" href="/">
            &#11619;
          </Link>
          <button
            className="sm:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <p className="sr-only">Toggle Menu</p>
            <Image
              className="h-[27px] w-[27px]"
              alt="toggle menu"
              src={`/images/` + (toggleMenu ? "close.svg" : "menu.svg")}
              height={28}
              width={28}
            />
          </button>

          <nav className="hidden sm:block">
            <ul className="hidden sm:flex gap-8">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <Link className="hover:text-pink-500" href={`#${item.id}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <nav
          className={`z-50 bg-white/90 backdrop-blur-sm shadow-md absolute right-5 p-2 rounded-md ${
            toggleMenu ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-2 justify-stretch w-32">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  className="hover:text-pink-500 hover:bg-slate-200 px-2 rounded-sm w-full block"
                  href={`#${item.id}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
