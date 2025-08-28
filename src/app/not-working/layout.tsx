import { Providers } from "@/components/providers";
import { SharedNavbar } from "@/components/shared/shared-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Providers>
        <SharedNavbar prefix="/not-working" />
        {children}
      </Providers>
    </>
  );
}
