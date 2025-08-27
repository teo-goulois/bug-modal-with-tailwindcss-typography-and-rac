"use client";

import { useDisclosure } from "@/hooks/use-disclosure";
import { SharedModal } from "./shared-modal";
import { Button } from "../ui/button";

type Props = {};

export const SharedNavbar = ({}: Props) => {
  const disclosureProps = useDisclosure();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background">
      <Button onPress={disclosureProps.onOpen}>Open Modal</Button>
      <SharedModal disclosureProps={disclosureProps} />
    </div>
  );
};
