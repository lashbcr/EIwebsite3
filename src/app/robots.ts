import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/icons/', '/api/'],
    },
    sitemap: 'https://lashwebsitetwo.netlify.app/sitemap.xml',
  };
}
