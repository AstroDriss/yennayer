"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { faq } from "../constants";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    if (index == activeIndex) {
      setActiveIndex(null);
      return;
    }
    setActiveIndex(index);
  };

  return (
    <section className="section my-7">
      <h2 className="text-xl font-bold mb-3">Frequently Asked Questions</h2>

      <ul className="flex flex-col gap-2">
        {faq.map((item, index) => (
          <li className="border border-black rounded-md" key={item.id}>
            <button
              className="flex justify-between px-2 py-1 w-full text-left font-bold"
              onClick={(e) => handleClick(index)}
            >
              {item.question}

              <Image
                src="/images/angle-up.svg"
                width={20}
                height={30}
                className={
                  (index !== activeIndex && `rotate-180`) +
                  " transition-transform"
                }
              />
            </button>
            <p
              className={
                (activeIndex !== index && `sr-only`) + ` pl-3 transition-all`
              }
            >
              {item.response}{" "}
              {item.url && (
                <Link className="underline" href={item.url}>
                  read more.
                </Link>
              )}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
