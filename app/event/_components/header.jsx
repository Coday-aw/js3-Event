import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  return (
    <div className="p-6 border-b">
      <div className="flex justify-between">
        <Link href="/event" className="font-bold text-3xl">
          Evently
        </Link>
        <div className="flex gap-32 items-center justify-center font-bold text-2xl cursor-pointer">
          <Link href="/">Home</Link>
          <Link href="/event">Events</Link>
        </div>
        <div className="flex justify-center items-center gap-3">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </div>
  );
};
export default Header;
