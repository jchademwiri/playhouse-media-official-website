type Faq = {
  question: String;
  answer: string;
};

type Project = {
  id: string;
  name: string;
  slug: string;
  image: string;
  url: string;
  categories?: string;
  content: PortableTextBlock;
};

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  mainImage: string;
  content: PortableTextBlock;
  publishedAt: Date;
  author: {
    name: string;
    image: string;
  };
};

type BlogPost = {
  id: string;
  title: string;
  date: string;
};
