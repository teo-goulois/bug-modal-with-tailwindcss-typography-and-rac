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
      <p>page-02-with-html</p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: "<h1>Hello World</h1>",
        }}
      />
    </div>
  );
}
