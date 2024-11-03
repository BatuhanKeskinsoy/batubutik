import { imageTypes } from "./imageTypes";

export interface blogTypes {
  id: number;
  title: string;
  short_text: string;
  slug: string;
  image: imageTypes;
  views_count: number;
  created_at: Date;
}

export interface fullBlogTypes extends blogTypes {
  keywords: string;
  content: string;
  other_blogs: blogTypes[];
  updated_at: Date | null;
}
