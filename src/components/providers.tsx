"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nProvider, RouterProvider } from "react-aria-components";

type Props = {};

export const Providers = ({ children }: PropsWithChildren<Props>) => {
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider locale="fr">
        <RouterProvider navigate={router.push}>{children}</RouterProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
};

{
  /* <AuthProvider session={session}>
        <DesignSystemProviders navigate={router.push} locale="fr">
          <GleapProvider />
          <TRPCReactProvider>
            <FavoriteModalProvider>{children}</FavoriteModalProvider>
            <ReactQueryDevtools />
          </TRPCReactProvider>
        </DesignSystemProviders>
      </AuthProvider> */
}
