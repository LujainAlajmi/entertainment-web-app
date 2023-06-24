export type Medias = Media[];

export interface Media {
  title: string;
  thumbnail: string;
  year: number;
  category: string;
  rating: string;

  isTrending: boolean;
}
