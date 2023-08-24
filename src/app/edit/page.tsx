"use client";

import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) {
  const [transformation, setTransformation] = useState<
    undefined | "generative-fill" | "blur" | "grayscale" | "pixelate"
  >();
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>
        <div className="flex gap-4">
          <Button onClick={() => setTransformation(undefined)} variant="ghost">
            Clear All
          </Button>
          <Button
            onClick={() => setTransformation("generative-fill")}
            variant="secondary"
          >
            Apply Generative Fill
          </Button>
          <Button onClick={() => setTransformation("blur")} variant="secondary">
            Apply Blur
          </Button>
          <Button
            onClick={() => setTransformation("grayscale")}
            variant="secondary"
          >
            Convert to Gray
          </Button>
          <Button
            onClick={() => setTransformation("pixelate")}
            variant="secondary"
          >
            Pixelate
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <CldImage src={publicId} width="300" height="200" alt="Some Image" />
          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt="Some Image"
              crop="pad"
              fillBackground
            />
          )}

          {transformation === "blur" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt="Some Image"
              blur="800"
            />
          )}
          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt="Some Image"
              grayscale
            />
          )}
          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt="Some Image"
              pixelate
            />
          )}
        </div>
      </div>
    </section>
  );
}
