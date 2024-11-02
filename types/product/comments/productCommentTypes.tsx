export type ProductCommentTypes = {
  id: number;
  code: string;
  comment: string;
  reply: string | null;
  rating: number;
  user: {
    firstName: string;
    lastName: string;
  };
  created_at: Date;
};
