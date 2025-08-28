import { SharedNavbar } from "@/components/shared/shared-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SharedNavbar prefix="/working" />
      {children}
    </>
  );
}
