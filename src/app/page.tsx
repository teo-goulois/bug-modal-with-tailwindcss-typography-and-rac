import { buttonStyles } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Link href="/working" className="px-4 py-2 border border-gray-300">
        Working example
      </Link>
      <Link className="px-4 py-2 border border-gray-300" href="/not-working">
        Not Working example
      </Link>
    </>
  );
}
