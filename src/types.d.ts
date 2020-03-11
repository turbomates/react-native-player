declare module "Models" {
  export type AlbumsResponse = {
    _type: string;
    data: Album[];
  };

  export type Album = {
    id: string;
    title: string;
    isAvailable: boolean;
    isFree: boolean;
    isFeatured: boolean;
    banner: Image;
    cover: Image;
    headphones: boolean;
    descriptionHTML: string;
    tracks: Track[];
  };

  export type Track = {
    key: string;
    title: string;
    order: number;
    duration: number;
    media: {
      mp3: {
        url: string;
        headUrl: string;
      };
    };
    isAvailable: boolean;
  };

  type Image = {
    url: string;
    thumbnail: string;
    resolutions: {
      url: string;
      size: {
        width: number;
        height: number;
      };
    }[];
  };
}
