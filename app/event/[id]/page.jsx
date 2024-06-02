"use client";

import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendar2Date } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";

function EventDetailPage({ params }) {
  const [event, setEvent] = useState(null);
  const { userId } = useAuth();
  const [userIsBooked, setUserIsBooked] = useState(false);
  const [bookingSuccessful, setBookingSuccessful] = useState(false);

  useEffect(() => {
    const fetchEventById = async () => {
      const response = await fetch(
        `http://localhost:3000/api/events/${params.id}`
      );
      const data = await response.json();
      setEvent(data);
      console.log(data);
      setUserIsBooked(data.attendees.includes(userId));
    };
    fetchEventById();
  }, []);

  if (!event) return null;

  const handleBookEvent = async () => {
    try {
      if (event.seats <= event.attendees.length) {
        console.log("No seats available");
        return;
      }
      const response = await fetch(
        `http://localhost:3000/api/events/${params.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: userId,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      setBookingSuccessful(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex justify-center p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
        <img
          src={event.image}
          alt="event image"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"
        />

        <div className="flex w-full flex-col gap-8 p-5 md:p-10">
          <div className="flex gap-3">
            <p className="font-bold text-4xl capitalize">{event.name}</p>
          </div>

          <div className="flex items-center gap-2">
            <FaLocationDot color="blue" />
            <p className="capitalize font-bold">{event.location}</p>
          </div>
          <div className="flex  items-center gap-2">
            <BsCalendar2Date />
            <p>{event.date}</p>
          </div>
          <div>
            <p className="text-xl font-bold">About the event:</p>
            <p className="">{event.description}</p>
          </div>

          {/* ...rest of the code... */}
          {event.seats <= event.attendees.length ? (
            <p className=" text-red-400">No seats available</p>
          ) : (
            <Button onClick={handleBookEvent} className=" w-32">
              {userIsBooked ? "Cancel Booking" : "Book Event"}
            </Button>
          )}
          {bookingSuccessful && <p className="text-green-500">successfull!</p>}
        </div>
      </div>
    </section>
  );
}
export default EventDetailPage;
