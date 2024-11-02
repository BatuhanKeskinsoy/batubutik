import { imageTypes } from "./imageTypes";

export interface Blog {
  id: number;
  title: string;
  short_text: string;
  slug: string;
  image: imageTypes;
  views_count: number;
  created_at: Date;
}

export interface FullBlog extends Blog {
  keywords: string;
  content: string;
  other_blogs: Blog[];
  updated_at: Date | null;
}
