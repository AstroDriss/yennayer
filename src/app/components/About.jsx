import Image from "next/image";

import { about, shows } from "../constants";

const About = () => {
  return (
    <section id="about" className="section mt-10">
      <div className="grid md:grid-cols-2 gap-2 items-center">
        <div>
          <h2 className="mb-3">About the Event</h2>
          <p className="text-pretty text-gray-800">{about}</p>
        </div>

        <Image
          className="w-full"
          src="/images/yennayer.webp"
          width={500}
          height={90}
        />
      </div>

      <h2 className="mb-3 mt-8">What are you going to miss</h2>
      <ul>
        {shows.map((item) => (
          <li className="flex gap-2" key={item.id}>
            <svg
              width={12}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>

            {item.title}
          </li>
        ))}
        <li>and more...</li>
      </ul>
    </section>
  );
};

export default About;
