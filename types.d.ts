type Faq = {
  question: String;
  answer: string;
};

type Project = {
  name: string;
  slug: string;
  image: string;
  url: string;
};

type Post = {
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
