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
      <p>page-06-with-prose-only</p>
      <div className="content-prose">
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </div>
  );
}
