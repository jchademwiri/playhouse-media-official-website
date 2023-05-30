import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.playhousemedia.net/',
      lastModified: new Date(),
    },
  ];
}
