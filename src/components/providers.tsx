"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { RouterProvider } from "react-aria-components";

type Props = {};

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export const Providers = ({ children }: PropsWithChildren<Props>) => {
  const router = useRouter();
  return <RouterProvider navigate={router.push}>{children}</RouterProvider>;
};
