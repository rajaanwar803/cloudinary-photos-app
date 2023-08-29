"use client";

import { CldImage, CldUploadButton } from "next-cloudinary";
import { Button } from "./ui/button";
import UploadIcon from "./icons/upload";
import { useState } from "react";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function MainPageView() {
  const [imageId, setImageId] = useState("zgtc0rd9jteaoim5ni7a");

  return (
    <>
      <Button variant={"outline"} asChild>
        <CldUploadButton
          onUpload={(result) => {
            const res = result as UploadResult;
            setImageId(res.info.public_id);
          }}
          uploadPreset="kvl91pgo"
        >
          <div className="flex gap-2 items-center">
            <UploadIcon />
            Upload
          </div>
        </CldUploadButton>
      </Button>

      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="My image"
        />
      )}
    </>
  );
}
