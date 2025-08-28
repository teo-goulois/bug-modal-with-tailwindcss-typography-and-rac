"use client";

import { useDisclosure } from "@/hooks/use-disclosure";
import { SharedModal } from "./shared-modal";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

export const SharedNavbar = ({}: Props) => {
  const disclosureProps = useDisclosure();
  return (
    <div className="bg-gray-50 top-0 left-0 right-0 flex justify-between items-center z-50">
      <div className="flex gap-2">
        <Link href="/">Home</Link>
      </div>
      <Button onPress={disclosureProps.onOpen}>Open Modal</Button>
      <SharedModal {...disclosureProps} />
    </div>
  );
};
