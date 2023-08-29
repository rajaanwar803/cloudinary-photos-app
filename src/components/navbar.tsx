import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              width={"40"}
              height={"40"}
              alt="Logo of photo album app"
            />
            <div className="font-semibold">Photos App</div>
          </div>
        </Link>

        <div className="ml-auto flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
