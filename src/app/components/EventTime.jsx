import Counter from "../components/Counter.jsx";
import { eventInfo } from "../constants";

const EventTime = () => {
  return (
    <section className="p-3 bg-gradient-to-r from-cyan-300 via-green-300 to-yellow-300">
      <div className="section sm:flex justify-between items-center">
        <h2 className="text-2xl mb-2 sm:mb-0">{eventInfo.title}</h2>

        <div>
          <Counter />

          <address className="text-gray-700">
            <p className="flex gap-1">
              <svg
                fill="currentColor"
                width={10}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>

              {eventInfo.location}
            </p>
            <time className="flex gap-1" dateTime={eventInfo.datetime}>
              <svg
                width={10}
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
              </svg>

              {eventInfo.time}
            </time>
          </address>
        </div>
      </div>
    </section>
  );
};

export default EventTime;
