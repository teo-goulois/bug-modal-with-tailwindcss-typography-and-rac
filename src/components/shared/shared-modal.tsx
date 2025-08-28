"use client";

import { useDisclosure, UseDisclosureProps } from "@/hooks/use-disclosure";
import { Modal } from "../ui/modal";
import { twJoin } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { parseAsString, useQueryState } from "nuqs";
import Link from "next/link";

type Props = {} & UseDisclosureProps;

export const SharedModal = ({ ...disclosureProps }: Props) => {
  const router = useRouter();
  const [search, setSearch] = useQueryState("q", parseAsString);
  return (
    <Modal
      isOpen={disclosureProps.isOpen}
      onOpenChange={disclosureProps.onChange}
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
        <Modal.Body className="space-y-2.5 h-full min-h-40 flex-col ">
          <input
            className="border"
            type="text"
            value={search ?? ""}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link
            href="/"
            onClick={() => {
              disclosureProps.onClose?.();
              setSearch(null);
            }}
          >
            Home
          </Link>
          <Link
            href="/page-1"
            onClick={() => {
              disclosureProps.onClose?.();
              setSearch(null);
            }}
          >
            Page 1
          </Link>
          <Link
            href="/page-2"
            onClick={() => {
              disclosureProps.onClose?.();
              setSearch(null);
            }}
          >
            Page 2
          </Link>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
