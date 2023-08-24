"use client";

import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import UploadIcon from "@/components/icons/upload";
import { UploadResult } from "../page";

export default function UploadButton() {
  const router = useRouter();
  return (
    <Button asChild>
      <CldUploadButton
        // onUpload={(result: UploadResult) => {
        //   //   setImageId(result.info.public_id);
        //   router.refresh();
        // }}
        onUpload={(result: UploadResult) => {
          setTimeout(() => router.refresh(), 1000);
        }}
        uploadPreset="kvl91pgo"
      >
        <div className="flex gap-2 items-center">
          <UploadIcon />
          Upload
        </div>
      </CldUploadButton>
    </Button>
  );
}
