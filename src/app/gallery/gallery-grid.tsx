"use client";

import { CloudinaryImage } from "./cloudinary-image";
import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "./page";

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            // path="/gallery"
            key={imageData.public_id}
            width="400"
            height="300"
            imageData={imageData}
            sizes="100vw"
            alt="Description of my image"
          />
        );
      }}
    />
  );
}
