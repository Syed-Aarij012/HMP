export const LISTING_REVIEW_TABS = [
  { id: "all", label: "All" },
  { id: "mileage", label: "Mileage" },
  { id: "performance", label: "Performance" },
  { id: "safety", label: "Safety" },
  { id: "looks", label: "Looks" },
  { id: "comfort", label: "Comfort" },
] as const;

export type ListingReviewTabId = (typeof LISTING_REVIEW_TABS)[number]["id"];

export type ListingReviewCategory = Exclude<ListingReviewTabId, "all">;

export type ListingReview = {
  id: number;
  author: string;
  avatar: string;
  date: string;
  rating: number;
  text: string;
  categories: ListingReviewCategory[];
  images?: string[];
};

export const LISTING_REVIEWS: ListingReview[] = [
  {
    id: 1,
    author: "Marvin McKinney",
    avatar: "/assets/images/blog/avt1.webp",
    date: "August 13, 2023",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia sit amet elit sed molestie. Sed neque enim, iaculis id viverra in, scelerisque vitae nulla.",
    categories: ["mileage", "looks"],
    images: [
      "/assets/images/blog/cmt1.webp",
      "/assets/images/blog/cmt2.webp",
      "/assets/images/blog/cmt3.webp",
    ],
  },
  {
    id: 2,
    author: "Jenny Wilson",
    avatar: "/assets/images/blog/avt2.webp",
    date: "August 13, 2023",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia sit amet elit sed molestie. Sed neque enim, iaculis id viverra in, scelerisque vitae nulla.",
    categories: ["performance"],
  },
  {
    id: 3,
    author: "Eleanor Pena",
    avatar: "/assets/images/blog/avt3.webp",
    date: "August 13, 2023",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia sit amet elit sed molestie. Sed neque enim, iaculis id viverra in, scelerisque vitae nulla.",
    categories: ["comfort"],
  },
  {
    id: 4,
    author: "Robert Fox",
    avatar: "/assets/images/blog/avt1.webp",
    date: "July 28, 2023",
    rating: 5,
    text: "The safety features give real peace of mind on long drives. Lane assist and emergency braking work smoothly in daily traffic.",
    categories: ["safety"],
  },
  {
    id: 5,
    author: "Cameron Williamson",
    avatar: "/assets/images/blog/avt2.webp",
    date: "July 15, 2023",
    rating: 4,
    text: "Fuel economy exceeded my expectations for a car this size. Great mileage on both city and highway routes.",
    categories: ["mileage"],
  },
  {
    id: 6,
    author: "Leslie Alexander",
    avatar: "/assets/images/blog/avt3.webp",
    date: "June 30, 2023",
    rating: 5,
    text: "Acceleration is sharp and the handling feels planted through corners. A genuinely fun car to drive.",
    categories: ["performance"],
    images: ["/assets/images/blog/cmt1.webp", "/assets/images/blog/cmt2.webp"],
  },
  {
    id: 7,
    author: "Brooklyn Simmons",
    avatar: "/assets/images/blog/avt1.webp",
    date: "June 12, 2023",
    rating: 5,
    text: "Exterior design turns heads everywhere. Clean lines and the paint finish still looks brand new.",
    categories: ["looks"],
  },
  {
    id: 8,
    author: "Wade Warren",
    avatar: "/assets/images/blog/avt2.webp",
    date: "May 24, 2023",
    rating: 4,
    text: "Seats are supportive on long trips and cabin noise stays low. Rear passengers have plenty of legroom.",
    categories: ["comfort"],
  },
];

export const LISTING_REVIEWS_OVERALL_RATING = 4.9;
