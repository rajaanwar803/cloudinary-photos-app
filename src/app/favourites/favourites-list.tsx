"use client";

import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "@/components/cloudinary-image";
import { useEffect, useState } from "react";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default function FavouritesList({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <ImageGrid
      images={resources}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            // path="/favourites"
            key={imageData.public_id}
            width="400"
            height="300"
            imageData={imageData}
            sizes="100vw"
            alt="Description of my image"
            onUnheart={(unheartedResource) => {
              setResources((currentResources) =>
                currentResources.filter(
                  (resource) =>
                    resource.public_id !== unheartedResource.public_id
                )
              );
            }}
          />
        );
      }}
    />

    // <div className="grid grid-cols-4 gap-4">
    //   {resources.map((result) => (
    // <CloudinaryImage
    //   // path="/favourites"
    //   key={result.public_id}
    //   width="400"
    //   height="300"
    //   imageData={result}
    //   sizes="100vw"
    //   alt="Description of my image"
    //   onUnheart={(unheartedResource) => {
    //     setResources((currentResources) =>
    //       currentResources.filter(
    //         (resource) => resource.public_id !== unheartedResource.public_id
    //       )
    //     );
    //   }}
    // />
    //   ))}
    // </div>
  );
}
