export type HeroCategory = {
  id: number;
  icon: string;
  label: string;
};

export type HeroSlide = {
  id: number;
  image: string;
  title: string;
  description: string;
  animateCategories?: boolean;
};

export type Home02HeroSlide = {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  description: string;
};

export type HeroSpecification = {
  id: number;
  icon: string;
  label: string;
  value: string;
};

export type Home03HeroSlide = {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  specifications: HeroSpecification[];
};

export type Home04HeroSlide = {
  id: number;
  image: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  detailUrl: string;
  authorImage: string;
  authorName: string;
  authorTime: string;
};
