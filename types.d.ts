// import { PortableTextBlock } from 'sanity-types';
type Faq = {
  question: String;
  answer: string;
};

type Project = {
  id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};
