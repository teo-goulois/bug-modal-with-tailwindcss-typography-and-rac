import { Metadata } from "next";

export const metadata: Metadata = {
  title: "title",
  description: "description",
};

export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <div>Working</div>;
}
