type SearchResult = {
  public_id: string;
  tags: string[];
};

type Folder = {
  name: string;
  path: string;
};

type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};
