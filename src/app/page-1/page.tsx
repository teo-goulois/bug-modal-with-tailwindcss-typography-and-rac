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
  return (
    <div>
      <p>My Page 1</p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: "content with propse",
        }}
      />
    </div>
  );
}
