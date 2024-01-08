import React from "react";
import { participants } from "../constants";

const Participants = () => {
  return (
    <section id="participants" className="section py-20 relative">
      <div className="absolute w-[300px] h-[50px] bg-rose-500 rounded-full -z-10 blur-[150px] left-1/2 top-1/2 sm:top-[125px] -translate-x-1/2"></div>

      <h2>Participants</h2>
      <ul className="grid sm:grid-cols-3 gap-4 text-center mt-2">
        {participants.map((item) => (
          <li
            className="h-32 grid place-items-center border-2 border-white [background-image:radial-gradient(at_50%_0,white,transparent)] shadow-inner p-2 py-5 rounded-2xl backdrop-blur-md"
            key={item.id}
          >
            <h3 className="font-semibold text-xl">{item.name}</h3>
            <p className="text-gray-700 font-light">{item.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Participants;
