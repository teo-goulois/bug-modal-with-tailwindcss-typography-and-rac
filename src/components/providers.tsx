"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { RouterProvider } from "react-aria-components";

type Props = {};

export const Providers = ({ children }: PropsWithChildren<Props>) => {
  const router = useRouter();
  return <RouterProvider navigate={router.push}>{children}</RouterProvider>;
};
