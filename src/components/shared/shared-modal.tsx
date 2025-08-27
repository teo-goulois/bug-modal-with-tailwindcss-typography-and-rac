"use client";

import { useDisclosure } from "@/hooks/use-disclosure";
import { Modal } from "../ui/modal";
import { ButtonPrimitive } from "../ui/button";
import { twJoin } from "tailwind-merge";
import { PropsWithChildren } from "react";
import { ListBox } from "../ui/list-box";
import { useRouter } from "next/navigation";

type Props = {
  disclosureProps: ReturnType<typeof useDisclosure>;
};

export const SharedModal = ({ disclosureProps }: Props) => {
  const router = useRouter();
  return (
    <Modal
      isOpen={disclosureProps.isOpen}
      onOpenChange={(isOpen) => {
        setTimeout(() => {
          if (isOpen) {
            disclosureProps.onOpen?.();
          } else {
            disclosureProps.onClose?.();
          }
        }, 0);
      }}
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
          <ListBox>
            <ListBox.Item
              onAction={() => {
                router.push("/page-1");
                disclosureProps.onClose?.();
              }}
            >
              lien
            </ListBox.Item>
          </ListBox>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
