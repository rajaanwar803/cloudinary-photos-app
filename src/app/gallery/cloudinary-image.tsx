"use client";

import { Heart } from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import { SetAsFavouriteAction } from "./actions";
import { useTransition } from "react";
import { SearchResult } from "./page";
import { FullHeart } from "@/components/icons/full-heart";

export function CloudinaryImage(
  props: any & { imageData: SearchResult; path: string }
) {
  const [transition, startTransition] = useTransition();

  const { imageData } = props;
  const isFavourited = imageData.tags.includes("favourite");

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />

      {isFavourited ? (
        <FullHeart
          onClick={() => {
            startTransition(() => {
              SetAsFavouriteAction(imageData.public_id, false, props.path);
            });
          }}
          className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer "
        />
      ) : (
        <Heart
          onClick={() => {
            startTransition(() => {
              SetAsFavouriteAction(imageData.public_id, true, props.path);
            });
          }}
          className="absolute top-2 right-2 hover:text-red-500 cursor-pointer "
        />
      )}
    </div>
  );
}
