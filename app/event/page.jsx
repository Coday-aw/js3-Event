"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function EventPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:3000/api/events");
      const data = await response.json();
      setEvents(data);
      console.log(data);
    };
    fetchEvents();
  }, []);

  return (
    <>
      <div className="text-center font-bold p-5 text-5xl">
        All available events
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1  justify-items-center max-w[900px] mx-auto ">
        {events.map((event, index) => (
          <Link
            href={`/event/${event.id}`}
            key={index}
            className="flex flex-col m-4 w-[500px] md:w-120 h-120 shadow-lg rounded overflow-hidden border border-gray-300 dark:border-gray-700 cursor-pointer transform transition duration-500 ease-in-out hover:scale-105"
          >
            <img
              className="w-full h-80 sm:h-96 object-cover"
              src={event.image}
              alt={event.name}
            />
            <div className="p-4 flex-1">
              <p className="text-xl font-bold">{event.name}</p>
              <p className="mt-2">
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <p>
                <strong>Seats:</strong> {event.seats}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
export default EventPage;
