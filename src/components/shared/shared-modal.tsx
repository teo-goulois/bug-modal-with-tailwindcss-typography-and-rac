"use client";

import { useDisclosure, UseDisclosureProps } from "@/hooks/use-disclosure";
import { Modal } from "../ui/modal";
import { twJoin } from "tailwind-merge";
import { Link } from "../ui/link";
import NextLink from "next/link";
import { Separator } from "react-aria-components";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {
  prefix: string;
} & ReturnType<typeof useDisclosure>;

export const SharedModal = ({ prefix, ...disclosureProps }: Props) => {
  const pathname = usePathname();
  const lastPathRef = useRef<string | null>(null);

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

  const onLinkPress = () => {
    disclosureProps.onClose?.();
  };

  const isWorking = pathname.startsWith("/working");
  const isNotWorking = pathname.startsWith("/not-working");

  // Track the last path the user visited
  useEffect(() => {
    if (lastPathRef.current && lastPathRef.current !== pathname) {
      // User navigated to a new page
      lastPathRef.current = pathname;
    } else if (!lastPathRef.current) {
      // Initial load
      lastPathRef.current = pathname;
    }
  }, [pathname]);

  // Check if the last page the user visited was broken (index > 3)
  const getLastPageIndex = (path: string) => {
    console.log({ path });
    const link = links.find((l) => l.href === path);
    return link ? links.indexOf(link) : undefined;
  };

  const lastPageIndex = getLastPageIndex(lastPathRef.current || pathname);
  const lastPageWasBroken = lastPageIndex && lastPageIndex > 3;

  return (
    <Modal
      isOpen={disclosureProps.isOpen}
      onOpenChange={disclosureProps.onOpenChange}
    >
      <Modal.Content
        className={twJoin(
          "max-h-[90dvh] md:w-[calc(100dvw-1rem)] md:!max-w-none md:h-[calc(100dvh-1rem)] md:max-h-screen"
        )}
      >
        <Modal.Header className="font-bold">
          {prefix.replace("/", "").replace("-", " ")} Example -{" "}
          <span
            className={twJoin(
              "font-normal",
              disclosureProps.isOpen ? "text-green-500" : "text-red-500"
            )}
          >
            {disclosureProps.isOpen ? "Open" : "Closed"}
          </span>
        </Modal.Header>
        <Modal.Body className="space-y-2.5 h-full min-h-40 flex-col ">
          <div className="flex w-full items-center gap-2">
            <p className="font-bold">Aria Link</p>
            <Separator className="flex-1" />
          </div>
          {links.map((link, index) => {
            const isBroken =
              (index > 3 && isNotWorking) ||
              (lastPageWasBroken && isNotWorking);
            return (
              <Link
                key={link.href}
                href={link.href}
                onPress={onLinkPress}
                className={twJoin(isBroken && "text-red-500")}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex w-full items-center gap-2 mt-6">
            <p className="font-bold">Next.js Link</p>
            <Separator className="flex-1" />
          </div>
          {links.map((link, index) => {
            const isBroken =
              (index > 3 && (isNotWorking || isWorking)) || lastPageWasBroken;
            return (
              <NextLink
                onClick={onLinkPress}
                key={link.href}
                href={link.href}
                className={twJoin(isBroken && "text-red-500")}
              >
                {link.label}
              </NextLink>
            );
          })}
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
