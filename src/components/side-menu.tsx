import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart } from "@/components/icons/heart";
import { AlbumIcon } from "@/components/icons/album";
import { GalleryIcon } from "@/components/icons/gallery";
import Link from "next/link";
import cloudinary from "cloudinary";

export default async function SideMenu() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };
  return (
    <div className={cn("pb-12 w-1/6")}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2"
            >
              <Link href={"/gallery"}>
                <GalleryIcon />
                Gallery
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2"
            >
              <Link href={"/albums"}>
                <AlbumIcon />
                Albums
              </Link>
            </Button>
            {folders.map((folder) => (
              <Button
                asChild
                variant={"ghost"}
                key={folder.name}
                className="w-full justify-start flex gap-2"
              >
                <Link className="pl-8" href={`/albums/${folder.path}`}>
                  {folder.name}
                </Link>
              </Button>
            ))}
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2"
            >
              <Link href={"/favourites"}>
                <Heart />
                Favourites
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
