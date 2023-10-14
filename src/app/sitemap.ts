import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const rootUrl = 'https://www.playhousemedia.net';

  return [
    {
      url: `${rootUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${rootUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${rootUrl}/projects`,
      lastModified: new Date(),
    },
  ];
}
