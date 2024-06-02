import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="max-w-md w-full mt-40">
        <h1 className="mt-6 text-center text-6xl pb-8 font-extrabold">
          Evently
        </h1>
        <div>
          <p className="mt-2 text-center text-2xl font-bold p-3">
            Welcome to Evently!
          </p>
          <p className="mt-2 text-center">
            Evently is your go-to platform for finding already planned events.
            Whether you’re interested in music festivals, community gatherings,
            or professional seminars, Evently has something for everyone.
          </p>
        </div>
        <Button className="mt-8 w-full">
          <Link href="/event">Explore</Link>
        </Button>
      </div>
    </div>
  );
}
