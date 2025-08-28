"use client";

import { useDisclosure, UseDisclosureProps } from "@/hooks/use-disclosure";
import { Modal } from "../ui/modal";
import { twJoin } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { parseAsString, useQueryState } from "nuqs";
import { Link } from "../ui/link";

type Props = {} & UseDisclosureProps;

export const SharedModal = ({ ...disclosureProps }: Props) => {
  const router = useRouter();
  const [search, setSearch] = useQueryState("q", parseAsString);

  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/page-01-simple",
      label: "Page 01 Simple",
    },
    {
      href: "/page-02-with-html",
      label: "Page 02 With Html",
    },
    {
      href: "/page-03-with-html-and-prose",
      label: "Page 03 With Html And Prose",
    },
    {
      href: "/page-04-with-html-and-prose-and-async",
      label: "Page 04 With Html And Prose And Async",
    },
  ];
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
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onPress={() => {
                disclosureProps.onClose?.();
                setSearch(null);
              }}
            >
              {link.label}
            </Link>
          ))}
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
