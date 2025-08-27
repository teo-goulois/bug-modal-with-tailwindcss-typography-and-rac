import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export const AppPrefetch = async ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        categories: [
          { id: 1, name: "Category 1" },
          { id: 2, name: "Category 2" },
          { id: 3, name: "Category 3" },
        ],
      };
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};
