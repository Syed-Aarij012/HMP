import type { Blog } from "@/types/blogs";

const BLOG_DATE = "January 28, 2026";
const BLOG_AUTHOR = "Jenny Wilson";
const BLOG_TAG = "Used car";
const BLOG_COMMENT_COUNT = 8;

const BLOG_EXCERPT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere est eget lorem viverra eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...";

const BLOG_EXCERPT_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ipsum fermentum, ullamcorper tortor et, convallis massa. Maecenas non urna eget risus vestibulum cursus. Maecenas placerat consectetur...";

const BLOG_INTRO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed enim nec nisi condimentum laoreet tincidunt vitae nibh. Ut tristique velit non odio dignissim, nec dictum risus tempor.";

function createBlog(
  id: number,
  title: string,
  overrides?: Partial<Blog>,
): Blog {
  return {
    id,
    title,
    image: `/assets/images/blog/blog${id}.webp`,
    date: BLOG_DATE,
    author: BLOG_AUTHOR,
    tag: BLOG_TAG,
    commentCount: BLOG_COMMENT_COUNT,
    excerpt: BLOG_EXCERPT,
    detailImage: "/assets/images/blog/blog-single1.webp",
    detailImage2: "/assets/images/blog/blog-single2.webp",
    authorAvatar: "/assets/images/blog/avata.webp",
    publishedAt: "Sep 12, at 11:01am",
    intro: BLOG_INTRO,
    tags: ["Carus", "BMW"],
    ...overrides,
  };
}

export const blogListPosts: Blog[] = [
  createBlog(
    1,
    "A New Hyundai Tucson Is Coming for 2027. Here's Everything We Know",
    {
      image: "/assets/images/blog/blog1.webp",
      imageWidth: 1416,
      imageHeight: 797,
    },
  ),
  createBlog(
    2,
    "Electric Cars Are Transforming Daily Life. A Look at Modern Driving",
    {
      image: "/assets/images/blog/blog2.webp",
      imageWidth: 1416,
      imageHeight: 797,
    },
  ),
  createBlog(
    3,
    "Luxury Sedans Are Redefining Comfort. Exploring Style and Innovation",
    {
      image: "/assets/images/blog/blog3.webp",
      imageWidth: 1416,
      imageHeight: 797,
    },
  ),
  createBlog(
    4,
    "Sports Cars Are Entering a New Era. Performance Meets Sustainability",
    {
      image: "/assets/images/blog/blog4.webp",
      imageWidth: 1416,
      imageHeight: 797,
    },
  ),
];

export const blogGridPosts: Blog[] = [
  createBlog(
    5,
    "A New Hyundai Tucson Is Coming for 2027. Here's Everything We Know",
    {
      image: "/assets/images/blog/blog-grid1.webp",
      imageWidth: 684,
      imageHeight: 444,
    },
  ),
  createBlog(
    6,
    "Electric Cars Are Transforming Daily Life. A Look at Modern Driving",
    {
      image: "/assets/images/blog/blog-grid2.webp",
      imageWidth: 684,
      imageHeight: 444,
    },
  ),
  createBlog(
    7,
    "Luxury Sedans Are Redefining Comfort. Exploring Style and Innovation",
    {
      image: "/assets/images/blog/blog-grid3.webp",
      imageWidth: 684,
      imageHeight: 444,
    },
  ),
  createBlog(
    8,
    "Family Cars Are Becoming Smarter. Features That Parents Appreciate",
    {
      image: "/assets/images/blog/blog-grid4.webp",
      imageWidth: 684,
      imageHeight: 444,
    },
  ),
  createBlog(
    9,
    "Car Interiors Are Getting Luxurious. Comfort and Tech Combined Today",
    {
      image: "/assets/images/blog/blog-grid5.webp",
      imageWidth: 684,
      imageHeight: 444,
    },
  ),
  createBlog(
    10,
    "Car Connectivity Is Expanding Rapidly. How Tech Shapes Driver Habits",
    {
      image: "/assets/images/blog/blog-grid6.webp",
      imageWidth: 684,
      imageHeight: 444,
    },
  ),
  createBlog(
    11,
    "Off-Road SUVs Are Gaining Popularity. Why Adventure Lovers Choose Them",
    {
      image: "/assets/images/blog/blog-grid7.webp",
      imageWidth: 684,
      imageHeight: 444,
    },
  ),
  createBlog(
    12,
    "The Role of AI in Modern Vehicles. How Smart Cars Assist Drivers Daily",
    {
      image: "/assets/images/blog/blog-grid8.webp",
      imageWidth: 684,
      imageHeight: 444,
    },
  ),
  createBlog(
    13,
    "2026 Nissan Leaf First Drive: Good Enough To Put Nissan Back In The Game",
    {
      image: "/assets/images/blog/blog-grid9.webp",
      imageWidth: 684,
      imageHeight: 444,
      detailImage: "/assets/images/blog/blog-single1.webp",
    },
  ),
];

export const homeLatestNews: Blog[] = [
  createBlog(
    14,
    "Electric Cars Are Transforming Daily Life. A Look at Modern Driving",
    {
      image: "/assets/images/blog/blog5.webp",
      imageWidth: 690,
      imageHeight: 444,
    },
  ),
  createBlog(
    15,
    "A New Hyundai Tucson Is Coming for 2027. Here's Everything We Know",
    {
      image: "/assets/images/blog/blog6.webp",
      imageWidth: 690,
      imageHeight: 444,
    },
  ),
  createBlog(
    16,
    "Luxury Sedans Are Redefining Comfort. Exploring Style and Innovation",
    {
      image: "/assets/images/blog/blog7.webp",
      imageWidth: 690,
      imageHeight: 444,
    },
  ),
];

export const home02LatestNews: Blog[] = [
  createBlog(
    17,
    "Sports Cars Are Entering a New Era. Performance Meets Sustainability",
    {
      image: "/assets/images/blog/blog26.jpg",
      imageWidth: 690,
      imageHeight: 444,
    },
  ),
  createBlog(
    18,
    "Family Cars Are Becoming Smarter. Features That Parents Appreciate",
    {
      image: "/assets/images/blog/blog27.jpg",
      imageWidth: 690,
      imageHeight: 444,
    },
  ),
  createBlog(
    19,
    "Car Interiors Are Getting Luxurious. Comfort and Tech Combined Today",
    {
      image: "/assets/images/blog/blog28.jpg",
      imageWidth: 690,
      imageHeight: 444,
    },
  ),
];

export const home04LatestNews: Blog[] = [
  createBlog(
    20,
    "Electric Cars Are Transforming Daily Life. A Look at Modern Driving",
    {
      image: "/assets/images/blog/blog29.jpg",
      imageWidth: 690,
      imageHeight: 483,
      commentCount: 0,
    },
  ),
  createBlog(
    21,
    "Luxury Sedans Are Redefining Comfort. Exploring Style and Innovation",
    {
      image: "/assets/images/blog/blog30.jpg",
      imageWidth: 690,
      imageHeight: 483,
    },
  ),
  createBlog(
    22,
    "Car Connectivity Is Expanding Rapidly. How Tech Shapes Driver Habits",
    {
      image: "/assets/images/blog/blog31.jpg",
      imageWidth: 690,
      imageHeight: 483,
    },
  ),
  createBlog(
    23,
    "A New Hyundai Tucson Is Coming for 2027. Here's Everything We Know",
    {
      image: "/assets/images/blog/blog29.jpg",
      imageWidth: 690,
      imageHeight: 483,
    },
  ),
];

export const home05LatestNews: Blog[] = [
  createBlog(
    24,
    "Electric Cars Are Transforming Daily Life. A Look at Modern Driving",
    {
      image: "/assets/images/blog/blog5.webp",
      imageWidth: 690,
      imageHeight: 444,
    },
  ),
  createBlog(
    25,
    "A New Hyundai Tucson Is Coming for 2027. Here's Everything We Know",
    {
      image: "/assets/images/blog/blog6.webp",
      imageWidth: 690,
      imageHeight: 444,
    },
  ),
  createBlog(
    26,
    "Luxury Sedans Are Redefining Comfort. Exploring Style and Innovation",
    {
      image: "/assets/images/blog/blog7.webp",
      imageWidth: 690,
      imageHeight: 444,
    },
  ),
];

export const home03FeaturedBlogs: Blog[] = [
  createBlog(
    27,
    "Off-Road SUVs Are Gaining Popularity. Why Adventure Lovers Choose Them",
    {
      image: "/assets/images/blog/blog8.webp",
      imageWidth: 1116,
      imageHeight: 645,
      excerpt: BLOG_EXCERPT_SHORT,
    },
  ),
];

export const home03SideBlogs: Blog[] = [
  createBlog(
    28,
    "Car Connectivity Is Expanding Rapidly. How Tech Shapes Driver Habits",
    {
      image: "/assets/images/blog/blog9.webp",
      imageWidth: 486,
      imageHeight: 483,
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet auctor dolor",
    },
  ),
  createBlog(
    29,
    "The Role of AI in Modern Vehicles. How Smart Cars Assist Drivers Daily",
    {
      image: "/assets/images/blog/blog10.webp",
      imageWidth: 486,
      imageHeight: 483,
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet auctor dolor",
    },
  ),
];

export const home03FeaturedBlog = home03FeaturedBlogs[0];

/** Combined from every section array — used by blog detail pages. */
export const allBlogs: Blog[] = [
  ...blogListPosts,
  ...blogGridPosts,
  ...homeLatestNews,
  ...home02LatestNews,
  ...home04LatestNews,
  ...home05LatestNews,
  ...home03FeaturedBlogs,
  ...home03SideBlogs,
];

export function getBlogById(id: number): Blog | undefined {
  return allBlogs.find((blog) => blog.id === id);
}

export function getBlogDetailHref(id: number): string {
  return `/blog-detail/${id}`;
}

export const BLOG_LIST_TOTAL_COUNT = 26;
export const BLOG_GRID_TOTAL_COUNT = blogGridPosts.length;

export const BLOG_CATEGORIES = [
  { label: "New car review", count: 50, href: "/blog" },
  { label: "First Drives", count: 34, href: "/blog" },
  { label: "Car Buying", count: 69, href: "/blog" },
  { label: "Official", count: 25, href: "/blog" },
  { label: "Technology", count: 12, href: "/blog" },
  { label: "Recalls", count: 12, href: "/blog" },
  { label: "Races and chases", count: 69, href: "/blog" },
] as const;

export const BLOG_POPULAR_TAGS = [
  "Carus",
  "BMW",
  "Design",
  "HMP",
  "Land rover",
  "KIA",
  "Road",
] as const;
