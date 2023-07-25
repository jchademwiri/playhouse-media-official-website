import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.playhousemedia.net/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.playhousemedia.net/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://www.playhousemedia.net/projects',
      lastModified: new Date(),
    },
  ];
}
