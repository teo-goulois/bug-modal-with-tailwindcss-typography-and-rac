"use client";

import { useDisclosure } from "@/hooks/use-disclosure";
import { Modal } from "../ui/modal";
import { ButtonPrimitive } from "../ui/button";
import { twJoin } from "tailwind-merge";
import { PropsWithChildren } from "react";
import { ListBox } from "../ui/list-box";
import { useRouter } from "next/navigation";
import { parseAsString, useQueryState } from "nuqs";
import Link from "next/link";

type Props = {
  disclosureProps: ReturnType<typeof useDisclosure>;
};

export const SharedModal = ({ disclosureProps }: Props) => {
  const router = useRouter();
  const [search, setSearch] = useQueryState(
    "q",
    parseAsString.withOptions({
      history: "push",
      shallow: false,
    })
  );
  return (
    <Modal
      isOpen={disclosureProps.isOpen}
      onOpenChange={disclosureProps.onOpenChange}
    >
      <Modal.Content
        closeButton={false}
        className={twJoin(
          "max-h-[90dvh] md:w-[calc(100dvw-1rem)] md:!max-w-none md:h-[calc(100dvh-1rem)] md:max-h-screen"
        )}
        //side="bottom"
        /*  classNames={{
          content: cn(
            "max-h-[90dvh] md:h-[calc(100dvh-1rem)] md:max-h-screen",
            //inputValue?.length > 0 ? "h-[90dvh] md:h-screen" : "",
          ),
        }} */
      >
        <Modal.Body className="space-y-2.5 h-full min-h-40">
          <div>
            <Link
              href="/page-1"
              onClick={() => {
                disclosureProps.onClose?.();
              }}
            >
              lien
            </Link>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
