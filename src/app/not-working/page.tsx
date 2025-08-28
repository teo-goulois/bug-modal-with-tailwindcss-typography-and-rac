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
    <div className="flex flex-col gap-4">
      <h1>Not Working</h1>
      <div className="">
        <p className="">Step to reproduce:</p>
        <ol>
          <li>Use Chrome</li>
          <li>Open the modal</li>
          <li>Click the last link or a link with Prose, (not content prose)</li>
          <li>
            if nothing happens, reopen the modal and select another link, you
            should see the bug then now
          </li>
        </ol>
      </div>
    </div>
  );
}
