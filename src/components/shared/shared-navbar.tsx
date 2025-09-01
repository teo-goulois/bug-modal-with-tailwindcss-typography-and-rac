"use client";

import { SharedModal } from "./shared-modal";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twJoin } from "tailwind-merge";

type Props = {
  prefix: string;
};

export const SharedNavbar = ({ prefix }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const links = [
    {
      href: "/not-working",
      label: "Not Working",
      isActive: pathname.startsWith("/not-working"),
    },
    {
      href: "/working",
      label: "Working",
      isActive: pathname.startsWith("/working"),
    },
  ];
  return (
    <div className="bg-gray-50 top-0 py-4 px-8  fixed left-0 right-0 flex justify-between items-center z-50">
      <div className="flex gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={twJoin(
              "px-4 py-2 border border-gray-300",
              link.isActive && "bg-gray-200"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-2">
        <Button onPress={() => setIsOpen(true)}>Open Modal</Button>
      </div>
      <SharedModal
        prefix={prefix}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onOpenChange={() => {
          setIsOpen((prev) => {
            if (prev) {
              return false;
            }
            return true;
          });
        }}
      />
    </div>
  );
};
