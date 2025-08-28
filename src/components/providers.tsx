"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { I18nProvider, RouterProvider } from "react-aria-components";

type Props = {};

export const Providers = ({ children }: PropsWithChildren<Props>) => {
  const router = useRouter();
  return (
    <I18nProvider locale="fr">
      <RouterProvider navigate={router.push}>{children}</RouterProvider>
    </I18nProvider>
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
