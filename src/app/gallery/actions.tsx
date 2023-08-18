"use server";

import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
import { resolve } from "path";

export async function SetAsFavouriteAction(
  publicId: string,
  isFavourite: boolean,
  path: string
) {
  if (isFavourite) {
    await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);
  }
  await new Promise((resolve) => setTimeout(resolve, 1500));
  revalidatePath(path);
}
