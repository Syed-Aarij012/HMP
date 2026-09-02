export type Testimonial = {
  id: number;
  image: string;
  rating: string;
  starCount: number;
  title: string;
  description: string;
  author: string;
  role: string;
};

export type CustomerFeedback = {
  id: number;
  image: string;
  description: string;
  author: string;
  role: string;
  starCount: number;
};

export type CustomerSay = {
  id: number;
  description: string;
  author: string;
  role: string;
  starCount: number;
};
