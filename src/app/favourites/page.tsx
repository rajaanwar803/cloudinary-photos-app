import cloudinary from "cloudinary";
import { ForceRefresh } from "@/components/force-refresh";
import FavouritesList from "./favourites-list";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function FavouritesPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favourite Images</h1>
        </div>

        <FavouritesList initialResources={results.resources} />

        {/* <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <CloudinaryImage
              // path="/favourites"
              key={result.public_id}
              width="400"
              height="300"
              imageData={result}
              sizes="100vw"
              alt="Description of my image"
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
