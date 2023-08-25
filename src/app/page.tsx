// "use client";

// import { CldImage, CldUploadButton } from "next-cloudinary";
// import { useState } from "react";

// export type UploadResult = {
//   info: {
//     public_id: string;
//   };
//   event: "success";
// };

// export default function Home() {
//   const [imageId, setImageId] = useState("");
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       {/* <CldUploadButton
//         onUpload={(result: UploadResult) => {
//           setImageId(result.info.public_id);
//         }}
//         uploadPreset="ml_default"
//       /> */}
//       {imageId && (
//         <CldImage
//           width="400"
//           height="300"
//           src={imageId}
//           sizes="100vw"
//           alt="Description of my image"
//         />
//       )}
//     </main>
//   );
// }

import cloudinary from "cloudinary";
import UploadButton from "./gallery/upload-button";
import { SearchForm } from "./gallery/search-form";
import GalleryGrid from "./gallery/gallery-grid";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function GalleryPage({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) {
  const results = (await cloudinary.v2.search
    .expression(` resource_type:image${search ? ` AND tags=${search}` : ""}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>
        <SearchForm initialSearch={search} />
        <GalleryGrid images={results.resources} />
      </div>
    </section>
  );
}
