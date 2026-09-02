export type Blog = {
  id: number;
  image: string;
  date: string;
  title: string;
  author: string;
  tag: string;
  commentCount: number;
  excerpt?: string;
  detailImage?: string;
  detailImage2?: string;
  authorAvatar?: string;
  publishedAt?: string;
  intro?: string;
  tags?: string[];
  imageWidth?: number;
  imageHeight?: number;
};
