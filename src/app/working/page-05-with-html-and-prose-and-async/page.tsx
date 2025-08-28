import { Metadata } from "next";

export const metadata: Metadata = {
  title: "title",
  description: "description",
};

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const fakePromise = new Promise((resolve) => {
    setTimeout(() => {
      const contente = `
          <h1>Hello World</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
`;

      resolve(contente);
    }, 1000);
  });
  const content = (await fakePromise) as string;
  return (
    <div>
      <p>page-05-with-html-and-prose-and-async</p>
      <div
        className="prose prose-sm"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
}
