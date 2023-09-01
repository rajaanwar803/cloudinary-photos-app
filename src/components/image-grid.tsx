import { ReactNode } from "react";

const MAX_COLUMNS = 4;

export function ImageGrid({
  images,
  getImage,
}: {
  images: SearchResult[];
  getImage: (imageData: SearchResult) => ReactNode;
}) {
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => idx % MAX_COLUMNS === colIndex);
  }
  return (
    // WebDevCody Masonary Grid

    <div className="grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {column.map(getImage)}
          </div>
        )
      )}
    </div>

    // // Tailwind Masonry Grid
    // <div className="columns-4 gap-4 space-y-4">
    //   {[images.filter((resource, idx) => resource)].map((resource, idx) => (
    //     <div key={idx} className="space-y-4">
    //       {resource.map(getImage)}
    //     </div>
    //   ))}
    // </div>
  );
}
