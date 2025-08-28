"use client";

import { UseDisclosureProps } from "@/hooks/use-disclosure";
import { Modal } from "../ui/modal";
import { twJoin } from "tailwind-merge";
import { Link } from "../ui/link";

type Props = {
  prefix: string;
} & UseDisclosureProps;

export const SharedModal = ({ prefix, ...disclosureProps }: Props) => {
  const links = [
    {
      href: `${prefix}/`,
      label: "Home",
    },
    {
      href: `${prefix}/page-01-simple`,
      label: "Page 01 Simple",
    },
    {
      href: `${prefix}/page-02-with-html`,
      label: "Page 02 With Html",
    },
    {
      href: `${prefix}/page-03-with-html-and-content-prose`,
      label: "Page 03 With Html And Content Prose",
    },
    {
      href: `${prefix}/page-04-with-html-and-prose`,
      label: "Page 04 With Html And Prose",
    },
    {
      href: `${prefix}/page-05-with-html-and-prose-and-async`,
      label: "Page 05 With Html And Prose And Async",
    },
    {
      href: `${prefix}/page-06-with-prose-only`,
      label: "Page 06 With Prose Only",
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
      >
        <Modal.Header>
          {prefix.replace("/", "").replace("-", " ")} Example
        </Modal.Header>
        <Modal.Body className="space-y-2.5 h-full min-h-40 flex-col ">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onPress={() => {
                disclosureProps.onClose?.();
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
