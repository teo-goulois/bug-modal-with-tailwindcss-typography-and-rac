"use client";

import { useDisclosure } from "@/hooks/use-disclosure";
import { SharedModal } from "./shared-modal";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  prefix: string;
};

export const SharedNavbar = ({ prefix }: Props) => {
  const disclosureProps = useDisclosure();
  return (
    <div className="bg-gray-50 top-0 py-4 px-8  fixed left-0 right-0 flex justify-between items-center z-50">
      <div className="flex gap-2">
        <Link href="/not-working" className="px-4 py-2 border border-gray-300">
          Not Working
        </Link>
        <Link href="/working" className="px-4 py-2 border border-gray-300">
          Working
        </Link>
      </div>
      <Button onPress={disclosureProps.onOpen}>Open Modal</Button>
      <SharedModal prefix={prefix} {...disclosureProps} />
    </div>
  );
};
